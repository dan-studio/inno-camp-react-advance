import { configureStore } from "@reduxjs/toolkit";

import musicReducer from '../module/musicSlice'


const store = configureStore({
  reducer:{musics:musicReducer}
})

export default store