import React from "react";
import { useOutletContext } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import GridPattern from "../components/GridPattern";
import ProjectTile from "../components/ProjectTile";
import DotPattern from "../components/DotPattern";
import { Fade, Slide } from "react-awesome-reveal";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const headingTextArray = [
  "Flutter Developer",
  "Android Developer",
  "React Developer",
  "Next.JS Developer",
  "CS Student",
  "OSS Contributor",
  "Linux Enthusiast",
  "Frontend Developer",
];


function getRandomText() {
  const randomIndex = Math.floor(Math.random() * headingTextArray.length);
  return headingTextArray[randomIndex];
}

function generateRandomTailwindGradients() {
  let randomGradients = 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500';
  const gradientColors = [
      'from-pink-500 via-red-500 to-yellow-500',
      'from-green-300 via-blue-500 to-purple-600',
      'from-pink-300 via-purple-300 to-indigo-400',
      'from-red-200 via-red-300 to-yellow-200',
      'from-yellow-500 via-purple-500 to-blue-500',
      'from-fuchsia-500 via-red-600 to-orange-400',
      'from-gray-900 via-purple-900 to-violet-600',
      'from-amber-700 via-orange-300 to-rose-800',
      'from-amber-200 via-violet-600 to-sky-900',
      'from-gray-300 via-fuchsia-600 to-orange-600',
      'from-yellow-200 via-red-500 to-fuchsia-500',
      'from-rose-400 via-fuchsia-500 to-indigo-500',
      'from-indigo-200 via-red-200 to-yellow-100'
  ]

  const gradientTypes = [
      'bg-gradient-to-tr',
      'bg-gradient-to-tl',
      'bg-gradient-to-br',
      'bg-gradient-to-bl',
      'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]',
      'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]',
      'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]',
      'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]'
  ];

  const randomColor = gradientColors[Math.floor(Math.random() * gradientColors.length)];
  const randomType = gradientTypes[Math.floor(Math.random() * gradientTypes.length)];
  randomGradients = `${randomType} ${randomColor}`;

  return randomGradients;
}

const headingStyle = {
  filter: "url(#glitch)",
  animationDelay: "700ms",
  clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
}

export default function Home() {
  const { projectData } = useOutletContext();
  const [projectArray, setProjectArray] = React.useState([]);

  console.log('Home Component Rendered');

  React.useEffect(() => {
    projectData.then((data) => {
      setProjectArray(data);
    }).catch((err) => {
      console.log(err);
    });
  }, [projectData]);




  return (
    <div className="w-full overflow-hidden">
      <div className="relative pt-2 border-b border-slate-300 dark:border-gray-800 text-center">
        <DotPattern
          width={24}
          height={24}
          cr={1}
        />
        <div
          style={{ animationDelay: "800ms" }}
          className="border-b mt-7  border-b-transparent dark:border-b-transparent border-dashed pulse-border overflow-hidden"
        >
          <Fade direction="up" triggerOnce>
            <h3 className=" lg:text-lg pt-4 pb-4 sm:text-sm min-w-min text-gray-800 dark:text-gray-200 font-mono">
              Hi, I am&nbsp;
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
            <div className="overflow-hidden select-none cursor-default duration-200">
              <Slide direction="up" triggerOnce>
              <div style={headingStyle} className={`${generateRandomTailwindGradients()} bg-clip-text animate-bg-span `}>
        <h1 className="font-extrabold sm:inline-flex gap-5 tracking-wider h-full py-2 mb-2 mx-6 lg:text-7xl text-5xl text-transparent">
            {getRandomText()}
        </h1>
        
     <svg className="absolute h-1 w-1 overflow-hidden">
        <defs>
          <filter id="glitch">
            <feTurbulence id="turbulence" type="fractalNoise" baseFrequency="0 1.475" numOctaves="12" result="NOISE">
              <animate attributeName="seed" dur="20s" values="10;20;30;40;50;60;70;80;90;100;110;120;130;140;150;160;170;180;190;200;210;220;230;240;250;260;270;280" repeatCount="indefinite" />
              {/* <animate attributeName="baseFrequency" dur="5s" values="0 11.475;0 1.5;0 11.20;" repeatCount="indefinite" /> */}
            </feTurbulence>
            <feGaussianBlur in="SourceGraphic" result="BLURRED" stdDeviation="0.15">
              <animate attributeName="stdDeviation" dur="0.5s" values="5;2.5;0.15" repeatCount="1" />
            </feGaussianBlur>
            <feDisplacementMap id="displacer" in2="NOISE" in="BLURRED" scale="5" xChannelSelector="L" yChannelSelector="R" result="DISPLACED">
                <animate attributeName="scale" dur="15" values="5; 12; 10; 12; 5 " repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg> 
    </div>
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
              and user-friendly solutions. <br /> I am skilled in a variety of
              programming languages and technologies, including <span className="font-semibold">JavaScript</span>,
              <span className="font-semibold">&nbsp;React</span>, <span className="font-semibold">&nbsp;Next.JS</span>,<span className="font-semibold">&nbsp;Linux&nbsp;</span>and<span className="font-semibold">&nbsp;Git</span>.
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
      <div className="relative pt-8 mb-6">
        <GridPattern
          width={30}
          height={30}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]",
          )}
        />
        <div className="text-center">
          <Fade direction="up" triggerOnce cascade damping={0.4}>
            <h1 className="text-3xl font-extrabold my-1">Projects</h1>
            <p className="text-gray-500">Some of my Hobby Projects</p>
          </Fade>
        </div>
        <div className="mt-8 px-5">
          {projectArray.length === 0 ? (
            <div className="w-full h-full flex justify-center items-center">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="h-min grid md:grid-cols-2 gap-4 grid-cols-1 ">
              {projectArray?.map((item) => {
                return (
                  <ProjectTile
                    title={item.repo}
                    description={item.description}
                    link={item.link}
                    language={item.language}
                    website={item.website}
                    languageColor={item.languageColor}
                    stars={item.stars}
                    forks={item.forks}
                  />
                );
              })}
            </div>
          )}

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




/* 
    'bg-gradient-to-tr',
    'bg-gradient-to-tl',
    'bg-gradient-to-br',
    'bg-gradient-to-bl',
    'bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]',
    'bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))]',
    'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]',
    'bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))]',
    'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]',
    'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]',
    'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]',
    'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]'
     */

