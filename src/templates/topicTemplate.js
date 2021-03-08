import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import ListItem from "../components/ListItem"
import Date from "../components/Date"
import StyledLink from "../components/StyledLink"
import Spacer from "../components/Spacer"
import { graphql } from "gatsby"
import styled from "styled-components"

const StyledTopicPage = styled.div`
  padding: 2rem;
  background-color: white;
  margin-top: 0;
  max-width: 96rem;
  border: 2px black solid;
  border-radius: 4px;

  & h4 {
    color: #1B6F8C;
    display:inline-block;
    text-decoration:underline;
    &:hover {
      text-decoration: none;
    }
  }
`

const Topics = ({ pageContext, data }) => {
  const { topic } = pageContext
  const { edges } = data.allMdx
  return (
    <Layout>
      <StyledTopicPage>
        <Date>{edges[0].node.frontmatter.date}</Date>
        <Spacer horizontalSpace="2rem" verticalSpace="2rem"></Spacer>
        <h1>{topic}</h1>
        <Spacer
          color="black"
          bottomSpace="5px"
          horizontalSpace="100%"
          verticalSpace=".2rem"
        ></Spacer>
        <ul>
          <Spacer horizontalSpace="100%" verticalSpace="2rem"></Spacer>
          {edges.map(({ node }) => {
            const { slug } = node
            const { title, description } = node.frontmatter
            return (
              <ListItem key={slug}>
                <StyledLink to={slug.substring(slug.lastIndexOf("/") + 1)}>
                  <h4>{title.split("-").pop()}</h4>
                </StyledLink>
                <p>{description}</p>
              </ListItem>
            )
          })}
        </ul>
      </StyledTopicPage>
    </Layout>
  )
}
Topics.propTypes = {
  pageContext: PropTypes.shape({
    topic: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              postNumber: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Topics
export const pageQuery = graphql`
  query($topic: String) {
    allMdx(
      limit: 2000
      filter: { frontmatter: { topic: { in: [$topic] } } }
      sort: { fields: [frontmatter___postNumber], order: ASC }
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            description
            title
            postNumber
            date
          }
        }
      }
    }
  }
`
