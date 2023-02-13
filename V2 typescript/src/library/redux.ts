import { AnyAction, CombinedState, configureStore, Reducer } from "@reduxjs/toolkit"
import { Site, State } from "./interfaces"

// state initial
const initialState: State = {
    sites: [],
}

// reducer
export const sitesReducer: Reducer<Site[], AnyAction> = (state: Site[] = initialState.sites, action: AnyAction): Site[] => {
    switch (action.type) {
        case "mySites":
            return action.value
        default:
            return state
    }
}

// action
export const mySites = (sites: Site[]): AnyAction => ({
    type: "mySites",
    value: sites,
})

// store
export const store = configureStore<CombinedState<State>>({
    reducer: {
        sites: sitesReducer,
    },
})

// store.subscribe(() => {
//     console.log(store.getState());
// });
