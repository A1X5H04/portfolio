import { NavLink } from "react-router-dom";
import { GithubLogo, Sun } from "@phosphor-icons/react";


function Header() {
  return (
    <header className="w-full py-5 px-8 sticky top-0 backdrop-blur-lg bg-black bg-opacity-50 flex justify-between border-b border-gray-900">
      <div className="flex gap-8">
        <p className="font-bold">A1X5H04</p>
        <nav className="mx-5">
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
              <NavLink to="contact">
                {({ isActive }) => (
                  <span
                    className={`${
                      isActive
                        ? "border-b-2 border-gray-100 text-gray-300 font-bold "
                        : "text-gray-400"
                    } duration-100`}
                  >
                    Contact
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
      </div>
    </header>
  );
}

export default Header;
