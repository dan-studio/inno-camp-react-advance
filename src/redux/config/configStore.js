import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
import musicReducer from '../module/musicSlice'
import commentReducer from '../module/commentSlice'

const rootReducer = combineReducers({
  musics: musicReducer,
  comments: commentReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store;