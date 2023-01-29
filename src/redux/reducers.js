const initialState = {
    sites: [],
    mode: "gradient",
};

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

export const modeReducer = (state, action) => {
    if (state === undefined) {
        // state initial
        return initialState.mode;
    }
    if (action.type === "myMode") return action.value;

    return state;
};
