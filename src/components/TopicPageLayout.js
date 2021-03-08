import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Layout from "./Layout"
import Spacer from "./Spacer"

const StyledTopicPageLayout = styled.div`
  padding: 20px;
  background-color: white;
  border: 2px solid black;
  width: 680px;
  margin: 0 auto;
`

const MdxLayout = ({ children }) => {
  return (
    <Layout>
      <StyledTopicPageLayout>{children}</StyledTopicPageLayout>
    </Layout>
  )
}

export default MdxLayout
