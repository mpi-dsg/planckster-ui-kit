import React from "react";

interface NavbarProps {
  role?: "Research Context" | "Conversations" | "About Us";
  darkMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ role, darkMode }) => {
  const navbarClass = darkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-200";
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const hoverBgColor = darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100";
  const hoverTextColor = darkMode
    ? "hover:text-blue-300"
    : "hover:text-blue-700";

  return (
    <nav className={navbarClass}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        {/* Navbar content */}
        <a
          href="https://www.mpi-sws.org/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://avatars.githubusercontent.com/u/43347517?s=200&v=4"
            className="w-16 h-16 ml-10"
            alt="MPI-SWS Logo"
          />
        </a>
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4  text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className={`block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${textColor} ${darkMode ? "bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" : "bg-gray-50"}`}
              placeholder="Search..."
            />
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg ${darkMode ? "bg-gray-800 border-gray-700 dark:border-gray-700" : "bg-gray-50 border-gray-100"} md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${darkMode ? "md:bg-gray-800 dark:bg-gray-800" : "md:bg-white"}`}
          >
            <li>
              <a
                href="#"
                className={`block py-2 px-3 rounded ${hoverBgColor} md:hover:bg-transparent md:p-6 ${textColor} ${
                  role === "Research Context"
                    ? darkMode
                      ? "text-blue-700 md:text-blue-500"
                      : "text-blue-700 md:text-blue-500 dark:hover:text-blue-500"
                    : hoverTextColor
                }`}
                aria-current={role === "Research Context" ? "page" : undefined}
              >
                Research Context
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 rounded ${hoverBgColor} md:hover:bg-transparent md:p-6 ${textColor} ${
                  role === "Conversations"
                    ? darkMode
                      ? "text-blue-700 md:text-blue-500"
                      : "text-blue-700 md:text-blue-500 dark:hover:text-blue-500"
                    : hoverTextColor
                }`}
                aria-current={role === "Conversations" ? "page" : undefined}
              >
                Conversations
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 rounded ${hoverBgColor} md:hover:bg-transparent md:p-6 ${textColor} ${
                  role === "About Us"
                    ? darkMode
                      ? "text-blue-700 md:text-blue-500"
                      : "text-blue-700 md:text-blue-500 dark:hover:text-blue-500"
                    : hoverTextColor
                }`}
                aria-current={role === "About Us" ? "page" : undefined}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
export type { NavbarProps };
