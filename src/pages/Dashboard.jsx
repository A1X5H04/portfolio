import React from "react";
import { languages } from "../data";
import ChartImageLoader from "../components/ChartImageLoader";




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
      <div className="mt-10 mb-5 text-center">
      <h1 className="text-3xl font-extrabold my-1 py-1">Dashboard</h1>
        <p className="text-gray-500 pb-2">About me, Statistics, Languages etc.</p>
      </div>
      <div className="my-10 mx-5 md:grid md:grid-cols-2 flex flex-col gap-4 ">
        <div className="border rounded-lg hover:bg-gradient-to-t from-gray-1000 to-transparent hover:border-gray-800 border-gray-900 duration-200 ease-in-out row-span-2">
        <div className="flex p-5 items-center justify-between border-b border-gray-1000">
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
        
        <div className="border rounded-lg hover:bg-gradient-to-t from-gray-1000 to-transparent hover:border-gray-800 border-gray-900 duration-200 ease-in-out row-span-3">

          <div className="flex flex-col items-center">
            <ChartImageLoader className="border-b border-gray-900" imageUrl="https://github-readme-stats.vercel.app/api?username=a1x5h04&theme=transparent&hide_border=true&title_color=ffffff&show_icons=true&text_color=495057ff" />
            <ChartImageLoader className="border-b border-gray-900" imageUrl="https://github-readme-stats.vercel.app/api/top-langs/?username=a1x5h04&theme=transparent&hide_border=true&title_color=ffffff&text_color=495057ff&card_width=480" />
            <p className="px-6 py-4 w-full font-bold text-lg">
              Languages Learned
            </p>
            <div className="px-6 pb-5 w-full flex gap-3 flex-wrap">
              {
                languages.map((item) => (
                  <a className="hover:opacity-75 duration-300" href={item.link} target="_blank" rel="noreferrer" title={item.skillName}><img src={item.imgSrc} width="36" height="36" alt={item.imgAltText} /></a>
                ))
              }
            </div>
          </div>
        </div>
        <div className="border grid place-items-center rounded-lg hover:bg-gradient-to-t from-gray-1000 to-transparent hover:border-gray-800 border-gray-900 duration-200 ease-in-out">
          <div className="mx-2">
            <ChartImageLoader imageUrl="https://github-readme-streak-stats.herokuapp.com/?user=A1X5H04&theme=transparent&hide_border=true&background=00000000&stroke=495057ff&ring=495057ff&fire=fb8c00ff&currStreakNum=f8f9faff&sideNums=dee2e6ff&currStreakLabel=f8f9faff&sideLabels=dee2e6ff&dates=495057ff" />
          </div>
        </div>
        <div className="border rounded-lg hover:bg-gradient-to-t from-gray-1000 to-transparent hover:border-gray-800 border-gray-900 duration-200 ease-in-out col-span-2">

          <div className="p-4 flex flex-col items-center">
            <ChartImageLoader imageUrl="https://github-readme-activity-graph.vercel.app/graph?username=a1x5h04&theme=github-compact&hide_border=true" />

          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

/* <div className="grid place-items-center">
<div className="border border-gray-700 p-4  rounded-md">
<ChartBar size={24} />
</div>
<h4 className="font-semibold my-4 text-center">Not Available</h4>
<p className="w-64 text-center text-gray-600">Current statistics are not available because it is yet to be implemented. Please try later.</p>
</div> */


/* <div className="flex p-5 items-center justify-between border-b border-gray-700 bg-gray-1000">
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
</div> */

/* <div className="flex p-5 items-center justify-between border-b border-gray-900 bg-gray-1000">
<h1 className="font-bold text-xl">Github Contribution Graph</h1>
<a
  className="text-gray-700 hover:text-gray-400"
  href="https://wakatime.com/@a1x5h04"
  target="_blank"
>
  <ArrowSquareOut size={20} />
</a>
</div> */