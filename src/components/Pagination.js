import React from 'react'
import styled from 'styled-components'
import NextPost from "./NextPost"
import PrevPost from "./PrevPost"
import * as BREAKPOINT from "../utils/breakpoints.js"

const StyledPagination = styled.div`
display: flex;
border-top: 2px solid #222;
padding-top:2rem;
justify-content: space-between;
margin: 0 auto;

@media${BREAKPOINT.device.sm} {
  flex-direction: column;
}
`

const Pagination = (props) => {
  const prev = props.pageContext.prev && props.pageContext.prev.frontmatter.topic === props.data.mdx.frontmatter.topic
   ? {
         url: `${props.pageContext.prev.fields.slug}`,
         title: props.pageContext.prev.frontmatter.title,
      }
   : null

   const next = props.pageContext.next && props.pageContext.next.frontmatter.topic === props.data.mdx.frontmatter.topic
   ? {
         url: `${props.pageContext.next.fields.slug}`,
         title: props.pageContext.next.frontmatter.title,
      }
   : null
 
   return(
     <>
    { !props.data.mdx.frontmatter.ignore ? 
<StyledPagination>
  <PrevPost prevArticle={prev} />
  <NextPost nextArticle={next}/>
</StyledPagination> :
""
}
</>
    
  )
  }

  export default Pagination