import authReducer from "./auth-reducer";
import chatReducer from "./chat-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    loginPage: authReducer,
    assistantPage: chatReducer
})
let store = createStore(reducers)

export default store;