import { combineReducers, createStore } from "redux";
import { loginReducer } from "./login/loginReducer";
import { workoutCreatorReducer } from "./workout/workoutcreator/workoutCreaterReducer";


const rootReducer = combineReducers({
  loginState: loginReducer,
  workoutCreator: workoutCreatorReducer,
})

const store = createStore(rootReducer);
export default store;
