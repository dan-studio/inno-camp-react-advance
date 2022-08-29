import axios from "axios";
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const __getMusic = createAsyncThunk(
  "music/GET_Music",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/list");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __addMusic = createAsyncThunk(
  "music/ADD_MUSIC",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/list", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)


const initialState = {
  list: [],
  currentMusic: [],
}

const counterSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    addMusic: (state = initialState, action={}) => {
      const new_music_list = [...state.list, action.payload]
      return {...state, list: new_music_list}
    }
  },
  extraReducers: {
    [__getMusic.pending]: (state) => {
      state.isLoading = true; //네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getMusic.fulfilled]: (state, action) => {
      state.isLoading = false; //네트워크 요청이 끝났으니, false로 변경합니다.
      state.list = action.payload; //Store에 있는 list에 서버에서 가져온 music을 넣습니다.
    },
    [__getMusic.rejected]: (state, action) => {
      state.isLoading = false; //에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.err = action.payload; //catch된 error객체를 state.error에 넣음
    }
  }
})

export const { addMusic } = counterSlice.actions
export default counterSlice.reducer