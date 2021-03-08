import React from "react"
import styled from "styled-components"

const StyledText = styled.p`
  margin-top: ${props => props.marginTop || "0"}rem;
  margin-right: ${props => props.marginRight || "0"}rem;
  margin-bottom: ${props => props.marginBottom || "2"}rem;
  margin-left: ${props => props.marginLeft || "0"}rem;
  font-size: ${props => props.fontSize || "1.6"}rem;
`

const Text = props => {
  return <StyledText {...props}>{props.children}</StyledText>
}
export default Text
