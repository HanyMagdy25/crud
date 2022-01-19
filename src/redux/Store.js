import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import reduxThunk from 'redux-thunk';
import rootReducer from "./root-reducer";

const middleweres = [reduxThunk] //you have to write this first 

if(process.env.NODE_ENV === "development"){
    middleweres.push(logger)
};

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(rootReducer, applyMiddleware(...middleweres));

export default store;