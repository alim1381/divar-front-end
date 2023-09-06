import React from "react";

export function UserCard({ user }) {
  return (
    <li className="flex flex-row mb-2 border-gray-400">
      <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
        {user.image ? (
          <img src={`http://localhost:5000${user.image}`} className="h-12 w-12 rounded-full mr-2"/>
        ) : (
          <div className="h-12 w-12 bg-gray-600 rounded-full flex justify-center items-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 fill-gray-400">
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        <div className="flex-1 pl-1 md:mr-16">
          <div className="font-medium dark:text-white">{user.name}</div>
          <div className="text-sm text-gray-600 dark:text-gray-200">
            @{user.username}
          </div>
        </div>
      </div>
    </li>
  );
}
