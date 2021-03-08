import React from "react"
import Layout from "../components/Layout"
import StyledLink from "../components/StyledLink"
import Button from "../components/Button"
import Card from "../components/Card"

const NotFound = () => {
  return (
    <Layout>
      <StyledLink to="/">
        <Card>
          <h1>How to Navigate a Website</h1>
          <p>
            {" "}
            I haven't written about this yet, but feel free to read some of my
            other stuff!
          </p>
          <Button>Read some stuff</Button>
        </Card>
      </StyledLink>
    </Layout>
  )
}

export default NotFound
