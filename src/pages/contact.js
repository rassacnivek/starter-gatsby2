import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <form name="contact" method="POST" action="/success" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )
  }
}

export default Contact;