import { combineReducers, createStore } from "redux";
import { loginReducer } from "./login/loginReducer";
import { workoutCreatorReducer } from "./workout/workoutcreator/workoutCreaterReducer";
import { workoutReducer } from "./workout/workoutselector/workoutReducer";
import { activeWorkoutReducer } from "./workout/currentworkout/activeWorkoutReducer";
import { currentMealsReducer } from "./food/currentMealsReducer";


const rootReducer = combineReducers({
  loginState: loginReducer,
  workoutCreator: workoutCreatorReducer,
  workout: workoutReducer,
  activeWorkout: activeWorkoutReducer,
  currentMeals: currentMealsReducer,
})

const store = createStore(rootReducer);
export default store;
