import {
  DiscordLogo,
  EnvelopeOpen,
  InstagramLogo,
  LinkedinLogo,
  TelegramLogo,
} from "@phosphor-icons/react";
import emailjs from '@emailjs/browser';
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import GridPattern from "../components/GridPattern";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Fade } from "react-awesome-reveal";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}


function Links() {
  const formRef = React.useRef();
  const [sendBtnText, setSendBtnText] = React.useState("Send");
  const [isSending, setIsSending]  = React.useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm('service_cdwh5hx', 'template_ce80v7e', formRef.current, 'z-4prsUP8jeQn_cGG')
      .then((result) => {
          if(result.text === "OK"){
            setSendBtnText("Email sent successfully!");
            setIsSending(false);
            formRef.current.reset();
          }
      }, (error) => {
          setSendBtnText("Failed to send email");
          setIsSending(false);
          console.log(error.text);
      });
  };


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
          <Fade direction="up" triggerOnce cascade damping={0.2}>
            <h1 className="text-3xl font-extrabold my-1">Links</h1>
            <p className="text-gray-500">Contact and Social Links</p>
          </Fade>
        </div>
        <div className="my-5 grid place-items-center">
          <div className="mb-5 flex gap-3">
            <a
              href="mailto:alishbaig2004@gmail.com"
              className="hover:-translate-y-1 duration-150"
            >
              <EnvelopeOpen
                size={22}
                weight="duotone"
                className="text-slate-700 dark:text-gray-300"
              />
            </a>
            <a
              href="https://github.com/a1x5h04"
              className="hover:-translate-y-1 duration-150"
            >
              <GithubLogo
                size={22}
                weight="duotone"
                className="text-slate-700 dark:text-gray-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/alishbaig/"
              className="hover:-translate-y-1 duration-150"
            >
              <LinkedinLogo
                size={22}
                weight="duotone"
                className="text-slate-700 dark:text-gray-300"
              />
            </a>
            <a
              href="https://telegram.me/a1x5h04"
              className="hover:-translate-y-1 duration-150"
            >
              <TelegramLogo
                size={22}
                weight="duotone"
                className="text-slate-700 dark:text-gray-300"
              />
            </a>
            <a
              href="https://www.instagram.com/a1x5h04/"
              className="hover:-translate-y-1 duration-150"
            >
              <InstagramLogo
                size={22}
                weight="duotone"
                className="text-slate-700 dark:text-gray-300"
              />
            </a>
            <a
              href="https://discordapp.com/users/a1x5h04"
              className="hover:-translate-y-1 duration-150"
            >
              <DiscordLogo
                size={22}
                weight="duotone"
                className="text-slate-700 dark:text-gray-300"
              />
            </a>
          </div>
        </div>
        <div className="w-full px-5">
          <div className="flex items-center">
            <span className="border-t border-slate-200 dark:border-gray-900 flex-1"></span>
            <p className="uppercase text-sm mx-5 font-normal text-slate-400 dark:text-gray-600">
              or contact via form
            </p>
            <span className="border-t border-slate-200 dark:border-gray-900 flex-1"></span>
          </div>
          <form ref={formRef} onSubmit={sendEmail} className="lg:w-[600px] my-6 flex flex-col gap-5 m-auto">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="bg-white dark:bg-black border p-1 indent-2 rounded-md dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-1 ring-black dark:ring-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="bg-white dark:bg-black border p-1 indent-2 rounded-md dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-1 ring-black dark:ring-white"
            />
            <textarea
              rows={10}
              placeholder="Message"
              name="message"
              required
              className="bg-white dark:bg-black border px-3 py-2 rounded-md dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-1 ring-black dark:ring-white"
            ></textarea>
            <button className="grid place-items-center bg-black dark:bg-white px-3 py-1.5 text-white dark:text-black rounded-md font-semibold hover:bg-gray-900 hover:bg-gradient-to-b from-black to-gray-900 dark:from-white dark:to-slate-200 duration-150 cursor-pointer">
              {isSending ? <LoadingElement /> : sendBtnText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


function LoadingElement() {
  return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-4 h-4 my-1 text-gray-200 animate-spin dark:text-gray-800 fill-black dark:fill-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
  );
}


export default Links;
