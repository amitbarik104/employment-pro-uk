import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import authReducer from "../reducers/auth.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    auth: authReducer
}), composeEnhancers(applyMiddleware(thunk, logger)))

export {store}