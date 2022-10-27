import {combineReducers, createStore, compose, applyMiddleware} from "redux";

import {apiCallStatusReducer, authorsReducer, courseReducer} from "./reducers";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    courses: courseReducer,
    authors: authorsReducer,
    apiCallsInProgress: apiCallStatusReducer
});

export default function configureStore(initialState) {
    const composeEnhancers = compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}


