import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
import Button from "./Button"
import * as BREAKPOINT from "../utils/breakpoints.js"

const StyledSubscribeForm = styled.form`
  border: 2px solid black;
  background-color: white;
  max-width: 98rem;
  margin: auto;
  padding: 2rem;
  padding-top: -2rem;
  margin-top: 4rem;

  @media${BREAKPOINT.device.sm} {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

const StyledFormInput = styled.input`
  background-color: #eee;
  cursor: text;
  color: #22223b;
  height: 4.4rem;
  border-radius: 4px;
  border: 2px solid #222;
  padding: 0px 2rem;
  font-size: 1.6rem;
  margin-right: 2rem;

  &:focus {
    outline: #1b6f8c;
    background: white;
    border: 2px #1b6f8c solid;
  }

  @media${BREAKPOINT.device.sm} {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`
const StyledSubscribeHeading = styled.h1`
  margin-top: -6rem;

  @media${BREAKPOINT.device.sm} {
    margin-top: -5rem;
  }
`
const StyledSuccessMessage = styled.span`
  font-size: 1.2rem;
  margin-top: 1rem;
  display: block;
  color: #157F1F;
`
const StyledErrorMessage = styled.span`
  font-size: 1.2rem;
  margin-top: 1rem;
  display: block;
  color: #E63946;
`
const SubscribeForm = props => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")

  const clearFormFields = () => {
    setName("")
    setEmail("")
  }

  const handleSubmit = async event => {
    event.preventDefault()
    // Mailchimp always responds with status code 200, accompanied by a string indicating the result of the response.
    const { result, msg } = await addToMailchimp(email, {
      PATHNAME: window.location.pathname,
      FNAME: name,
    })
    result === 'success' && clearFormFields();
    // Removes the HTML returned in some response messages in case of error
    setMessage(msg.split("<")[0])
    setStatus(result)
    
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }
  const handleNameChange = event => {
    setName(event.target.value)
  }

  return (
    <div style={{ display: "flex", padding: `0 .5rem` }}>
      <StyledSubscribeForm>
        <StyledSubscribeHeading>Subscribe</StyledSubscribeHeading>
        <p>
          Want to get notified when my next post or series comes out? <br />{" "}
          Maybe one day I'll even write about creating an effective newsletter campaign
          🤔
        </p>
        <StyledFormInput
          type="name"
          onChange={handleNameChange}
          value={name}
          placeholder="Your Name"
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "Name"}
          required
        />
        <StyledFormInput
          type="email"
          onChange={handleEmailChange}
          value={email}
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "newfriend@gmail.com"}
          placeholder="newfriend@gmail.com"
          required
        />
        <Button type="submit" onClick={handleSubmit}>
          Subscribe
        </Button>
        {status === "success" ? (
          <StyledSuccessMessage {...props}>{message}</StyledSuccessMessage>
        ) : (
          <StyledErrorMessage {...props}>{message}</StyledErrorMessage>
        )}
      </StyledSubscribeForm>
    </div>
  )
}

export default SubscribeForm
