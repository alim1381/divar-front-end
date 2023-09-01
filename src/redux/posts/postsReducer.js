const initialState = {
  loading: false,
  posts: null,
  error: null,
  createPostData : null,
  createPostError : null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null,
      };
    case "FETCH_POSTS_FEILD":
      return {
        ...state,
        loading: false,
        posts: null,
        error: action.payload,
      };
    case "CREATE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        createPostError: null,
        createPostData: action.payload,
      };
    case "CREATE_USER_FAILD":
      return {
        ...state,
        loading: false,
        createPostData : null,
        createPostError: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
