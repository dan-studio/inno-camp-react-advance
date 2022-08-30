import { configureStore } from "@reduxjs/toolkit";

import musicReducer from '../module/musicSlice'
import commentReducer from '../module/commentSlice'

const store = configureStore({
  reducer:{musics:musicReducer, comments:commentReducer}
})

export default store;