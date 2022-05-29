import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import commentsReducer from "./reducers/commentsReducer";
import infoReducer from "./reducers/infoReducer";
import postsReducer from "./reducers/postsReducer";

const reducers = combineReducers({
    info: infoReducer,
    posts: postsReducer,
    comments: commentsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;