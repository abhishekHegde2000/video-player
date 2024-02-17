// src/redux/videoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: { title: "", description: "" },
  reducers: {
    setVideoData: (state, action) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.src = action.payload.src;
    },
  },
});

export const { setVideoData } = videoSlice.actions;

export default videoSlice.reducer;
