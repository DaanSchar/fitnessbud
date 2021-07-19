import { combineReducers, createStore } from "redux";
import { loginReducer } from "./login/loginReducer";
import { workoutCreatorReducer } from "./workout/workoutcreator/workoutCreaterReducer";
import { workoutReducer } from "./workout/workoutselector/workoutReducer";
import { activeWorkoutReducer } from "./workout/currentworkout/activeWorkoutReducer";


const rootReducer = combineReducers({
  loginState: loginReducer,
  workoutCreator: workoutCreatorReducer,
  workout: workoutReducer,
  activeWorkout: activeWorkoutReducer,
})

const store = createStore(rootReducer);
export default store;
