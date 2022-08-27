import { configureStore } from "@reduxjs/toolkit";

import counter from '../module/musics';


const store = configureStore({
    reducer:{counter:counter}
})

export default store;