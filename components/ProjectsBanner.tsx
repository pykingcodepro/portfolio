import React from 'react';
import Image from 'next/image';

export default function ProjectsBanner() {
  return (
    <div id="projects">
        <div id="project-container">
          <h1>projects.</h1>
          <div id="card-carousel">
            <div className="card">
              <Image src="/img/web.png" alt="" width={200} height={200}/>
              <h2>Project 1</h2>
            </div>
            <div className="card">
              <Image src="/img/web.png" alt="" width={200} height={200}/>
              <h2>Project 2</h2>
            </div>
            <div className="card">
              <Image src="/img/web.png" alt="" width={200} height={200}/>
              <h2>Project 3</h2>
            </div>
          </div>
        </div>
    </div>
  )
}
