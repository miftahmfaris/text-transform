import { createStore, applyMiddleware } from "redux";
import character from "./reducers";
import logger from "redux-logger";

export default createStore(character, applyMiddleware(logger));
