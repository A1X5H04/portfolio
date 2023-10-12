import React from "react";
import ProjectTile from "../components/ProjectTile";
import { projects } from "../data";
import GridPattern from "../components/GridPattern";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Fade, Flip, Hinge, Slide, Zoom } from "react-awesome-reveal";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

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

// const splitText = document.querySelector('.split-text');
// const splitTextLetters = splitText.textContent.split('');
// splitText.textContent = '';
// for(let i = 0; i < splitTextLetters.length; i++) {
//   splitText.innerHTML += `<span>${splitTextLetters[i]}</span>`;
// }

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative border-b border-slate-400 dark:border-gray-800 text-center">
        <div className="absolute top-8 -left-6 lg:top-10 lg:left-[7.4rem] w-12 h-12 border border-slate-400 dark:border-gray-800 border-dashed rounded-full"></div>
        <div className="absolute top-[10.5rem] sm:top-[7.2rem] -right-5 lg:top-36 lg:right-[7.4rem] w-12 h-12 border border-slate-400 dark:border-gray-800 border-dashed rounded-full"></div>
        <div className="border-b mt-7  border-b-slate-400 dark:border-b-gray-800 border-dashed overflow-hidden">
          <Fade direction="up" triggerOnce>
            <h3 className=" lg:text-lg pt-4 pb-4 sm:text-sm min-w-min text-gray-800 dark:text-gray-200 font-mono">
              Hi, I am{" "}
              <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded">
                Alish Baig
              </span>
            </h3>
          </Fade>
        </div>
        <div className="flex my-2 border-t overflow-hidden border-b border-slate-300 dark:border-gray-900 border-dashed">
          <div className="flex-1 border-r border-dashed border-slate-400 dark:border-gray-800 "></div>
          <Slide direction="up" triggerOnce>
            <h1 className="font-extrabold h-full py-2 mb-2 mx-6 text-transparent lg:text-7xl text-5xl bg-clip-text bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] background-animate">
              <span className="split-text">FrontEnd</span> Developer
            </h1>
          </Slide>
          <div className="flex-1 border-l border-dashed border-slate-400 dark:border-gray-800"></div>
        </div>
        <div className="overflow-hidden border-t border-dashed border-slate-400 dark:border-gray-800 ">
          <Slide direction="up" triggerOnce>
            <p className=" text-gray-500  lg:w-[720px] px-3 m-auto py-7">
              I am a software developer with a passion for building innovative
              and user-friendly solutions.I am skilled in a variety of
              programming languages and technologies, including JavaScript,
              React, Next.js, Node.js, and Git.
            </p>
          </Slide>
        </div>
        <div className="w-full m-auto border-t border-dashed border-slate-400 dark:border-gray-800">
          <div className="inline-flex gap-5 px-16 py-12 border-l border-r border-dashed border-slate-400 dark:border-gray-800">
            <Slide direction="up" cascade damping={0.1}>
              <a
                href="https://drive.google.com/file/d/1ouF2OfuCZ-OmDYS5hZanj5fRoTlTCv0v/view?usp=sharing"
                target="_blank"
                className="bg-black dark:bg-white px-3 py-1.5 text-white dark:text-black rounded-md font-semibold hover:bg-gray-900 dark:hover:bg-slate-200 cursor-pointer"
              >
                Download CV
              </a>
              <a
                href="https://github.com/a1x5h04"
                className="border border-slate-400 dark:border-gray-700 px-3 py-1.5 rounded-md font-semibold hover:border-gray-600 cursor-pointer"
              >
                Github
              </a>
            </Slide>
          </div>
        </div>
      </div>
      <div className="relative pt-8 mb-6 ">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] "
          )}
        />
        <div className="text-center">
          <Fade direction="up" triggerOnce cascade damping={0.4}>
            <h1 className="text-3xl font-extrabold my-1">Projects</h1>
            <p className="text-gray-500">Some of my Hobby Projects</p>
          </Fade>
        </div>
        <div className="mt-8 px-5">
          <div className="h-min grid md:grid-cols-2 gap-4 grid-cols-1 ">
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
            className="w-full my-4 hover:bg-slate-100 dark:hover:bg-gray-1000 text-sm font-bold py-2 rounded-md"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}

/* <div className="my-5 pt-10 border-b border-gray-800 text-center">
<div className="border-b border-b-gray-800 border-dashed py-2">
<h3 className="lg:text-lg sm:text-sm min-w-min text-gray-200 font-mono">
  Hi, I am{" "}
  <span className="bg-white text-black p-1 rounded-sm">Alish Baig</span>
</h3>
</div>
<div className="my-2 border-t overflow-hidden border-b border-gray-900 border-dashed">  
<h1 className="font-extrabold h-full py-2 mx-3 text-transparent lg:text-7xl text-5xl bg-clip-text bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] background-animate">
  <span className="split-text">FrontEnd</span> Developer
</h1>
</div>
<div className="border-t border-dashed border-gray-800">
<p className=" text-gray-500  lg:w-[720px] px-3 m-auto py-7">
  I am a software developer with a passion for building innovative and
  user-friendly solutions.I am skilled in a variety
  of programming languages and technologies, including JavaScript,
  React, Next.js, Node.js, and Git.
</p>
</div>
</div> */

/* <div className="w-full m-auto border-t border-dashed border-gray-800">
        <div className="inline-flex gap-5 p-5 border-l border-r border-dashed border-gray-800">
          <button className="bg-white px-3 py-1.5 text-black rounded-md font-semibold hover:bg-slate-200">Download CV</button>
          <button className="border border-gray-700 px-3 py-1.5 rounded-md font-semibold hover:border-gray-600">Github</button>
        </div>
        </div> */
