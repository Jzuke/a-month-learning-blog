import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledGatsbyLink = styled(props => <Link {...props} />)`
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  height: 100%;
  text-decoration: none;
`

const StyledLink = props => {
  return <StyledGatsbyLink {...props}>{props.children}</StyledGatsbyLink>
}

export default StyledLink
