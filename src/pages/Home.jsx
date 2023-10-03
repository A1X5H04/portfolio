import React from "react";
import ProjectTile from "../components/ProjectTile";
import { GithubLogo, GitlabLogoSimple } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="my-5 pt-10">
        <h3 className="text-lg mt-3 text-gray-200">Hi, I am Alish Baig</h3>
        <h1 className="text-5xl font-extrabold">Frontend Developer</h1>
        <p className="my-6 text-gray-400">
          I am a software developer with a passion for building innovative and
          user-friendly solutions. I have over 2 years of experience in
          developing and maintaining web applications. I am skilled in a variety
          of programming languages and technologies, including JavaScript,
          React, Next.js, Node.js, and Git.
        </p>
      </div>
      <div>
        <div className="mt-8 mb-6 ">
          <h1 className="text-3xl font-extrabold mb-4">Projects</h1>    
        </div>
        <div className="mt-8">
        <p className="font-semibold mb-4">Pinned</p>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1 ">
          <ProjectTile
            title="a1x5h04.github.io"
            description="Personal website hosted on github pages"
            link="https://a1x5h04.github.io"
          />
          <ProjectTile
            title="quizzapp"
            description="Lorem ipsum dolor sit amet. asdfas. asefdd."
            link="https://google.com"
          />
        </div>
        </div>
        <div className="mt-8">
        <p className="font-semibold mb-4">All</p>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1 ">
          <ProjectTile
            title="a1x5h04.github.io"
            description="Lorem ipsum dolor sit amet. asdfas. asdfasd."
            link="https://google.com"
          />
          <ProjectTile
            title="quizzapp"
            description="Lorem ipsum dolor sit amet. asdfas. asefdd."
            link="https://google.com"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
