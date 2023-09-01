import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/register/registerAction";
import Loader from "../shared/Loader";
import Error404 from "../shared/404";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const [pressed, setPressed] = useState(false);
  const [sendData, setSendData] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setSendData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const sendHandler = () => {
    dispatch(loginUser(sendData));
    setPressed(true);
  };

  useEffect(() => {
    if (error && pressed) {
      if (error.message) {
        toast.error(error.message, { position: "top-center" });
      } else {
        toast.error("انجام عملیات با خطا مواجه شد!", {
          position: "top-center",
        });
      }
      setPressed(false);
    }
  }, [error]);

  useEffect(() => {
    if (user && pressed) {
      toast.success("درحال انتقال به صفحه اصلی...", { position: "top-center" });
      setPressed(false);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  } , [user]);

  return (
    <div
      dir="rtl"
      className="mt-10 m-auto bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden dark:bg-gray-800">
      <ToastContainer />
      <div className="px-4 py-8 sm:px-10">
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm leading-5">
            <span className="px-2 text-gray-500 bg-white dark:text-white dark:bg-gray-800">
              ورود به حساب کاربری
            </span>
          </div>
        </div>
        <div className="mt-6">
          <div className="w-full space-y-6">
            <div className="w-full">
              <div className=" relative ">
                <input
                  type="text"
                  id="username"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="نام کاربری"
                  onChange={changeHandler}
                  value={sendData.username}
                />
              </div>
            </div>
            <div className="w-full">
              <div className=" relative ">
                <input
                  type="text"
                  id="password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="رمز عبور"
                  onChange={changeHandler}
                  value={sendData.password}
                />
              </div>
            </div>
            <div>
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={sendHandler}
                  className="py-2 px-4 mb-2  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  ورود
                </button>
                {loading && <Loader />}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 sm:px-10">
        <p className=" text-sm text-center leading-5 text-gray-500 dark:text-white ">
          اگه حساب کاربری ندارید از{" "}
          <Link to={"/register"} className=" text-indigo-600 font-bold">
            اینجا
          </Link>{" "}
          ثبت نام کنید
        </p>
      </div>
    </div>
  );
}

export default Login;
