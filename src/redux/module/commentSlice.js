import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: [],
  isLoading: false,
  error: null
}

export const __getComment = createAsyncThunk(
  "music/GET_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comment");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // getComment Thunk
    [__getComment.fulfilled]: (state, action) => {
      state.comment = action.payload
    }
  }
})

export default comments.reducer;
