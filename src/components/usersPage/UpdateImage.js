import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export function UpdateImage({ toast, setUp, oneUser }) {
  const { user } = useSelector((state) => state.userState);
  const [newFile, setNewFile] = useState({
    id: user ? user.id : "",
    image: null,
  });
  const [currentImage, setCurrentImage] = useState(null);

  const changeHandler = (e) => {
    setNewFile((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
    setCurrentImage(URL.createObjectURL(e.target.files[0]));
  };
  const subHandler = () => {
    console.log(user.token);
    axios
      .put("/update/user/image", newFile, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `bearer ${user.token}`,
        },
      })
      .then((res) => {
        toast.success("عکس با موفقیت تغییر کرد");
        console.log(res.data);
        setUp((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
        toast.error("ارووور");
      });
  };
  return (
    <div className="mb-4 text-center opacity-90">
      <label htmlFor="profile">
        {(oneUser && oneUser.user.image) || currentImage ? (
          <div className="h-40 w-40 rounded-full overflow-hidden relative avatar-hover cursor-pointer">
            <img
              src={
                currentImage
                  ? currentImage
                  : `http://localhost:5000${oneUser.user.image}`
              }
              className="w-full absolute h-full"
            />
            <div className=" bg-[#37415190] h-8 w-full absolute flex justify-center items-center bottom-0 camera-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-6 h-6 fill-gray-400">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </div>
          </div>
        ) : (
          <label htmlFor="profile">
            <div className="h-40 w-40 bg-gray-600 rounded-full flex justify-center items-center mr-2 overflow-hidden relative avatar-hover cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 fill-gray-400">
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              <div className=" bg-[#37415190] h-8 w-full absolute flex justify-center items-center bottom-0 camera-up">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.5}
                  stroke="currentColor"
                  className="w-6 h-6 fill-gray-400">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              </div>
            </div>
          </label>
        )}
      </label>
      <input
        type="file"
        id="profile"
        className=" hidden"
        onChange={changeHandler}
      />
      {newFile.image && (
        <button
          onClick={subHandler}
          className="py-1 px-3 mt-3 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
          اعمال
        </button>
      )}
    </div>
  );
}
