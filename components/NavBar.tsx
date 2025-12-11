"use client";

import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavBar() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
        <span id="nav-title">Vatsal Sejpal</span>
        <button 
          id='hamburger'
          onClick={toggleMenu} 
          style={styles.hamburger}
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu fontSize={30} />
        </button>
        <ul id='nav-links' className={isOpen ? 'nav-menu-open' : 'nav-menu'}>
          <li><a href="#aboutme">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contactme">Contact Me</a></li>
        </ul>
        <ul id='social-links' className={isOpen ? 'nav-menu-open' : 'nav-menu'}>
          <li><a href="#"><FaInstagram /></a></li>
          <li><a href="#"><FaLinkedin /></a></li>
          <li><a href="#"><FaGithub /></a></li>
        </ul>
    </nav>
  )
}

const styles = {
  hamburger: {
    display: 'none',
    flexDirection: "column" as const,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    paddingRight: '3rem',
    paddingTop: '2rem',
  },
  bar: {
    width: '25px',
    height: '3px',
    backgroundColor: 'black',
    margin: '3px 0',
    transition: '0.3s',
    display: 'block',
  },
  barOpen1: {
    transform: 'rotate(-45deg) translate(-5px, 6px)',
  },
  barOpen2: {
    opacity: 0,
  },
  barOpen3: {
    transform: 'rotate(45deg) translate(-5px, -6px)',
  },
};