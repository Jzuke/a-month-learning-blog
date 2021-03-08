import React from "react"
import styled from "styled-components"
import * as BREAKPOINT from "../utils/breakpoints.js"
import useSiteMetadata from "../hooks/use-site-metadata"

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share"

const StyledShareTools = styled.div`
  display: flex;
  background: #fff;
  flex-direction: ${props => props.flexDir || "column"};
  margin-left: -4rem;
  margin-right: 2rem;
  padding: 1rem 1rem 1rem 1rem;
  position: sticky;
  top: 16rem;
  border: 2px solid black;
  height: fit-content;

  & svg {
    margin-top:.5rem;
  }
  
  & > h5{
    margin-bottom: 1rem;
  }

  @media${BREAKPOINT.device.lg} {
    order: 1;
    margin: 0 auto;
    margin-right: 2rem;
  }

  @media${BREAKPOINT.device.sm} {
    flex-direction: row;
    top: 0;
    order: 2;
    margin: 0 auto;
    position: relative;
    align-items: center;

    & *:not(:last-child) {
      margin-right: 1.2rem;
    }
    & > h5{
      margin-bottom: 0;
    }
    & svg {
      margin-top:1rem;
    }
  }
`

const iconSize = 36

const ShareTools = props => {
  const { siteURL } = useSiteMetadata()
  const url = `${siteURL}${props.location.pathname}`
  return (
    <StyledShareTools>
      <h5>Share</h5>
      <EmailShareButton url={url}>
        <EmailIcon
          bgStyle={{ fill: "#333", stroke: "white" }}
          size={iconSize}
          round={true}
        />
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon bgStyle={{ fill: "#333" }} size={iconSize} round={true} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon bgStyle={{ fill: "#333" }} size={iconSize} round={true} />
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon bgStyle={{ fill: "#333" }} size={iconSize} round={true} />
      </TwitterShareButton>
    </StyledShareTools>
  )
}

export default ShareTools
