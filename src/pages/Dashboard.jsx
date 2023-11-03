import React from "react";
import ChartImageLoader from "../components/ChartImageLoader";
import GridPattern from "../components/GridPattern";
import { useOutletContext } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Fade } from "react-awesome-reveal";
import { CardSpotlightEffect } from "../components/CardSpotlightEffect";


function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Dashboard() {
  const { languageData, aboutData } = useOutletContext();
  const [languagesArray, setLanguagesArray] = React.useState([]);
  const [aboutArray, setAboutArray] = React.useState([]);

  React.useEffect(() => {
    languageData.then((data) => {
      setLanguagesArray(data);
    });
    aboutData.then((data) => {
      setAboutArray(data);
    });
  }, [languageData, aboutData]);

  return (
    <div className="relative overflow-hidden">
      <div className="pt-10 mb-5 text-center">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
          )}
        />
        <Fade direction="up" triggerOnce cascade damping={0.2}>
          <h1 className="text-3xl font-extrabold my-1 py-1">Dashboard</h1>
          <p className="text-gray-500 pb-2">
            About me, Statistics, Languages etc.
          </p>
        </Fade>
      </div>
      <div className="my-10 mx-5 md:grid md:grid-cols-2 flex flex-col gap-4">
        <CardSpotlightEffect className="border rounded-lg bg-white dark:bg-black hover:bg-gradient-to-t dark:from-gray-1000 dark:to-black from-slate-100 to-white  dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-100 dark:shadow-gray-1000  duration-200 ease-in-out row-span-2">
          <div className="flex p-5 items-center justify-between border-b border-slate-100 dark:border-gray-1000">
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
            <ul style={{listStyle: 'circle'}} className=" ml-3">
              {aboutArray?.map((item) => (
                <li className="my-2 font-medium">
                  <p className="text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </CardSpotlightEffect>

      <CardSpotlightEffect className="border rounded-lg bg-white dark:bg-black hover:bg-gradient-to-t dark:from-gray-1000 dark:to-black from-slate-100 to-white  dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-100 dark:shadow-gray-1000 duration-200 ease-in-out row-span-3">
          <div className="flex flex-col items-center">
          <p className="lg:px-6 px-4 pt-5 w-full font-bold text-lg">Github Statistics</p>
            <ChartImageLoader
              className="border-b border-slate-100 dark:border-gray-1000"
              imageUrl="https://github-readme-stats.vercel.app/api?username=a1x5h04&theme=transparent&hide_border=true&hide_title=true&show_icons=true&text_color=6c757dff&card_width=480"
            />
            <p className="lg:px-6 px-4 pt-5 w-full font-bold text-lg">Top Languages</p>
            <ChartImageLoader
              className="border-b border-slate-100 dark:border-gray-1000"
              imageUrl="https://github-readme-stats.vercel.app/api/top-langs/?username=a1x5h04&theme=transparent&layout=compact&hide_border=true&hide_title=true&title_color=ffffff&text_color=495057ff&card_width=480"
            />
            <p className="lg:px-6 px-4 py-5 w-full font-bold text-lg">
              Languages Known
            </p>
            <div className="lg:px-6 px-4 pb-5 lg:pt-3 w-full flex gap-3 flex-wrap">
              {languagesArray?.map((item) => (
                <a
                  className="hover:opacity-75 duration-300"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  title={item.skillName}
                >
                  <img
                    src={item.imgSrc}
                    className="lg:w-10 lg:h-10 w-8 h-8"
                    alt={item.imgAltText}
                  />
                </a>
              ))}
            </div>
          </div>
        </CardSpotlightEffect>
        <CardSpotlightEffect className="border grid place-items-center rounded-lg bg-white dark:bg-black hover:bg-gradient-to-t dark:from-gray-1000 dark:to-black from-slate-100 to-white  dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-100 dark:shadow-gray-1000 duration-200 ease-in-out">
          <div className="mx-2">
            <ChartImageLoader imageUrl="https://github-readme-streak-stats.herokuapp.com/?user=A1X5H04&theme=transparent&hide_border=true&background=00000000&stroke=495057ff&ring=495057ff&fire=fb8c00ff&currStreakNum=adb5bdff&sideNums=adb5bdff&currStreakLabel=6c757dff&sideLabels=6c757dff&dates=343a40ff" />
          </div>
        </CardSpotlightEffect>
        <CardSpotlightEffect className="border rounded-lg bg-white dark:bg-black hover:bg-gradient-to-t dark:from-gray-1000 dark:to-black from-slate-100 to-white  dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-100 dark:shadow-gray-1000 duration-200 ease-in-out col-span-2">
          <div className="p-4 flex flex-col items-center">
            <ChartImageLoader imageUrl="https://github-readme-activity-graph.vercel.app/graph?username=a1x5h04&theme=github-compact&hide_border=true" />
          </div>
        </CardSpotlightEffect>
      </div>
    </div>
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

// Github Readme Streak Dark Mode Link
// https://github-readme-streak-stats.herokuapp.com/?user=A1X5H04&theme=transparent&hide_border=true&background=00000000&stroke=495057ff&ring=495057ff&fire=fb8c00ff&currStreakNum=f8f9faff&sideNums=dee2e6ff&currStreakLabel=f8f9faff&sideLabels=dee2e6ff&dates=495057ff

// Github Readme Streak Light
// https://github-readme-streak-stats.herokuapp.com/?user=A1X5H04&theme=transparent&hide_border=true&background=00000000&stroke=e9ecefff&ring=ced4daff&fire=fb8c00ff&currStreakNum=212529ff&sideNums=212529ff&currStreakLabel=495057ff&sideLabels=495057ff&dates=adb5bdff
