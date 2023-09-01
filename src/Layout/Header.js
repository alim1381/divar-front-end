import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUserSuccess } from "../redux/register/registerAction";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const exitHandler = () => {
    dispatch(loginUserSuccess(null));
    document.cookie = `username=${user.username};max-age=0`;
    document.cookie = `name=${user.name};max-age=0`;
    document.cookie = `token=${user.token};max-age=0`;
  };

  return (
    <nav
      dir="rtl"
      className="bg-white dark:bg-gray-800  shadow fixed top-0 w-full z-40 max-h-16">
      <div className="px-3 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            {/* TITLE */}
            <Link className="flex-shrink-0 md:mr-4 " to="/">
              <h2 className="dark:text-white p-2 text-indigo-600 font-bold">
                دیوار اشعار
                {user && <span className=" font-normal mr-2 text-gray-400">(کاربر : {user.name})</span>}
              </h2>
            </Link>
            <div className="hidden md:block">
              <div className="flex items-baseline gap-1">
                <Link
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/">
                  خانه
                </Link>
                <Link
                  className="text-gray-800 dark:text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/users">
                  کاربران
                </Link>
                <Link
                  className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/about">
                  درباره سایت
                </Link>
                {user && (
                  <button
                    className="text-gray-300 hover:text-red-600 dark:hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={exitHandler}>
                    خروج
                  </button>
                )}
              </div>
            </div>

            {/* Hambergr Button */}
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className=" text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hamberger Menu */}
      <div
        className={
          showMenu
            ? " bg-white dark:bg-gray-800 transition-transform translate-y-0"
            : " bg-white dark:bg-gray-800 transition-transform translate-y-[-150%]"
        }>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            href="/#">
            خانه
          </a>
          <Link
            className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            to="/users">
            کاربران
          </Link>
          <Link
            className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            to="/about">
            درباره سایت
          </Link>
          {user && (
            <button
              className="text-gray-300 hover:text-red-600 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={exitHandler}>
              خروج
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
