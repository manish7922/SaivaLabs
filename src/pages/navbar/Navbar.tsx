import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-black dark:text-white duration-200 fixed w-full  top-0 z-40">
      <div className="bg-primary py-2">
        <div className="container flex justify-between items-center">
          <div className="">
            <Link
              to="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2">
              Saiva Labs
            </Link>
          </div>

          <div className="pointer-events-auto hidden md:block">
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                  to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                  to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                  to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                  to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
