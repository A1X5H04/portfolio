import { ArrowSquareOut, ChartBar } from "@phosphor-icons/react";
import React from "react";




const aboutArray = [
  "👋 Hi I am Alish.",
  "🖥️  See my portfolio at A1X5H04.github.com",
  "👨‍💻  I'm currently working on contributing to Open Source projects.",
  "✉️  You can reach me at alishbaig2004@gmail.com",
  "🧠  I'm currently learning Android Development",
  "🤝 I'm open to collaborating on anything?",
  "⚡ Fun fact: I like phonk music",
];

function Dashboard() {
  
  return (
    <>
      <div className="mt-8 mb-4">
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
        <p>I don't know what to put here</p>
      </div>
      <div className="my-10 inline-grid lg:grid-cols-2 sm:grid-flow-row gap-4 ">
        <div className="border rounded-lg border-gray-700">
          <div className="flex p-5 items-center justify-between border-b border-gray-700 bg-gray-1000">
            <div>
              <h1 className="font-bold text-xl">About Me</h1>
              <p className="text-sm">A1X5H04</p>
            </div>
            <a href="https://github.com/a1x5h04">
              <img
                src="https://avatars.githubusercontent.com/u/78891448?v=4"
                alt="Github Profile"
                className="w-10 h-10 rounded-full"
              />
            </a>
          </div>
          <div className="p-5">
            <ul className="list-disc ml-3">
              {aboutArray.map((item) => (
                <li className="my-2 font-medium">
                  <p className="text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border rounded-lg border-gray-800 row-span-2">
          <div className="flex p-5 items-center justify-between border-b border-gray-900 bg-gray-1000">
            <h1 className="font-bold text-xl">Github Stats</h1>
            <a
              className="text-gray-700 hover:text-gray-400"
              href="https://github.com/anuraghazra/github-readme-stats"
              target="_blank"
            >
              <ArrowSquareOut size={20} />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=a1x5h04&theme=transparent&hide_border=true&title_color=ffffff&show_icons=true&text_color=495057ff"
              className="border-b border-gray-900"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=a1x5h04&theme=transparent&hide_border=true&title_color=ffffff&text_color=495057ff&card_width=480"
              className="border-b border-gray-900"
            />
            <p className="px-6 py-4 w-full font-bold text-lg">
              Languages Learned
            </p>
            <div className="px-6 pb-5 w-full flex gap-3 flex-wrap">
              <a
                href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                  width="36"
                  height="36"
                  alt="C"
                />
              </a>
              <a
                href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  width="36"
                  height="36"
                  alt="CPLUS"
                />
              </a>
              <a
                href="https://www.javascript.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  width="36"
                  height="36"
                  alt="JAVASCRIPT"
                />
              </a>
              <a
                href="https://kotlinlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                  width="36"
                  height="36"
                  alt="KOTLIN"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  width="36"
                  height="36"
                  alt="HTML"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  width="36"
                  height="36"
                  alt="CSS"
                />
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="36"
                  height="36"
                  alt="REACT"
                />
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  width="36"
                  height="36"
                  alt="TYPESCRIPT"
                />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="36"
                  height="36"
                  alt="TAILWINDCSS"
                />
              </a>
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  width="36"
                  height="36"
                  alt="BOOTSTRAP"
                />
              </a>
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  width="36"
                  height="36"
                  alt="NODEJS"
                />
              </a>
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  width="36"
                  height="36"
                  alt="MYSQL"
                />
              </a>
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  width="36"
                  height="36"
                  alt="FIREBASE"
                />
              </a>
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  width="36"
                  height="36"
                  alt="FIGMA"
                />
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  width="36"
                  height="36"
                  alt="GIT"
                />
              </a>
              <a href="https://dart.dev" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
                  width="36"
                  height="36"
                  alt="DART"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border rounded-lg border-gray-800">
          <div className="flex p-5 items-center justify-between border-b border-gray-900 bg-gray-1000">
            <h1 className="font-bold text-xl">Github Streak</h1>
            <a
              className="text-gray-700 hover:text-gray-400"
              href="https://github.com/denvercoder1/github-readme-streak-stats"
              target="_blank"
            >
              <ArrowSquareOut size={20} />
            </a>
          </div>
          <div className="flex flex-col items-center">
          <img className="w-[450px]" src="https://github-readme-streak-stats.herokuapp.com/?user=A1X5H04&theme=transparent&hide_border=true&background=00000000&stroke=495057ff&ring=495057ff&fire=fb8c00ff&currStreakNum=f8f9faff&sideNums=dee2e6ff&currStreakLabel=f8f9faff&sideLabels=dee2e6ff&dates=495057ff" />
          </div>
        </div>
        <div className="border rounded-lg border-gray-800 col-span-2">
          <div className="flex p-5 items-center justify-between border-b border-gray-900 bg-gray-1000">
            <h1 className="font-bold text-xl">Waka Time Stats</h1>
            <a
              className="text-gray-700 hover:text-gray-400"
              href="https://wakatime.com/@a1x5h04"
              target="_blank"
            >
              <ArrowSquareOut size={20} />
            </a>
          </div>
          <div className="p-10 flex flex-col items-center">
                <div className="grid place-items-center">
                  <div className="border border-gray-700 p-4  rounded-md">
                  <ChartBar size={32} />
                  </div>
                  <h4 className="font-semibold my-4 text-center">Not Available</h4>
                  <p className="w-64 text-center text-gray-600">Current statistics are not available because it is yet to be implemented. Please try later.</p>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
