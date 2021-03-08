import { createGlobalStyle } from "styled-components"
import * as font from "../fonts"
import * as BREAKPOINT from "../utils/breakpoints.js"

const GlobalStyle = createGlobalStyle`

:root  {
  --deckgo-highlight-code-font-size: 2rem;
  --deckgo-highlight-code-carbon-box-shadow: #222 -4px 6px;
  --deckgo-highlight-code-carbon-border-radius: 2px;
  --deckgo-highlight-code-border: 1px black solid;
}
.deckgo-highlight-code-carbon {
  border: 2px solid black;
  margin-top: 4rem;
  margin-bottom: 2rem;
  transform: translate(5px, -5px);
    transition: all .2s;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -o-transition: all .2s;

  &:hover{
    box-shadow: none;
    transform: translate(0px);
  }
  }
}

img {
  margin-bottom: 2rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  overscroll-behavior: none;
}
body {   
  height: 100%;
    background-color: #D4EDD6;
  }

  @font-face {
    font-family: 'Kollektif-Bold';
    font-style: normal;
    src: url(${font.KollektifBoldTTF}) format('truetype'),
    url(${font.KollektifBoldWOFF}) format('woff');
    font-display: fallback;
  }
  

  @font-face {
    font-family: 'Kollektif';
    font-style: normal;
    src: url(${font.KollektifTTF}) format('truetype'),
    url(${font.KollektifWOFF}) format('woff');
    font-display: fallback;
  }

  & .card {
    width: 100%;
    height: fit-content;
  }

  & .headroom-wrapper {
    min-height: 13.5rem !important;
  }

  & a {
    color: #1B6F8C;
  }

  & a:hover {
    text-decoration: none;
  }

  & a:visited {
    color: #1B6F8C;
  }
  
  .gatsby-resp-image-wrapper {
    position:relative;
    border: 2px #222 solid;
    border-radius: 2px;
    box-shadow: -3px 6px #222;
    transform: translate(5px, -5px);
    transition: all .2s;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -o-transition: all .2s;
    
    &:hover {
    box-shadow:none;
    transform: translateX(0px)
    }
  }

  .gatsby-resp-image-figcaption {
    color: #555;
    font-size: 1.4rem
  }


  @media${BREAKPOINT.device.sm} {
    .headroom-wrapper {
      min-height: 11.4rem !important;
    }

    h1 {
      font-size: 4rem;
      line-height: 4rem;
    }
  }
  `

export default GlobalStyle
