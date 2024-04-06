import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import GridPattern from "../components/GridPattern";
import DotPattern from "../components/DotPattern";
import ProjectSection from "../components/ProjectSection";

import { useTranslation } from "react-i18next";
import { Fade, Slide } from "react-awesome-reveal";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import HeroText from "../components/HeroText";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

console.log("rendered");

export default function Home() {
  const { projectData } = useContext(DataContext);
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-hidden">
      <div className="relative pt-2 border-b border-slate-300 dark:border-gray-800 text-center">
        <DotPattern width={24} height={24} cr={1} className="opacity-75" />
        <div
          style={{ animationDelay: "800ms" }}
          className="border-b mt-7  border-b-transparent dark:border-b-transparent border-dashed pulse-border overflow-hidden"
        >
          <Fade direction="up" triggerOnce>
            <h6 className=" lg:text-lg pt-4 pb-4 sm:text-sm min-w-min text-gray-800 dark:text-gray-200 font-mono">
              {t("home.title.introduction")}&nbsp;
              <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded">
                Alish Baig
              </span>
            </h6>
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
                <HeroText />
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
              {t("home.title.subtitle.text")}{" "}
              <span className="font-semibold">JavaScript</span>,
              <span className="font-semibold">&nbsp;React</span>,{" "}
              <span className="font-semibold">&nbsp;Next.JS</span>,
              <span className="font-semibold">&nbsp;Linux&nbsp;</span>
              {t("home.title.subtitle.and")}
              <span className="font-semibold">&nbsp;Git</span>.
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
                href="https://drive.google.com/uc?export=download&id=1ERDHUdbq2uhECwT1XPvVyCBFiXlr0ndU"
                className="bg-black dark:bg-white px-3 py-1.5 text-white dark:text-black rounded-md font-semibold hover:bg-gray-900 dark:hover:bg-slate-200 cursor-pointer"
              >
                {t("home.buttons.download_cv")}
              </a>
              <a
                href="https://github.com/a1x5h04"
                className="border border-slate-400 dark:border-gray-700 px-3 py-1.5 rounded-md font-semibold hover:border-slate-500 dark:hover:border-gray-600 cursor-pointer"
              >
                {t("home.buttons.github")}
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
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
          )}
        />
        <div className="text-center">
          <Fade direction="up" triggerOnce cascade damping={0.4}>
            <h3 className="text-3xl font-extrabold my-1">
              {t("home.project.title")}
            </h3>
            <p className="text-gray-500">{t("home.project.description")}</p>
          </Fade>
        </div>
        <ProjectSection projectData={projectData} t={t} />
      </div>
    </div>
  );
}
