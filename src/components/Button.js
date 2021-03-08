import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #D8F1FF;
  color: #22223B;
  height: 4.4rem;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #222;
  padding: 0px 2rem;
  font-size: 1.6rem;
  
    &:hover {
      background: #C6D8E2;

  }

  &:focus {
    border:2px solid #1b6f8c;
    outline:#1b6f8c;
    background: #E5F6FF;
  }
`

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
