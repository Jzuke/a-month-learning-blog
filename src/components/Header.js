import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Nav from "./Nav"
import Spacer from "./Spacer"
import Logo from "../../static/logo.svg"
import LogoSmall from "../../static/logosmall.svg"
import Headroom from "react-headroom"
import * as BREAKPOINT from '../utils/breakpoints.js'

const HeaderLayout = styled.div`
  justify-content: space-between;
  background-color: #fff;
  max-width: 1200px;
  display: flex;
  padding-bottom: 0rem;
  margin: 0 auto;


  @media${BREAKPOINT.device.sm} {
    padding: 2rem;

    & .size_LG_logo {
      display:none
    }
  }
`

const StyledLogo = styled.img`
  width: 300px;
  margin-top: 2rem;
  margin-left: 2rem;

  @media${BREAKPOINT.device.sm} {
    display: none;
  }
`
const StyledLogoSmall = styled.img`
  display:none;

  @media${BREAKPOINT.device.sm} {
    display:block;
    margin: 0;
    left: 0;
  }
`

const Header = () => {
  return (
      <Headroom style={{backgroundColor: '#fff', }}>
        <HeaderLayout>
        <Link className="size_LG_logo" to={'/'}><StyledLogo alt="A Month Learning Logo" src={Logo} /></Link>
        <Link className="size_SM_logo" to={'/'}><StyledLogoSmall alt="A Month Learning Logo" src={LogoSmall} /></Link>
        <Nav></Nav>
        </HeaderLayout>
       <Spacer verticalSpace="2px" horizontalSpace="100%" color="#000"/>
      </Headroom>

  )
}

export default Header
