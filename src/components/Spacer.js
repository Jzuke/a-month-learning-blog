import React from "react"
import styled from "styled-components"

const StyledSpacer = styled.div`
  width: ${props => props.horizontalSpace || `0`};
  height: ${props => props.verticalSpace || `0`};
  margin-top: ${props => props.topSpace || `0`};
  margin-right: ${props => props.rightSpace || `0`};
  margin-left: ${props => props.leftSpace || `0`};
  margin-bottom: ${props => props.bottomSpace || `0`};
  margin: ${props => props.space || `0`};
  background-color: ${props => props.color || ""};
`

const Spacer = props => {
  return <StyledSpacer {...props} />
}

export default Spacer
