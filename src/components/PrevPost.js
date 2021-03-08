import React from "react"
import styled from "styled-components"
import StyledLink from "./StyledLink"
import Card from "./Card"
import Spacer from "./Spacer"
import { HiChevronLeft } from "react-icons/hi"
import * as BREAKPOINT from "../utils/breakpoints.js"

const StyledWrapper = styled.div`
  margin-bottom: 2rem;
  max-width: 50%;
  margin-right: 2rem;
  align-self: center;
  * {
    align-items: center;
    word-break: break-word;
    hyphens: auto;
  }
  & img {
    margin-bottom: 0;
    width: 24px;
    margin-right: 2rem;
  }

  @media${BREAKPOINT.device.lg} {
    margin-right: 2rem;
  }

  @media${BREAKPOINT.device.sm} {
    order: 2;
    max-width: 100%;
    margin-right: auto;
  }
`

const StyledNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.2rem;
  transition: all .1s;

  &:hover {
    transform: scale(1.1);
  }
`

const PrevPost = props => {
  return (
    <StyledWrapper>
      {props.prevArticle === null ? (
        <StyledLink to="/">
          <StyledNavContainer>
            <HiChevronLeft size={24}/>
            <h6>Browse series</h6>
          </StyledNavContainer>
        </StyledLink>
      ) : (
        <>
          <h5>Previous</h5>
          <StyledLink to={props.prevArticle.url}>
            <StyledNavContainer>
              <HiChevronLeft size={24}/>
              <h6>{props.prevArticle.title}</h6>
            </StyledNavContainer>
          </StyledLink>
        </>
      )}
    </StyledWrapper>
  )
}

export default PrevPost
