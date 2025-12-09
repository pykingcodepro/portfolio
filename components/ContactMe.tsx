import React from 'react'
import { FaAt, FaPhoneAlt } from 'react-icons/fa'

export default function ContactMe() {
  return (
    <div id="contactme">
        <div id="contactme-container">
          <h1>contact me.</h1>
          <div id="temp-container">
            <form method='GET'>
              <input type="text" placeholder='Your Name...' id='nameInput' />
              <input type="email" placeholder='Your Email...' id='emailInput' />
              <textarea name="content" id="contentInput" placeholder='Your content...'></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
    </div>
  )
}
