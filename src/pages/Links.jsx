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
import { Fade, Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "../components/LoadingSpinner";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}


function Links() {
  const formRef = React.useRef();
  const {t} = useTranslation();
  const [isSending, setIsSending] = React.useState(false);
  const [sendBtnText, setSendBtnText] = React.useState(t('links.button.send'));


  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm('service_cdwh5hx', 'template_ce80v7e', formRef.current, 'z-4prsUP8jeQn_cGG')
      .then((result) => {
        if (result.text === "OK") {
          setSendBtnText(t('links.button.send_success'));
          setIsSending(false);
          formRef.current.reset();
        }
      }, (error) => {
        setSendBtnText(t('links.button.send_failed'));
        setIsSending(false);
        console.log(error.text);
      });
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
        setSendBtnText(t('links.button.send'));
    }, 1500);

    return () => {
      clearTimeout(timeout);
    }
  }, [sendBtnText]);

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
            <h1 className="text-3xl font-extrabold my-1">{t('links.title')}</h1>
            <p className="text-gray-500">{t('links.description')}</p>
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
              {t('links.contact_via_form')}
            </p>
            <span className="border-t border-slate-200 dark:border-gray-900 flex-1"></span>
          </div>
          <form ref={formRef} onSubmit={sendEmail} className="lg:w-[600px] my-6 flex flex-col gap-5 m-auto">
            <input
              type="text"
              name="user_name"
              placeholder={t('links.form_name')}
              required
              className="bg-white dark:bg-black border p-1 indent-2 rounded-md dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-1 ring-black dark:ring-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder={t('links.form_email')}
              required
              className="bg-white dark:bg-black border p-1 indent-2 rounded-md dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-1 ring-black dark:ring-white"
            />
            <textarea
              rows={10}
              placeholder={t('links.form_message')}
              name="message"
              required
              className="bg-white resize-none dark:bg-black border px-3 py-2 rounded-md dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-1 ring-black dark:ring-white"
            ></textarea>
            <button className="grid place-items-center bg-black dark:bg-white px-3 py-1.5 text-white dark:text-black rounded-md font-semibold hover:bg-gray-900 hover:bg-gradient-to-b from-black to-gray-900 dark:from-white dark:to-slate-200 duration-150 cursor-pointer overflow-hidden">
              <p className={sendBtnText === "Send" && "animate-fadein"}>
              <Slide duration={500} direction="up" triggerOnce>
                {isSending ? <LoadingSpinner className="my-1" svgWidth={16} svgHeight={16} /> : sendBtnText}
              </Slide>
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Links;