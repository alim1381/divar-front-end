import { applyMiddleware, createStore } from "redux";
import rootRaducer from "./rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootRaducer, applyMiddleware(thunk));

export default store;
