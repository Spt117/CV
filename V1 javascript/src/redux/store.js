import { configureStore } from "@reduxjs/toolkit";

// state initial
const initialState = {
    sites: [],
};

// reducer
export const sitesReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.sites;
    }
    if (action.type === "mySites") {
        return action.value;
    }
    return state;
};

// action
export const mySites = (sites) => ({
    type: "mySites",
    value: sites,
});

// store
export const store = configureStore({
    reducer: {
        sites: sitesReducer,
    },
});

// store.subscribe(() => {
//     console.log(store.getState());
// });
