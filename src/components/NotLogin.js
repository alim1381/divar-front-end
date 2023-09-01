import React from "react";
import { Link } from "react-router-dom";

export function NotLogin() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg w-full mt-10 p-4 h-fit ">
      <div className="text-center mx-auto px-4 ">
        <h2 className=" text-lg font-bold text-black dark:text-white sm:text-lg">
          برای ثبت شعر جدید
        </h2>
        <p className=" my-4 text-indigo-500">از اینجا وارد شوید</p>
        <div className="lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to={`/login`}
              className="py-3 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              ورود
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
