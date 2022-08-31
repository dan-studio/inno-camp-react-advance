import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

//db에서 데이터 가져옴
export const __getComment = createAsyncThunk(
  "comment/GET_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comment");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// db에 데이터를 넣음
export const __addComment = createAsyncThunk(
  "comment/ADD_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/comment", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//db내 데이터 삭제
export const __deleteComment = createAsyncThunk(
  "comment/DELETE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(
        `http://localhost:3001/comment/${payload}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//데이터 수정
export const __updateComment = createAsyncThunk(
  "comment/UPDATE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `http://localhost:3001/comment/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateCommentLike = createAsyncThunk(
  "comment/UPDATE_COMMENTLIKE",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `http://localhost:3001/comment/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // TODO getComment Thunk
    [__getComment.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.comment = action.payload; // Store에 있는 list에 서버에서 가져온 music를 넣음
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣음
    },
    // TODO addComment Thunk
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // TODO deleteComment Thunk
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = state.comment.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // TODO updateComment Thunk
    [__updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = state.comment.map((comment) =>
        comment.id === action.payload.id ? { ...action.payload } : comment
      );
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // TODO updateCommentLike Thunk
    [__updateCommentLike.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateCommentLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = state.comment.map((comment) =>
        comment.id === action.payload.id ? { ...action.payload } : comment
      );
    },
    [__updateCommentLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default comments.reducer;
