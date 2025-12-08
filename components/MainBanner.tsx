'use client';

import React from "react";
import Image from "next/image";

export default function MainBanner() {
  return (
    <div id="main-banner">
      <div id="text-section">
        <div id="temp-container">
          <h2>I'm just another...</h2>
        <h1>Web Developer</h1>
        <button type="button" onClick={(e) => (location.href = "#contactme")}>
          My Resume
        </button>
        </div>
      </div>
      <div id="image-section">
        <Image
          src="/img/web.png"
          alt="#"
          width={500}
          height={370}
        />
      </div>
    </div>
  );
}
