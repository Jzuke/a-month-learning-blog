import React from "react"
import styled from "styled-components"
import * as BREAKPOINT from "../utils/breakpoints.js"

const StyledHomePageGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 2rem;

  @media${BREAKPOINT.device.sm} {
    grid-template-columns: 1fr;
  }
`

const HomePageGrid = ({ children }) => {
  return <StyledHomePageGrid>{children}</StyledHomePageGrid>
}

export default HomePageGrid
