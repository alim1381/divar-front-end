export function PostCard({ title, body, user }) {
  return (
    <div className="w-full px-4 py-4 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex justify-between">
        {/* LEFT BOX */}
        <div className="flex">
          {user.image ? (
            <img src={`http://localhost:5000${user.image}`} className="h-12 w-12 mr-2 rounded-full" />
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
          <div>
            <h3 className="dark:text-white">{user.name}</h3>
            <p className="dark:text-gray-400">@{user.username}</p>
          </div>
        </div>
        {/* RIGHT BOX */}
        <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
          </svg>
        </div>
      </div>
      <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white text-center">
        {title}
      </h3>
      <p className="py-4 text-gray-500 text-md dark:text-gray-300 text-center">
        {body}
      </p>
    </div>
  );
}
