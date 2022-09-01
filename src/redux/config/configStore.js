import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import musics from "../module/musicSlice";
import comments from "../module/commentSlice";
const rootReducer = combineReducers({
  musics: musics,
  comments: comments,
});
const store = configureStore({
  reducer: rootReducer
});
export default store;
