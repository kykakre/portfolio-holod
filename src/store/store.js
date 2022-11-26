import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import bannerReducer from "./slice/bannerSlice.js";
import progectReducer from "./slice/progectSlice.js"
import stapReducer from "./slice/stapSlice.js"
const rootReducer = combineReducers({
    bannerReducer,
    progectReducer,
    stapReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    });
};