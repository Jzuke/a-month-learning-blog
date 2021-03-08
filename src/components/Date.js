import React from "react"
import styled from "styled-components"

const StyledDate = styled.div`
  color: #22223B;
  font-family: Kollektif-Bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: #eee;
  border-radius: 4px;
  padding: 0.4rem 1.2rem;
  font-size: 1.6rem;
  font-family: Kollektif;
  letter-spacing: 1px;
  align-self: center;
  text-align-center;
  width: fit-content;
`

const Date = (props) => {
  return (
    <>
      <StyledDate {...props}>{props.children}</StyledDate>
    </>
  )
}

export default Date
