import React from "react";
import { useOutletContext } from "react-router-dom";
import GridPattern from "../components/GridPattern";
import ProjectTile from "../components/ProjectTile";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Fade, Slide } from "react-awesome-reveal";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  const { projectData } = useOutletContext();
  const [projectArray, setProjectArray] = React.useState([]);

  React.useEffect(() => {
    projectData.then((data) => {
      setProjectArray(data);
    });
  }, [projectData]);

  return (
    <div className="w-full overflow-hidden">
      <div className=" border-b border-slate-400 dark:border-gray-800 text-center">
        <div
          style={{ animationDelay: "800ms" }}
          className="border-b mt-7  border-b-transparent dark:border-b-transparent border-dashed pulse-border overflow-hidden"
        >
          <Fade direction="up" triggerOnce>
            <h3 className=" lg:text-lg pt-4 pb-4 sm:text-sm min-w-min text-gray-800 dark:text-gray-200 font-mono">
              Hi, I am{" "}
              <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded">
                Alish Baig
              </span>
            </h3>
          </Fade>
        </div>
        <div
          style={{ animationDelay: "750ms" }}
          className="relative flex my-2 border-t border-b border-transparent dark:border-transparent pulse-border-inner border-dashed"
        >
          <div
            style={{ animationDelay: "750ms" }}
            className="flex-1 border-r border-dashed border-transparent dark:border-transparent pulse-border"
          />
          <div className="sm:relative">
            <div
              style={{ animationDelay: "700ms" }}
              className="absolute -top-8 -left-6  sm:-top-7 sm:-left-6 lg:-top-7 lg:-left-6 w-12 h-12 border border-transparent dark:border-transparent pulse-border border-dashed rounded-full"
            />
            <div
              style={{ animationDelay: "700ms" }}
              className="absolute -bottom-8 -right-6 sm:-bottom-7 sm:-right-6 lg:-bottom-7 lg:-right-6 w-12 h-12 border border-transparent dark:border-transparent pulse-border border-dashed rounded-full"
            />
            <div className="overflow-hidden">
              <Slide direction="up" triggerOnce>
                <h1 className="font-extrabold sm:inline-flex gap-3 tracking-wider h-full py-2 mb-2 mx-6 lg:text-7xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] background-animate">
                  Frontend Developer
                </h1>
              </Slide>
            </div>
          </div>
          <div
            style={{ animationDelay: "500ms" }}
            className="flex-1 border-l border-dashed border-transparent dark:border-transparent pulse-border"
          />
        </div>
        <div
          style={{ animationDelay: "500ms" }}
          className="overflow-hidden border-t border-dashed border-transparent dark:border-transparent pulse-border "
        >
          <Slide direction="up" triggerOnce>
            <p className=" text-gray-500  lg:w-[720px] px-3 m-auto py-7">
              I am a software developer with a passion for building innovative
              and user-friendly solutions.I am skilled in a variety of
              programming languages and technologies, including JavaScript,
              React, Next.js, Node.js, and Git.
            </p>
          </Slide>
        </div>
        <div
          style={{ animationDelay: "250ms" }}
          className="w-full m-auto border-t border-dashed border-transparent dark:border-transparent pulse-border"
        >
          <div
            style={{ animationDelay: "250ms" }}
            className="inline-flex gap-5 px-16 py-12 border-l border-r border-dashed border-transparent dark:border-transparent pulse-border"
          >
            <Slide direction="up" triggerOnce>
              <a
                href="https://drive.google.com/uc?export=download&id=1GHO62v01Qutsa03e-PBYm-RHl9vBgGw-"
                className="bg-black dark:bg-white px-3 py-1.5 text-white dark:text-black rounded-md font-semibold hover:bg-gray-900 dark:hover:bg-slate-200 cursor-pointer"
              >
                Download CV
              </a>
              <a
                href="https://github.com/a1x5h04"
                className="border border-slate-400 dark:border-gray-700 px-3 py-1.5 rounded-md font-semibold hover:border-slate-500 dark:hover:border-gray-600 cursor-pointer"
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
            {projectArray?.map((item) => {
              return (
                <ProjectTile
                  title={item.repo}
                  description={item.description}
                  link={item.link}
                  language={item.language}
                  languageColor={item.languageColor}
                  stars={item.stars}
                  forks={item.forks}
                />
              );
            })}
          </div>
          <a
            href="https://github.com/A1X5H04?tab=repositories"
            className="block w-full my-4 text-center hover:bg-slate-100 dark:hover:bg-gray-1000 text-sm font-bold py-2 rounded-md"
          >
            Show More
          </a>
        </div>
      </div>
    </div>
  );
}