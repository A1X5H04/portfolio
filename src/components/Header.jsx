import React from "react";
import { NavLink } from "react-router-dom";
import { GithubLogo, List, Sun } from "@phosphor-icons/react";


function Header() {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <header className="w-full z-10 py-5 px-8 sticky top-0 backdrop-blur-lg bg-black bg-opacity-50 flex justify-between border-b border-gray-900">
      <div className="flex gap-8">
        <p className="font-bold">A1X5H04</p>
        <nav className="hidden sm:block mx-5">
          <ul className="flex gap-5 text-sm">
            <li>
              <NavLink to="/">
                {({ isActive }) => (
                  <span
                    className={`${
                      isActive
                        ? "border-b-2 border-gray-100 text-gray-300 font-bold "
                        : "text-gray-400"
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
                    className={`${
                      isActive
                        ? "border-b-2 border-gray-100 text-gray-300 font-bold "
                        : "text-gray-400"
                    } duration-100`}
                  >
                    Dashboard
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="social">
                {({ isActive }) => (
                  <span
                    className={`${
                      isActive
                        ? "border-b-2 border-gray-100 text-gray-300 font-bold "
                        : "text-gray-400"
                    } duration-100`}
                  >
                    Social
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-4">
        <button className="p-1 border border-transparent hover:border-gray-700 duration-300 rounded-md">
          <GithubLogo size={20} />
        </button>
        <button className="p-1 border border-transparent hover:border-gray-700 duration-300 rounded-md">
          <Sun size={20} />
        </button>
        <div className="relative">
        <button onClick={() => setShowNav(prev => !prev)} className="sm:hidden p-1 border border-transparent hover:border-gray-700 duration-300 rounded-md">
          <List size={20} />
        </button>
        {showNav && <NavDialog />}
        </div>
      </div>
    </header>
  );
}

export default Header;


function NavDialog() {
  return (
    <div className="absolute right-0 top-10 duration-200 bg-black bg-opacity-75 backdrop-blur-sm border border-gray-900  rounded-md">
        <div className="p-3">
        <nav className="mx-2">
          <ul className="flex flex-col gap-5 text-sm">
            <li>
              <NavLink to="/">
                {({ isActive }) => (
                  <span
                    className={`${
                      isActive
                        ? "border-b-2 border-gray-100 text-gray-300 font-bold "
                        : "text-gray-400"
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
                    className={`${
                      isActive
                        ? "border-b-2 border-gray-100 text-gray-300 font-bold "
                        : "text-gray-400"
                    } duration-100`}
                  >
                    Dashboard
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="social">
                {({ isActive }) => (
                  <span
                    className={`${
                      isActive
                        ? "border-b-2 border-gray-100 text-gray-300 font-bold "
                        : "text-gray-400"
                    } duration-100`}
                  >
                    Social
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