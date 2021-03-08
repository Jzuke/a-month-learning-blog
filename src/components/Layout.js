import React from "react"
import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"
import Spacer from "./Spacer"
import SubscribeForm from "./SubscribeForm"
import Pagination from "./Pagination"
import * as BREAKPOINT from "../utils/breakpoints.js"

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 98rem;
  position: relative; 
  display: ${ props=> props.display };
  height: auto;
  min-height: 100%;
  padding: 0 2rem;

  @media${BREAKPOINT.device.sm} {
    width: 100%;
    flex-wrap: wrap;
    padding: ${props => props.padding || "0 0"}rem;
  }
`

const Layout = props => {
  return (
    <div
      style={{ display: "flex", minHeight: `100vh`, flexDirection: "column"}}
    >
      <GlobalStyle />
      <Header />
      <Spacer horizontalSpace={`100%`} verticalSpace={`40px`} />
      <StyledLayout {...props} padding="0 0.5">
        {props.children}
      </StyledLayout>
      <Spacer
        style={{ flexGrow: "1" }}
        horizontalSpace={"auto"}
        verticalSpace={"40px"}
      />
        <SubscribeForm {...props}/>
      
      {/* Only show pagination if it is a blog post page AND if it's not the welcome card——see MDXLayout.js for logic, pass Layout these props */}
      {/* {props.blogPost && !props.welcomeCard ? <Pagination {...props} /> : ""} */}
      <Footer />
    </div>
  )
}

export default Layout
