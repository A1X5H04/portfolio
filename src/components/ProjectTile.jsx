import { ArrowSquareOut, Star, GitFork } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { CardSpotlightEffect } from "./CardSpotlightEffect";

export default function ProjectTile({ title, description, link, website, language, languageColor, stars, forks }) {
  return (
    <CardSpotlightEffect className="border bg-white dark:bg-black hover:bg-gradient-to-t dark:from-gray-1000 dark:to-black from-slate-100 to-white  dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-100 dark:shadow-gray-1000 duration-200 ease-in-out rounded-md p-5">
      <div className="mb-8">
        <div className="flex justify-between mb-1">
        <a href={link}><h3 className="font-extrabold ">{title}</h3></a>
        <a href={website || "#"}>
        <ArrowSquareOut size={20}/>
        </a>
        </div>
        <p className={`text-sm text-gray-600 dark:text-gray-500 truncate ${!description && "italic"}`}>{description || "No Description Provided."}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span style={{backgroundColor: languageColor || "#adb5bdff"}} className="w-3 h-3 rounded-full"></span>
          <p className="text-sm">{language || "Others"}</p>
        </div>
        <div className="flex gap-2">
            <div className="inline-flex items-center gap-1 text-gray-900 dark:text-gray-400">
            <Star size={18} />
            <p className="text-sm">{stars}</p>
            </div>
            
            <div className="inline-flex items-center gap-1 text-gray-900 dark:text-gray-400">
            <GitFork size={18} />
            <p className="text-sm">{forks}</p>
            </div>
        </div>
      </div>
    </CardSpotlightEffect>
  );
}
