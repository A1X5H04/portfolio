import React from "react";
import ProjectTile from "../components/ProjectTile";
import { projects } from "../data";
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

// const splitText = document.querySelector('.split-text');
// const splitTextLetters = splitText.textContent.split('');
// splitText.textContent = '';
// for(let i = 0; i < splitTextLetters.length; i++) {
//   splitText.innerHTML += `<span>${splitTextLetters[i]}</span>`;
// }

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative border-b border-gray-800 text-center">
          <div className="absolute top-8 -left-6 lg:top-10 lg:left-[7.4rem] w-12 h-12 -rotate-90 border border-gray-800 border-dashed rounded-full"></div>
          <div className="absolute top-[10.5rem] sm:top-[7.2rem] -right-5 lg:top-36 lg:right-[7.4rem] w-12 h-12 -rotate-90 border border-gray-800 border-dashed rounded-full"></div>
        <div className="border-b mt-7  border-b-gray-800 border-dashed overflow-hidden">
          
          <h3 className=" lg:text-lg pt-4 pb-4 sm:text-sm min-w-min text-gray-200 font-mono">
            Hi, I am{" "}
            <span className="bg-white text-black p-1 rounded-sm">
              Alish Baig
            </span>
          </h3>
        </div>
        <div className="flex my-2 border-t overflow-hidden border-b border-gray-900 border-dashed">
        <div className="flex-1 border-r border-dashed border-gray-900 ">
        </div>
          <h1 className="font-extrabold h-full py-2 mb-2 mx-6 text-transparent lg:text-7xl text-5xl bg-clip-text bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] background-animate">
            <span className="split-text">FrontEnd</span> Developer
          </h1>
        <div className="flex-1 border-l border-dashed border-gray-900" >
        </div>
        </div>
        <div className="border-t border-dashed border-gray-800">
          <p className=" text-gray-500  lg:w-[720px] px-3 m-auto py-7">
            I am a software developer with a passion for building innovative and
            user-friendly solutions.I am skilled in a variety of programming
            languages and technologies, including JavaScript, React, Next.js,
            Node.js, and Git.
          </p>
        </div>
        <div className="w-full m-auto border-t border-dashed border-gray-800">
        <div className="inline-flex gap-5 px-16 py-12 border-l border-r border-dashed border-gray-800">
          <a href="https://drive.google.com/file/d/1ouF2OfuCZ-OmDYS5hZanj5fRoTlTCv0v/view?usp=sharing" target="_blank" className="bg-white px-3 py-1.5 text-black rounded-md font-semibold hover:bg-slate-200 cursor-pointer">Download CV</a>
          <a href="https://github.com/a1x5h04" className="border border-gray-700 px-3 py-1.5 rounded-md font-semibold hover:border-gray-600 cursor-pointer">Github</a>
        </div>
        </div>
      </div>
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