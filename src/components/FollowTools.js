import React from "react"
import styled from "styled-components"
import * as BREAKPOINT from "../utils/breakpoints.js"

const StyledFollowTools = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  margin-right: 4rem;

  @media${BREAKPOINT.device.lg} {
  }

  @media${BREAKPOINT.device.sm} {
    margin-right: 0;
  }
`

const FollowTools = props => {
  return (
    <StyledFollowTools>
      <a
        href="https://www.instagram.com/amonthlearning"
        target="_blank"
        rel="noreferrer"
      >
        <h5>Follow me on Instagram</h5>
      </a>
    </StyledFollowTools>
  )
}

export default FollowTools
