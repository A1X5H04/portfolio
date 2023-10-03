import React from "react";
import ProjectTile from "../components/ProjectTile";
import { projects } from "../data/home"
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

          <div className="mt-8">
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1 ">
              {projects.map(item => {
                return (
                  <ProjectTile
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    tags={item.tags}
                    language={item.language}
                    />
                  )
              })}
            </div>
            <button
              onClick={() =>
                (window.location.href = 
                  "https://github.com/A1X5H04?tab=repositories")
              }
              className="w-full my-4 hover:bg-gray-1000 text-sm font-bold py-2 rounded-md"
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
