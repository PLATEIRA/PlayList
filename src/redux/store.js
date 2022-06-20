import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import music from './reducers/musicReducer';
import artist from './reducers/artistReducer';

let Store;

Store = createStore(
    combineReducers({
        music,
        artist,
    }),
    applyMiddleware(thunk, logger)
);

export default Store;