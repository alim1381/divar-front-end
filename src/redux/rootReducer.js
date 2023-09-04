import { combineReducers } from "redux";
import postsReducer from "./posts/postsReducer";
import registerReducer from "./register/registerReducer";
import usersReducer from "./users/usersReducer";

const rootRaducer = combineReducers({
  postsState: postsReducer,
  userState: registerReducer,
  usersList : usersReducer,
});

export default rootRaducer;
