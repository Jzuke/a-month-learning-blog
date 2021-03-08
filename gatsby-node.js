const path = require("path")
const _ = require("lodash")

const { createFilePath } = require("gatsby-source-filesystem")
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${value}`,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const topicTemplate = path.resolve("src/templates/topicTemplate.js")
  const postTemplate = path.resolve(`src/components/MdxLayout.js`)
  const result = await graphql(`
  {
    postsMDX: allMdx(
      limit: 2000
      sort: { order: ASC, fields: [frontmatter___topic, frontmatter___postNumber] }
      ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            topic
            postNumber
          }
        }
      }
    }
    topicGroup: allMdx(limit: 2000) {
      group(field: frontmatter___topic) {
        fieldValue
      }
    }
  }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsMDX.edges

  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: postTemplate,
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id,
        topic: node.frontmatter.topic,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })

  // Extract topic data from query create topics page
  const topic = result.data.topicGroup.group

  topic.forEach(topic => {
    createPage({
      path: `${_.kebabCase(topic.fieldValue)}/`,
      component: topicTemplate,
      context: {
        topic: topic.fieldValue,
      },
    })
  })
}
