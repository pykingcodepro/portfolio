"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import projectData from "@/db/db.json";
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';

type ProjectDataType = {
  name: string,
  link: string, 
  img: string
}

export default function ProjectsBanner() {
  
  const projectEl = projectData.map((data:ProjectDataType, key) => {
    return (
      <Link href={data.link} className="card" target='_blank' key={key}>
        <Image src={"/img/"+data.img} alt="" width={200} height={200}/>
        <h2>{data.name}</h2>
      </Link>
    )
  });

  return (
    <div id="projects">
        <div id="project-container">
          <h1>projects.</h1>
          <div id="card-carousel">
            {projectEl}
          </div>
        </div>
    </div>
  )
}
