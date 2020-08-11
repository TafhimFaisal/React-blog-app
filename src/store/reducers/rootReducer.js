import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    auth: authReducer,
    blogs: blogReducer
})

export default rootReducer
