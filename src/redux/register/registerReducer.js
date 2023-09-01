const initialState = {
  loading: false,
  user: null,
  error: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      return {
        ...state,
        loading: true,
      };
    // success
    case "LOGIN_USER_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        err: null,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        err: null,
      };
    // faild
    case "LOGIN_USER_FAILD":
      return {
        err: action.payload,
        loading: false,
        user: null,
      };
    case "REGISTER_USER_FAILD":
      return {
        err: action.payload,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default registerReducer;
