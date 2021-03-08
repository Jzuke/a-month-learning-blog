import React from "react"
import StyledLink from "./StyledLink"
import styled from "styled-components"
import * as BREAKPOINT from "../utils/breakpoints.js"

const StyledNav = styled.nav`
  justify-self: flex-end;
  align-self: center;
  margin-right: 2rem;
  & a.nav {
    text-decoration: none;
    color: #22223B;
    &:visited{
      color: #22223B;
    }
    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  @media${BREAKPOINT.device.sm} {
    margin-right: 0;
  }
`

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink className="nav" to={`/`}>
        Home
      </StyledLink>
      <StyledLink className="nav" to={`/welcome`}>
        About
      </StyledLink>
      {/*
        TODO: Finish topics/categories page
       <Link className="nav" to={`/topics`}>Topics</Link> 
       */}
    </StyledNav>
  )
}

export default Nav
