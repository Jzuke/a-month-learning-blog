import React from 'react'
import styled from 'styled-components'
import Spacer from './Spacer'
import { HiPencil, HiClock } from 'react-icons/hi'

const StyledPostMetadata = styled.div`
color: #22223B;
margin-top: -1rem;
margin-bottom: 2rem;
display: flex;
align-items: center;
`

const StyledMetadata = styled.span`
padding-left: .4rem;
`

const PostMetadata = (props) => {

  return(
    <StyledPostMetadata {...props}>
      <HiPencil size={24}/>
      <StyledMetadata className="post-metadata"> {props.author}</StyledMetadata> 
      <Spacer horizontalSpace="2rem" verticalSpace="100%" />
      <HiClock size={24}/> 
     <StyledMetadata className="post-metadata"> {props.readTime} min read</StyledMetadata> 
    </StyledPostMetadata>
  )
}

export default PostMetadata