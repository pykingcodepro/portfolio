import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";

export default function AboutMe() {
  return (
    <div id="aboutme">
      <div id="aboutme-container">
        <h1>about me.</h1>
        <div id="text-section">
          <span>
            Hi, I'm Vatsal, a web developer, passionate about building clean,
            responsive, and user-friendly websites. I enjoy turning ideas into
            real projects using modern web technologies. <br />
            <br />
            I work with JavaScript, React, Next.js, MERN Stack, Django, and I
            love creating smooth UI and efficient backend systems. I'm currently
            learning advanced React patterns, UI animations, and improving my
            backend architecture skills. <br /> <br />
            My goal is to grow into a strong full-stack developer and work on
            meaningful products that make a difference. <br /> <br />
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4rem"
            }}
          >
            <div id="skills-container">
              <h2>
                <AiFillEdit />
                Skills
              </h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>SQL</li>
                <li>MERN</li>
                <li>NextJS</li>
                <li>Django</li>
              </ul>
            </div>

            <div id="skills-container">
              <h2>
                <IoLanguage />
                Language Known
              </h2>
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Gujarati</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
