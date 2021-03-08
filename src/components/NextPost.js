// TODO: create next post component
// What does it do?
// Depending on where User is in content, either show and let them click to next week
// OR display the next series

import React from "react"
import Card from "./Card"
import styled from "styled-components"
import StyledLink from "./StyledLink"
import Spacer from "./Spacer"
import { HiChevronRight } from "react-icons/hi"
import * as BREAKPOINT from "../utils/breakpoints.js"

const StyledWrapper = styled.div`
  margin-bottom: 2rem;
  max-width: 50%;
  margin-left: 2rem;
  align-self: center;
  * {
    word-break: break-word;
    align-items: center;
  }

  & img {
    margin-bottom: 0;
    margin-left: 2rem;
    width: 24px;
  }

  @media${BREAKPOINT.device.sm} {
    max-width: 100%;
    text-align: right;
    margin-left: auto;
  }
`

const StyledNavContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 1.2rem;
transition: all .2s;

  &:hover {
    transform: scale(1.1);
  }
`


const NextPost = props => {
  return (
    <StyledWrapper>
      {props.nextArticle === null ? (
        <StyledLink to="/">
          <StyledNavContainer>
            <h6>Browse series</h6>
            <HiChevronRight size={24} />
          </StyledNavContainer>
        </StyledLink>
      ) : (
        <>
          <h5>Next</h5>
          <StyledLink to={props.nextArticle.url}>
            <StyledNavContainer>
              <h6>{props.nextArticle.title}</h6>
              <HiChevronRight size={24} />
            </StyledNavContainer>
          </StyledLink>
        </>
      )}
    </StyledWrapper>
  )
}

export default NextPost
