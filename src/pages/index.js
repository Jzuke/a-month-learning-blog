import React from "react"
import { graphql } from "gatsby"
import { v4 as uuidv4 } from "uuid"
import Layout from "../components/Layout"
import styled from "styled-components"
import Card from "../components/Card"
import WelcomeCard from "../components/WelcomeCard"
import Date from "../components/Date"
import Categories from "../components/Categories"
import Button from "../components/Button"
import StyledLink from "../components/StyledLink"
import HomePageGrid from "../components/HomePageGrid"
import SEO from "../components/SEO"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const StyledCardDataContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3.2rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export default function Home({ data }) {
  return (
    <Layout>
      <SEO />
      <WelcomeCard />
      <HomePageGrid>
        {data.allMdx.group.map(node =>
          node.nodes[0].exports.metadata.ignore === "false" ? (
            <StyledLink
              key={node.id}
              to={node.topic.replace(/ /g, "-").toLowerCase()}
            >
              <Card>
                <StyledCardDataContainer>
                  <Date>{node.nodes[0].frontmatter.date}</Date>
                  <Categories>
                    {node.nodes[0].frontmatter.categories.map(category => (
                        <span key={uuidv4()}>#{category} </span>
                    ))}
                  </Categories>
                </StyledCardDataContainer>
                <h3>{node.topic}</h3>
                <p>{node.nodes[0].frontmatter.description}</p>
                <Button>Read Series</Button>
              </Card>
            </StyledLink>
          ) : (
            <></>
          )
        )}
      </HomePageGrid>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx {
      group(field: frontmatter___topic) {
        topic: fieldValue
        nodes {
          frontmatter {
            description
            date
            categories
          }
          exports {
            metadata {
              ignore
            }
          }
        }
      }
    }
  }
`
