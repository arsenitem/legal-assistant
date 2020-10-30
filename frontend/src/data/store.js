import authReducer from "./auth-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    loginPage: authReducer
})
let store = createStore(reducers)

export default store;