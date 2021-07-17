import { combineReducers, createStore } from "redux";
import { loginReducer } from "./login/loginReducer";
import { workoutCreatorReducer } from "./workout/workoutcreator/workoutCreaterReducer";
import { workoutReducer } from "./workout/workoutselector/workoutReducer";


const rootReducer = combineReducers({
  loginState: loginReducer,
  workoutCreator: workoutCreatorReducer,
  workout: workoutReducer,
})

const store = createStore(rootReducer);
export default store;
