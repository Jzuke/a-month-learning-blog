import React from "react"
import Card from "./Card"
import Button from "./Button"
import Text from "./Text"
import StyledLink from "./StyledLink"
import { useStaticQuery, graphql } from "gatsby"

const WelcomeCard = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: { title: { eq: "Welcome to A Month Learning" } }
        }
      ) {
        nodes {
          id
          slug
          frontmatter {
            description
            title
            date
          }
        }
      }
    }
  `)

  return (
    <StyledLink className="card" to={allMdx.nodes[0].slug}>
      <Card width="100%" fontSize="36px">
        <h3>{allMdx.nodes[0].frontmatter.title} </h3>
        <Text>{allMdx.nodes[0].frontmatter.description}</Text>
        <Button>Learn More</Button>
      </Card>
    </StyledLink>
  )
}

export default WelcomeCard
