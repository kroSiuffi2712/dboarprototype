import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getComments } from "../api/comments";
import { initialState } from "../data/initialState/comments";
import { Status } from "../types/enum/status.enum";
import { IPaginatedComments } from "../types/interfaces/paginatedComments.interface";

export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async ({ page, limit }: IPaginatedComments) => {
    const response = await getComments(page, limit);
    return {
      data: response.data,
      totalPage: response.headers["x-total-count"],
    };
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    resetCommentState: (state) => {
      state.data = initialState.data;
      state.status = initialState.status;
      state.error = initialState.error;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = Status.loading;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = Status.succeeded;
        state.data = {
          comments: [...state.data.comments, ...action.payload.data],
          page: state.data.page + 1,
          totalPages: action.payload.totalPage,
        };
        state.error = initialState.error;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.data = initialState.data;
        state.status = Status.failed;
        state.error = {
          success: false,
          message: action.error.message || "No results were found",
        };
      });
  },
});
export const { resetCommentState } = commentsSlice.actions;
export default commentsSlice.reducer;
