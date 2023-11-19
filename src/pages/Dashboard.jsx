import React from "react";
import ChartImageLoader from "../components/ChartImageLoader";
import GridPattern from "../components/GridPattern";
import snarkdown from "snarkdown";
import parse from "html-react-parser";
import { useOutletContext } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Fade } from "react-awesome-reveal";
import { CardSpotlightEffect } from "../components/CardSpotlightEffect";
import { useTranslation } from "react-i18next";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Dashboard() {
  const { languageData, aboutData } = useOutletContext();
  const [languagesArray, setLanguagesArray] = React.useState([]);
  const [aboutArray, setAboutArray] = React.useState([]);
  const { t } = useTranslation();

  const arrayAbout = [
    "👋 Hi I am **Alish.**",
    "🖥️ See <strikethrough> my </strikethrough> portfolio at A1X5H04.github.com",
    "👨‍💻 I'm currently working on contributing to Open Source projects.",
    "✉️ You can reach me at [alishbaig2004@gmail.com](mailto:alishbaig2004@gmail.com)",
    "🧠 I'm currently learning _Next JS_",
    "🤝 I'm open to collaborating on anything?",
    "⚡ Fun fact: I like phonk music",
  ];

  React.useEffect(() => {
    languageData.then((data) => {
      setLanguagesArray(data);
    });
    aboutData.then((data) => {
      setAboutArray(arrayAbout);
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
          <h3 className="text-3xl font-extrabold my-1 py-1">
            {t("dashboard.title")}
          </h3>
          <p className="text-gray-500 pb-2">{t("dashboard.description")}</p>
        </Fade>
      </div>
      <div className="my-10 mx-5 md:grid md:grid-cols-2 flex flex-col gap-4">
        <CardSpotlightEffect className="border rounded-lg bg-white dark:bg-black hover:bg-gradient-to-t dark:from-gray-1000 dark:to-black from-slate-100 to-white  dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-100 dark:shadow-gray-1000  duration-200 ease-in-out row-span-2">
          <div className="flex p-5 items-center justify-between border-b border-slate-100 dark:border-gray-1000">
            <div>
              <h1 className="font-bold text-xl">
                {t("dashboard.cards.headings.about_me")}
              </h1>
              <p className="text-sm font-mono">A1X5H04</p>
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
            <ul style={{ listStyle: "circle" }} className="ml-3">
              {aboutArray?.map((text) => (
                <li className="my-2 font-medium">
                  <p className="text-sm">{parse(snarkdown(text))}</p>
                </li>
              ))}
            </ul>
          </div>
        </CardSpotlightEffect>

        <CardSpotlightEffect className="border rounded-lg bg-white dark:bg-black hover:bg-gradient-to-t dark:from-gray-1000 dark:to-black from-slate-100 to-white  dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-100 dark:shadow-gray-1000 duration-200 ease-in-out row-span-3">
          <div className="flex flex-col items-center">
            <h5 className="lg:px-6 px-4 pt-5 w-full font-bold text-lg">
              {t("dashboard.cards.headings.github_stats")}
            </h5>
            <ChartImageLoader
              className="border-b border-slate-100 dark:border-gray-1000"
              imageUrl="https://github-readme-stats.vercel.app/api?username=a1x5h04&theme=transparent&hide_border=true&hide_title=true&show_icons=true&text_color=6c757dff&card_width=480"
            />
            <h5 className="lg:px-6 px-4 pt-5 w-full font-bold text-lg">
              {t("dashboard.cards.headings.top_languages")}
            </h5>
            <ChartImageLoader
              className="border-b border-slate-100 dark:border-gray-1000"
              imageUrl="https://github-readme-stats.vercel.app/api/top-langs/?username=a1x5h04&theme=transparent&layout=compact&hide_border=true&hide_title=true&title_color=ffffff&text_color=495057ff&card_width=480"
            />
            <h5 className="lg:px-6 px-4 py-5 w-full font-bold text-lg">
              {t("dashboard.cards.headings.languages_used")}
            </h5>
            <div className="lg:px-6 px-4 pb-5 lg:pt-3 w-full flex gap-3 flex-wrap">
              {languagesArray?.map((item) => (
                <a
                  className="hover:opacity-75 duration-300"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  title={item.name}
                >
                  <img
                    src={item.imgSrc}
                    className="lg:w-10 lg:h-10 w-8 h-8"
                    alt={item.name}
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
