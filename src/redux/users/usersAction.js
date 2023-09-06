import axios from "axios";
const fetchUsers = () => ({
  type: "FETCH_USERS",
});
const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});
const fetchOneUserSuccess = (user) => ({
  type: "FETCH_ONE_USER_SUCCESS",
  payload: user,
});
const fetchUsersFaild = (error) => ({
  type: "FETCH_USERS_FAILD",
  payload: error,
});

const getAllUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsers())
    axios
      .get("/users")
      .then((res) => {
        dispatch(fetchUsersSuccess(res.data.users));
      })
      .catch((err) => {
        dispatch(fetchUsersFaild(err.response ? err.response.message : "Error"));
      });
  };
};
const getOneUserById = (id) => {
  return (dispatch) => {
    dispatch(fetchUsers())
    axios
      .get(`/users/${id}`)
      .then((res) => {
        dispatch(fetchOneUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUsersFaild(err.response ? err.response.message : "Error"));
      });
  };
};
export { getAllUsers , getOneUserById };
