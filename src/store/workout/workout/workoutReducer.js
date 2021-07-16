const { workoutData } = require("../../../../assets/data/workoutData");
const initialState = { workouts: workoutData};

export const workoutReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_WORKOUT':
      return addWorkout(state, action);
  }
  return state;
}

function addWorkout(state, action) {

  let workout = {
    id: (parseInt(state.workouts[state.workouts.length-1].id)+1).toString,
    name: action.name,
    exercises: action.exercises,
  }

  return { ...state, workouts: [...state.workouts, workout]};
}

