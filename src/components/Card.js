import React from "react"
import styled from "styled-components"
import * as BREAKPOINT from "../utils/breakpoints.js"

const StyledCard = styled.div`
  flex-direction: ${ props => props.direction || "column"};
  border: 2px black solid;
  border-radius: 4px;
  background-color: white;
  margin-bottom: ${props => props.bottomSpace || "0px"};
  padding: ${props => props.padding || "2rem"};
  transition: 0.2s;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "inherit"};

  & h3 {
    font-size: ${props => props.fontSize || `24px`};
    font-family: Kollektif-Bold;
    line-height: 4rem;
  }

  &:hover {
    pointer: cursor;
    transform: scale(1.05);
  }

  @media${BREAKPOINT.device.sm} {
    width: 100%;
    transition: none;

    &:hover {
      transform: none;
    }
  }
`

const Card = props => {
  return <StyledCard {...props}>{props.children}</StyledCard>
}

export default Card
