import React from "react";
import ProjectTile from "../components/ProjectTile";
import { projects } from "../data/home";
import { GithubLogo, GitlabLogoSimple } from "@phosphor-icons/react";

// function handleMove(e) {
//   const { currentTarget: target  } = e;

//   const rect = target.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   target.style.setProperty('--mouse-x', `${x}px`);
//   target.style.setProperty('--mouse-y', `${y}px`);
// };

// for(const card of document.querySelectorAll('.card')) {
//   card.onmousemove = (e) => handleMove(e);
// }


export default function Home() {
  return (
    <div className="w-full ">
      <div className="my-5 pt-10 border-b border-gray-900 text-center">
        <div className="border-t border-b border-b-gray-900 border-dashed py-2 border-gray-900">
        <h3 className="lg:text-lg sm:text-sm min-w-min text-gray-200 font-mono">
          Hi, I am{" "}
          <span className="bg-white text-black p-1 rounded-sm">Alish Baig</span>
        </h3>
        </div>
        <div className="my-2 border-t border-b border-gray-1000 border-dashed">
        <h1 className="font-extrabold  h-full py-2 mx-3 text-transparent lg:text-7xl text-5xl bg-clip-text bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] background-animate">
          Frontend Developer
        </h1>
        </div>
        <div className="border-t border-dashed border-gray-900">
        <p className=" text-gray-500  lg:w-[720px] px-3 m-auto py-7">
          I am a software developer with a passion for building innovative and
          user-friendly solutions.I am skilled in a variety
          of programming languages and technologies, including JavaScript,
          React, Next.js, Node.js, and Git.
        </p>
        </div>
      </div>
      <div>
        <div className="pt-8 mb-6 ">
          <h1 className="text-3xl text-center font-extrabold mb-4">Projects</h1>
          <div className="mt-8 px-5">
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1 ">
              {projects.map((item) => {
                return (
                  <ProjectTile
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    tags={item.tags}
                    language={item.language}
                  />
                );
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
