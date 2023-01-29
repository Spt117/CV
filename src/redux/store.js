import { configureStore } from "@reduxjs/toolkit";
import { sitesReducer, modeReducer } from "./reducers.js";

export const store = configureStore({
    reducer: {
        sites: sitesReducer,
        mode: modeReducer,
    },
});

store.subscribe(() => {
    console.log(store.getState());
});
