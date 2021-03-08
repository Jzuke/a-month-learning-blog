import React from "react"
import styled from "styled-components"
import Layout from "./Layout"
import ShareTools from "./ShareTools"
import SideBarCard from "./SideBarCard"
import PostMetadata from "./PostMetadata"
import SEO from "./SEO"
import Pagination from "./Pagination"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

const StyledMdxLayout = styled.div`
  background-color: white;
  border: 2px solid black;
  border-radius: 2px;
  padding: 2rem;
  margin-bottom: 2rem;
`

const shortcodes = { Link }

const MdxLayout = props => {
  const postInfo = props.data.mdx
  return (
    <React.Fragment>
      <Layout
        postNumber={postInfo.frontmatter.postNumber}
        display="flex"
        articlePosition={props.pageContext}
      >
        <SEO />
        <MDXProvider components={shortcodes}>
          <ShareTools {...props} />
          <StyledMdxLayout>
            <h1>{postInfo.frontmatter.title}</h1>
            <PostMetadata
              author={props.data.siteData.siteMetadata.author}
              readTime={postInfo.timeToRead}
            />
            <MDXRenderer>{postInfo.body}</MDXRenderer>
            <Pagination {...props} />
          </StyledMdxLayout>
          <SideBarCard {...props} />
        </MDXProvider>
      </Layout>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      timeToRead
      body
      frontmatter {
        title
        image
        description
        postNumber
        siteURL
        ignore
        topic
      }
      exports {
        metadata {
          ignore
          resources {
            title
            link
          }
          tools {
            name
            link
          }
          costs {
            cost
          }
        }
      }
    }
    siteData: site {
      siteMetadata {
        author
      }
    }
  }
`

export default MdxLayout
