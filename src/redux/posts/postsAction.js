import axios from "axios";
import { getCookie } from "../../helpers/getCookie";
const cookie = getCookie("connect.sid");
const isLoggin = cookie ? true : false;

const fetchPosts = () => ({
  type: "FETCH_POSTS",
});

const fetchPostsSuccess = (posts) => ({
  type: "FETCH_POSTS_SUCCESS",
  payload: posts,
});

const fetchPostsFeild = (err) => ({
  type: "FETCH_POSTS_FEILD",
  payload: err,
});

const createPostSuccess = (data) => ({
  type: "CREATE_USER_SUCCESS",
  payload: data,
});

const createPostsFaild = (err) => ({
  type: "CREATE_USER_FAILD",
  payload: err,
});

const isFinishedData = () => ({
  type: "IS_FINISHED_DATA",
});

const getAllPosts = (page) => {
  return (dispatch) => {
    dispatch(fetchPosts());
    axios
      .get(`/posts?page=${page}`)
      .then((res) => {
        if (res.data.data.length > 0) {
          dispatch(fetchPostsSuccess(res.data.data));
        } else {
          dispatch(isFinishedData());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchPostsFeild(err));
      });
  };
};

const createNewPost = (data, token) => {
  return (dispatch) => {
    dispatch(fetchPosts());
    axios
      .post("/posts/create", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(createPostSuccess(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(createPostsFaild(err.response.data.message));
      });
  };
};

export { getAllPosts, createNewPost };
