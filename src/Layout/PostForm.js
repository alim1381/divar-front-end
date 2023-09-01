import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "../redux/posts/postsAction";

export function PostForm() {
  const { createPostData } = useSelector((state) => state.postsState);
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const [sendData, setSendData] = useState({
    title: "",
    body: "",
    userId : user.id,
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    setSendData({
      title: "",
      body: "",
      userId : user.id
    });
  }, [createPostData]);

  const changeHandler = (e) => {
    setSendData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setError(false);
  };

  const subHandler = (e) => {
    e.preventDefault();
    if (sendData.title && sendData.body) {
      dispatch(createNewPost(sendData , user.token));
    } else {
      setError(true);
    }
  };
  return (
    <form className="flex w-full max-w-sm space-x-3 " dir="rtl">
      <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
          {!error ? (
            "پست جدید"
          ) : (
            <p>
              پست جدید{" "}
              <span className="text-red-600 text-sm">
                {"(* باید تمام فیلد ها تکمیل شوند)"}
              </span>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 m-auto">
          <div className="w-full">
            <div className=" relative ">
              <input
                type="text"
                id="title"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="عنوان"
                value={sendData.title}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-gray-700" htmlFor="body">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="body"
                placeholder="متن"
                name="body"
                rows="5"
                cols="40"
                value={sendData.body}
                onChange={changeHandler}></textarea>
            </label>
          </div>
          <div className="col-span-2 text-right">
            <button
              type="submit"
              onClick={subHandler}
              className={
                !error
                  ? "py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  : "py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              }>
              ثبت
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
