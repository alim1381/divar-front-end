const initialState = {
  loading: false,
  users: null,
  error: null,
  oneUser : null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        loading: false,
        users: action.payload,
        error: null,
      };
    case "FETCH_USERS_FAILD":
      return {
        loading: false,
        users: null,
        error: action.payload,
      };
    case "FETCH_ONE_USER_SUCCESS":
      return {
        loading: false,
        oneUser: action.payload,
        users : null,
        error: null,
      };

    default:
      return state;
  }
};

export default usersReducer;
