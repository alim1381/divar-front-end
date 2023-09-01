import axios from "axios";

const fetchUserData = () => ({
  type: "FETCH_USER_DATA",
});

const loginUserSuccess = (user) => ({
  type: "LOGIN_USER_SUCCESS",
  payload: user,
});
const loginUserfaild = (err) => ({
  type: "LOGIN_USER_FAILD",
  payload: err,
});

const registerUserSuccess = (user) => ({
  type: "REGISTER_USER_SUCCESS",
  payload: user,
});
const registerUserFaild = (err) => ({
  type: "REGISTER_USER_FAILD",
  payload: err,
});

const loginUser = (data) => {
  return (dispatch) => {
    dispatch(fetchUserData());
    axios
      .post("/auth/login", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        document.cookie = `username=${res.data.username}`
        document.cookie = `name=${res.data.name}`
        document.cookie = `token=${res.data.token}`
        document.cookie = `id=${res.data.id}`
        dispatch(loginUserSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        // dispatch(loginUserfaild(err))
      });
  };
};

export { loginUser , loginUserSuccess };
