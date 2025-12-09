import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function NavBar() {
  return (
    <nav>
        <span id="nav-title">Vatsal Sejpal</span>
        <ul id='nav-links'>
          <li><a href="#aboutme">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contactme">Contact Me</a></li>
        </ul>
        <ul id='social-links'>
          <li><a href="#"><FaInstagram /></a></li>
          <li><a href="#"><FaLinkedin /></a></li>
          <li><a href="#"><FaGithub /></a></li>
        </ul>
    </nav>
  )
}
