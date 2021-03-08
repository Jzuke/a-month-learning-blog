import React from "react"
import styled from "styled-components"
import * as BREAKPOINT from "../utils/breakpoints.js"
import { v4 as uuidv4 } from "uuid"

const StyledSideBarCard = styled.div`
  background-color: #fff;
  border: 2px solid black;
  margin: 0rem 2rem;
  top: 2rem;
  padding: 2rem;
  position: sticky;
  top: 16rem;
  height: fit-content;
  border-radius: 2px;
  min-width: 26rem;

  & h4 {
    font-size: 2rem;
  }

  & li {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  @media${BREAKPOINT.device.sm} {
    margin: 0em 0rem 2rem 0rem;
    width: 100%;
    max-width: 100%;
    position: relative;
    top: 0;
  }
`

const Resources = props => {

  // Metadata exports data

  const resources = props.data.mdx.exports.metadata.resources
  const tools = props.data.mdx.exports.metadata.tools
  const costs = props.data.mdx.exports.metadata.costs

  // If resources, tools, or costs exists as a metadata export in any MDX file, then render the component in lists with whatever was provided, otherwise render nothing

  if (resources || tools || costs) {
    return (
      <StyledSideBarCard>
        {resources ? (
          <ul>
            <h4>Resources</h4>
            {resources.map(resource =>
              resource.link ? (
                <li key={uuidv4()}>
                  <a target="_blank" rel="noreferrer" href={`${resource.link}`}>
                    {resource.title}
                  </a>
                </li>
              ) : (
                <li key={uuidv4()}>{resource.title}</li>
              )
            )}
          </ul>
        ) : (
          ""
        )}
        {tools ? (
          <ul>
            <h4>Tools</h4>
            {tools.map(tool =>
              tool.link ? (
                <li key={uuidv4()}>
                  <a target="_blank" rel="noreferrer" href={`${tool.link}`}>
                    {tool.name}
                  </a>
                </li>
              ) : (
                <li key={uuidv4()}>{tool.name}</li>
              )
            )}
          </ul>
        ) : (
          ""
        )}
        {costs ? (
          <ul>
            <h4>Costs</h4>
            {costs.map(cost => (
              <li key={uuidv4()}>{cost.cost}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </StyledSideBarCard>
    )
  }
  else{
    return <></>
  }
}

export default Resources
