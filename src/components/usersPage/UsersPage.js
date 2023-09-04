import React, { useEffect } from "react";
import { UserCard } from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/users/usersAction";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";
import Error404 from "../shared/404";

function UsersPage() {
  const { loading, users, error } = useSelector((state) => state.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  if (error) return <Error404 />
  return (
    <div className="w-2/3 p-3 mt-10 max-md:grid-cols-1 max-md:w-full">
      {loading && <Loader />}
      <ul class="grid grid-cols-3 gap-3 ">
        {users &&
          users.map((oneUser) => (
            <Link to={`/users/${oneUser._id}`}>
              <UserCard user={oneUser} />
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default UsersPage;
