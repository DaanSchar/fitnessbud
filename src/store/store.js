import { combineReducers, createStore } from "redux";
import { loginReducer } from "./login/loginReducer";


const rootReducer = combineReducers({
  loginState: loginReducer,
})

const store = createStore(rootReducer);
export default store;
