// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import currentReducer from "./currentSlice";

const store = configureStore({
  reducer: {
    video: videoReducer,
    current: currentReducer,
  },
});

export default store;
