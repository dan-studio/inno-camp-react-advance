import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

//db에서 데이터 가져옴
export const __getMusic = createAsyncThunk(
  "music/GET_MUSIC",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/list");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// db에 데이터를 넣음
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
);
//db내 데이터 삭제
export const __deleteMusic = createAsyncThunk(
  "music/DELETE_MUSIC",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/list/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//db내 데이터 업데이트
export const __updateMusic = createAsyncThunk(
  "music/UPDATE_MUSIC",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `http://localhost:3001/list/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 좋아요 토글
export const __updateLike = createAsyncThunk(
  "music/UPDATE_LIKE",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `http://localhost:3001/list/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postComment = createAsyncThunk(
  "music/postComment",
  async (newComment) => {
    const response = await axios.post("http://localhost:3001/list", newComment);
  }
);

const musics = createSlice({
  name: "musics",
  initialState,
  reducers: {},
  extraReducers: {
    // TODO getMusic Thunk
    [__getMusic.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__getMusic.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.list = action.payload; // Store에 있는 list에 서버에서 가져온 music를 넣음
    },
    [__getMusic.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣음
    },
    // TODO addMusic Thunk
    [__addMusic.pending]: (state) => {
      state.isLoading = true;
    },
    [__addMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list.push(action.payload);
    },
    [__addMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // TODO deleteMusic Thunk
    [__deleteMusic.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = state.list.filter((music) => music.id !== action.payload);
    },
    [__deleteMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // TODO updateMusic Thunk
    [__updateMusic.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = state.list.map((music) =>
        music.id === action.payload.id ? { ...action.payload } : music
      );
    },
    [__updateMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // TODO updateLike Thunk
    [__updateLike.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = state.list.map((music) =>
        music.id === action.payload.id ? { ...action.payload } : music
      );
    },
    [__updateLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {} = musics.actions;
export default musics.reducer;
