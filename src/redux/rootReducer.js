import { combineReducers } from "redux";
import postsReducer from "./posts/postsReducer";
import registerReducer from "./register/registerReducer";

const rootRaducer = combineReducers({
  postsState: postsReducer,
  userState: registerReducer,
});

export default rootRaducer;
