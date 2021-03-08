import React from "react"
import styled from "styled-components"

const StyledCategories = styled.div`
  display: inline;
  color: #222;
  font-family: Kollektif-Bold;
  letter-spacing: 2px;
  text-transform: lowercase;
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  font-family: Kollektif;
  letter-spacing: 1px;

  & a {
    color: #222;
  }
`

const Categories = ({ children }) => {
  return <StyledCategories>{children}</StyledCategories>
}

export default Categories
