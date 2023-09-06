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
        setTimeout(() => {
          document.cookie = `username=${res.data.username}`;
          document.cookie = `name=${res.data.name}`;
          document.cookie = `image=${res.data.image}`;
          document.cookie = `token=${res.data.token}`;
          document.cookie = `id=${res.data.id}`;
          dispatch(loginUserSuccess(res.data));
        }, 1000);
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(loginUserfaild(err.response.data));
      });
  };
};

const registerUser = (data) => {
  return (dispatch) => {
    dispatch(fetchUserData());
    axios
      .post("/auth/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        const user = {
          name : data.username,
          username : data.username,
          token : res.data.token ,
          id : res.data.id,
        }
        setTimeout(() => {
          document.cookie = `username=${data.username}`;
          document.cookie = `name=${data.name}`;
          document.cookie = `image=${res.data.image}`;
          document.cookie = `token=${res.data.token}`;
          document.cookie = `id=${res.data.id}`;
          dispatch(loginUserSuccess(user));
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginUserfaild(err.response.data));
      });
  };
};

export { loginUser, loginUserSuccess, registerUser };
