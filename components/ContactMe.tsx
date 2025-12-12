"use client";

import React, { useState } from 'react'
import { FaAt, FaPhoneAlt } from 'react-icons/fa'

export default function ContactMe() {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [msg, setMsg] = useState<string>("")

  const handleSend = async() => {
    if (name === "" || email === "" || msg === ""){
      alert("Fill all the fields.");
      return;
    }
    const res = await fetch(`/api/sendMail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name: name, email: email, msg: msg})
    });
    if(!res.ok) {
      alert("Failed to send. Please retry.");
      return;
    }
    alert("Send Successfully.");
  }

  return (
    <div id="contactme">
        <div id="contactme-container">
          <h1>contact me.</h1>
          <div id="temp-container">
            <form method='POST'>
              <input required type="text" placeholder='Your Name...' id='nameInput' onChange={e => setName(e.target.value)} />
              <input required type="email" placeholder='Your Email...' id='emailInput' onChange={e => setEmail(e.target.value)}/>
              <textarea required name="content" id="contentInput" placeholder='Your content...' onChange={e => setMsg(e.target.value)}></textarea>
              <button type="submit" onClick={handleSend}>Send</button>
            </form>
          </div>
        </div>
    </div>
  )
}
