import React from "react";
import { NavLink } from "react-router-dom";
import {
  GithubLogo,
  List,
  Moon,
  Sun,
} from "@phosphor-icons/react";




function Header() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const [dark, setDark] = React.useState(prefersDark.matches);
  const [themeIcon, setThemeIcon] = React.useState("dark");
  const [showNav, setShowNav] = React.useState(false);
  const htmlElm = document.querySelector("html");

  React.useEffect(() => {
  if (dark) {
    htmlElm.classList.add("dark");
    setThemeIcon("dark");
  } else {
    htmlElm.classList.remove("dark");
    setThemeIcon("light");
  }
  }, [dark, htmlElm]);

  prefersDark.addEventListener("change", (e) => {
    setDark(e.matches);
  });

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <header className="w-full z-40 sticky top-0 backdrop-blur-lg bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-50 border-b border-slate-300 dark:border-gray-800 duration-200">
      <div className="relative flex justify-between py-5 px-8">
        <div className="flex gap-8">
          <p className="font-bold ">『A1X5H04』</p>
          <nav className="hidden sm:block mx-5">
            <ul className="flex gap-5 text-sm">
              <li>
                <NavLink to="/">
                  {({ isActive }) => (
                    <span
                      className={`${isActive
                        ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                        : "text-slate-400 dark:text-gray-400"
                        } duration-100`}
                    >
                      Home
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard">
                  {({ isActive }) => (
                    <span
                      className={`${isActive
                        ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                        : "text-slate-400 dark:text-gray-400"
                        } duration-100`}
                    >
                      Dashboard
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="links">
                  {({ isActive }) => (
                    <span
                      className={`${isActive
                        ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                        : "text-slate-400 dark:text-gray-400"
                        } duration-100`}
                    >
                      Links
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() =>
            (window.location.href =
              "https://github.com/a1x5h04/a1x5h04.github.io")
            }
            className="p-1 border border-transparent hover:border-slate-200 dark:hover:border-gray-700 duration-300 rounded-md"
          >
            <GithubLogo size={20} />
          </button>
          <button
            onClick={() => toggleTheme()}
            className="p-1 border border-transparent hover:border-slate-200 dark:hover:border-gray-700 duration-300 rounded-md"
          >
            {themeIcon === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="">
            <button
              onClick={() => setShowNav((prev) => !prev)}
              className="sm:hidden p-1 border border-transparent hover:border-slate-200 dark:hover:border-gray-700 duration-300 rounded-md"
            >
              <List size={20} />
            </button>
            {showNav && <NavDialog />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

function NavDialog() {
  return (
    <div className="absolute right-0 left-0 top-16 duration-200 backdrop-blur-lg bg-white dark:bg-black bg-opacity-75 dark:bg-opacity-50 border-b border-slate-300 dark:border-gray-800">
      <div className="p-3">
        <nav className="mx-2">
          <ul className="flex justify-evenly gap-5 text-sm">
            <li>
              <NavLink to="/">
                {({ isActive }) => (
                  <span
                    className={`${isActive
                      ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                      : "text-slate-400 dark:text-gray-400"
                      } duration-100`}
                  >
                    Home
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard">
                {({ isActive }) => (
                  <span
                    className={`${isActive
                      ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                      : "text-slate-400 dark:text-gray-400"
                      } duration-100`}
                  >
                    Dashboard
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="links">
                {({ isActive }) => (
                  <span
                    className={`${isActive
                      ? "border-b-2 border-slate-900 dark:border-gray-100 text-slate-600 dark:text-gray-300 font-bold "
                      : "text-slate-400 dark:text-gray-400"
                      } duration-100`}
                  >
                    Links
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
