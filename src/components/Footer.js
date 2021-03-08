import React from "react"
import styled from "styled-components"
import FollowTools from "./FollowTools"
import Text from "./Text"
import * as BREAKPOINT from "../utils/breakpoints.js"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top: 2px black solid;
  align-items: center;
  align-content: center;
  text-align: center;
  max-width: 120rem;
  margin: 2rem auto;
  font-size: 1.6rem;
  height: 50px;
  width: 100%;
  padding: 4rem 0 2rem 0;

  @media${BREAKPOINT.device.sm} {
    flex-direction: column;
    justify-content: center;
    padding: 8rem 0 8rem 0;
  }
`

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Text
          style={{ maxWidth: "90vw" }}
          marginLeft="2"
          marginBottom="2"
          fontSize="1.2rem"
        >
          Copyright © 2021 A Month Learning | All Rights Reserved
        </Text>
        <FollowTools />
      </StyledFooter>
    </>
  )
}

export default Footer
