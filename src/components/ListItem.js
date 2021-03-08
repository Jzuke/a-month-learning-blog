import React from "react"
import styled from "styled-components"

const StyledListItem = styled.li`
  font-size: 1.6rem;
  & a {
    color: #7acfff;
  }

  & a:visited {
    color: #7acfff;
  }
`

const ListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>
}

export default ListItem
