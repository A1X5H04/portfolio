import {
  DiscordLogo,
  EnvelopeOpen,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
} from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import GridPattern from "../components/GridPattern";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Links() {
  return (
    <div className="relative">
      <div className=" pt-10 mb-5 flex flex-col items-center text-center">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
          )}
        />
        <div>
          <h1 className="text-3xl font-extrabold my-1">Links</h1>
          <p className="text-gray-500">Contact and Social Links</p>
        </div>
        <div className="my-5 grid place-items-center">
          <div className="mb-5 flex gap-3">
            <a
              href="mailto:alishbaig2004@gmail.com"
              className="hover:-translate-y-1 duration-150"
            >
              <EnvelopeOpen size={22} weight="duotone" />
            </a>
            <a
              href="https://github.com/a1x5h04"
              className="hover:-translate-y-1 duration-150"
            >
              <GithubLogo size={22} weight="duotone" />
            </a>
            <a
              href="https://www.linkedin.com/in/alishbaig/"
              className="hover:-translate-y-1 duration-150"
            >
              <LinkedinLogo size={22} weight="duotone" />
            </a>
            <a
              href="https://telegram.me/a1x5h04"
              className="hover:-translate-y-1 duration-150"
            >
              <TelegramLogo size={22} weight="duotone" />
            </a>
            <a
              href="https://www.instagram.com/a1x5h04/"
              className="hover:-translate-y-1 duration-150"
            >
              <InstagramLogo size={22} weight="duotone" />
            </a>
            <a
              href="https://discordapp.com/users/a1x5h04"
              className="hover:-translate-y-1 duration-150"
            >
              <DiscordLogo size={22} weight="duotone" />
            </a>
          </div>
        </div>
        <div className="w-full px-5">
          <div className="flex items-center">
            <span className="border-t border-gray-900 flex-1"></span>
            <p className="uppercase text-sm mx-5 font-normal text-gray-500">
              or contact via form
            </p>
            <span className="border-t border-gray-900 flex-1"></span>
          </div>
          <form className="lg:w-[600px] my-6 flex flex-col gap-5 m-auto">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border p-1 indent-2 rounded-md border-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-1 ring-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border p-1 indent-2 rounded-md border-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-1 ring-white"
            />
            <textarea
              rows={10}
              placeholder="Message"
              className="bg-transparent border p-1 indent-2 rounded-md border-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-1 ring-white"
            ></textarea>
            <button className="flex items-center justify-center gap-2 hover:shadow-md shadow-white cursor-pointer  bg-white text-black font-bold py-1 px-2 rounded-md">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Links;
