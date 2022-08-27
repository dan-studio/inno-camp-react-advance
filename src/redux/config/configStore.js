import { configureStore } from "@reduxjs/toolkit";

import counter from '../module/musicSlice'


const store = configureStore({
  reducer:{counter:counter}
})

export default store