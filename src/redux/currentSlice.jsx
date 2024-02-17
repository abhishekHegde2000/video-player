// src/redux/CurrentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
  name: "current",
  initialState: {
    videoCurrent: null,
    progressCurrent: null,
    bufferCurrent: null,
  },
  reducers: {
    setVideoCurrent: (state, action) => {
      state.videoCurrent = action.payload;
    },
    setProgressCurrent: (state, action) => {
      state.progressCurrent = action.payload;
    },
    setBufferCurrent: (state, action) => {
      state.bufferCurrent = action.payload;
    },
  },
});

export const { setVideoCurrent, setProgressCurrent, setBufferCurrent } =
  currentSlice.actions;

export default currentSlice.reducer;
