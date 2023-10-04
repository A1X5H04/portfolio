import { ArrowSquareOut, Star, GitFork } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export default function ProjectTile({ title, description, link, tags, language  }) {
  return (
    <div className="relative border border-gray-800 bg-gray-1000 rounded-md p-5">
      <div className="mb-8">
        <div className="flex justify-between mb-1">
        <h3 className="font-extrabold ">{title}</h3>
        <a href={link}>
        <ArrowSquareOut size={20}/>
        </a>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="my-2 flex flex-wrap gap-2">
            {tags.map((item) => (
                <span className="bg-white font-medium text-black rounded-full px-2 py-1 text-xs">{item}</span>
            ))}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span style={{backgroundColor: language?.color || "#ffffff"}} className="w-3 h-3 rounded-full"></span>
          <p className="text-sm">{language.text}</p>
        </div>
        <div className="flex gap-2">
            <div className="inline-flex items-center gap-1 text-gray-400">
            <Star size={18} />
            <p className="text-sm">20</p>
            </div>
            
            <div className="inline-flex items-center gap-1 text-gray-400">
            <GitFork size={18} />
            <p className="text-sm">1</p>
            </div>
        </div>
      </div>
    </div>
  );
}
