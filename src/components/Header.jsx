import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ThemeContext from "../contexts/ThemeContext";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import {
  PiList,
  PiMoonDuotone,
  PiSunDuotone,
  PiTranslate,
  PiX,
} from "react-icons/pi";

const languages = [
  {
    name: "English",
    nativeName: "English",
    code: "en",
  },
  {
    name: "Chinese",
    nativeName: "简体中文",
    code: "zh_cn",
  },
  {
    name: "Spanish",
    nativeName: "Español",
    code: "es",
  },
  {
    name: "Arabic",
    nativeName: "العربية",
    code: "ar",
  },
  {
    name: "French",
    nativeName: "français",
    code: "fr",
  },
  {
    name: "Japanese",
    nativeName: "日本語",
    code: "ja",
  },
];

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [language, setLanguage] = useState("en");
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const { t } = useTranslation();

  const handleLangSelectChange = (e) => {
    setLanguage(e.target.value);
    setShowLangPicker(false);
  };

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    const dir = i18next.dir(i18next.language);
    document.documentElement.dir = dir;
  }, [i18next, i18next.language]);

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <header
      className={`w-full ${
        showNav ? "h-32 sm:h-20" : "h-20"
      } py-6 flex flex-col justify-between z-10 sticky top-0 backdrop-blur-lg bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-50 border-b border-slate-300 dark:border-gray-800 transition-height duration-500 ease-in-out`}
    >
      <div className="flex items-center justify-between px-8">
        <div className="flex gap-8">
          <p className="font-bold ">『A1X5H04』</p>
          <nav className="hidden sm:block">
            <ul className="flex gap-5 text-sm">
              <li>
                <NavLink to="/">
                  {({ isActive }) => (
                    <span
                      className={`${
                        isActive
                          ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                          : "text-slate-400 dark:text-gray-400"
                      } duration-100`}
                    >
                      {t("header.home")}
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard">
                  {({ isActive }) => (
                    <span
                      className={`${
                        isActive
                          ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                          : "text-slate-400 dark:text-gray-400"
                      } duration-100`}
                    >
                      {t("header.dashboard")}
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="links">
                  {({ isActive }) => (
                    <span
                      className={`${
                        isActive
                          ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                          : "text-slate-400 dark:text-gray-400"
                      } duration-100`}
                    >
                      {t("header.links")}
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="relative flex gap-4">
          <button
            onClick={() => setShowLangPicker((prev) => !prev)}
            className={`p-1 border border-transparent ${
              showLangPicker &&
              "border-slate-200 bg-slate-50 dark:bg-gray-1000 dark:border-gray-700"
            } hover:border-slate-200 hover:bg-slate-50 dark:hover:bg-gray-1000 dark:hover:border-gray-700 duration-300 rounded-md`}
          >
            <PiTranslate size={20} />
          </button>
          <button
            onClick={() => toggleTheme()}
            className="p-1 border border-transparent hover:border-slate-200 hover:bg-slate-50 dark:hover:bg-gray-1000 dark:hover:border-gray-700 duration-300 rounded-md"
          >
            {theme === "dark" ? (
              <PiSunDuotone size={20} />
            ) : (
              <PiMoonDuotone size={20} />
            )}
          </button>
          <button
            onClick={() => setShowNav((prev) => !prev)}
            className="sm:hidden p-1 border border-transparent hover:border-slate-200 dark:hover:border-gray-700 duration-300 rounded-md"
          >
            {showNav ? <PiX size={20} /> : <PiList size={20} />}
          </button>
          {showLangPicker && (
            <LanguagePicker
              handleChange={handleLangSelectChange}
              selectedLanguage={language}
            />
          )}
        </div>
      </div>
      {showNav && <MobileNavbar t={t} />}
    </header>
  );
}

function MobileNavbar({ t }) {
  return (
    <nav className="sm:hidden -z-10">
      <ul className="flex justify-evenly gap-5 text-sm">
        <Fade triggerOnce cascade damping={0.2}>
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive
                      ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                      : "text-slate-400 dark:text-gray-400"
                  } duration-100`}
                >
                  {t("header.home")}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive
                      ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                      : "text-slate-400 dark:text-gray-400"
                  } duration-100`}
                >
                  {t("header.dashboard")}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="links">
              {({ isActive }) => (
                <span
                  className={`${
                    isActive
                      ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                      : "text-slate-400 dark:text-gray-400"
                  } duration-100`}
                >
                  {t("header.links")}
                </span>
              )}
            </NavLink>
          </li>
        </Fade>
      </ul>
    </nav>
  );
}

function LanguagePicker(props) {
  return (
    <Fade duration={500}>
      <div className="antialiased z-20 overflow-hidden overflow-y-scroll absolute top-10 -right-6 border bg-white dark:bg-black hover:bg-gradient-to-t dark:from-gray-1000 dark:to-black from-slate-100 to-white  dark:hover:border-gray-800 dark:border-gray-900 border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-100 dark:shadow-gray-1000 duration-200 ease-in-out rounded-md py-2 px-4">
        <div role="radiogroup" className="w-44 h-60">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="w-full inline-flex gap-2 justify-between items-center border-b border-slate-200 dark:border-gray-900 py-2"
            >
              <label htmlFor={`radio_${lang.code}`} className="cursor-pointer">
                <h3 className="text-sm font-extrabold ">{lang.name}</h3>
                <p className="text-xs font-normal">{lang.nativeName}</p>
              </label>
              <div className="rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  checked={props.selectedLanguage === lang.code}
                  onChange={(e) => props.handleChange(e)}
                  id={`radio_${lang.code}`}
                  type="radio"
                  value={lang.code}
                  className="radiobtn appearance-none focus:outline-none border rounded-full border-gray-600 dark:border-slate-300 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-gray-800 dark:border-slate-200 rounded-full w-full h-full z-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

LanguagePicker.propTypes = {
  selectedLanguage: PropTypes.string,
  handleChange: PropTypes.func,
};

MobileNavbar.propTypes = {
  t: PropTypes.func,
};

export default Header;
