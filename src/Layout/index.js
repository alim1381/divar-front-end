import React, { useEffect } from "react";
import { Header } from "./Header";
import { PostForm } from "./PostForm";
import { useLocation } from "react-router-dom";
import { getCookie } from "../helpers/getCookie";
import { useDispatch, useSelector } from "react-redux";
import { loginUserSuccess } from "../redux/register/registerAction";
import { NotLogin } from "../components/NotLogin";

function Layout({ children }) {
  const { pathname } = useLocation();
  const { loading, user, error } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  useEffect(() => {
    const userLoginData = getCookie();
    const isLogin = userLoginData ? true : false;
    if (isLogin) {
      dispatch(loginUserSuccess(userLoginData));
    }
  }, []);

  console.log({ loading, user, error });

  // if (pathname === "/login" || pathname === "/register") return null
  return (
    <div className="flex flex-col bg-indigo-50 dark:bg-gray-700 h-full min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl w-full flex max-md:flex-col-reverse  mt-16">
        {children}
        {(pathname === "/" ) && user ? (
          <div className="w-1/3 p-3 max-md:w-full flex justify-center">
            <PostForm />
          </div>
        ) : null}
        {!(pathname === "/login" || pathname === "/register") && !user ? (
          <div className="w-1/3 p-3 max-md:w-full flex justify-center">
            <NotLogin />
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Layout;
