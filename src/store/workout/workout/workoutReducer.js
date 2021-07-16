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

  let workout = action.workout

  if (workout.id === '-1')
    return addNewWorkout(state, workout);
  else {
    return replaceWorkout(state, workout)
  }


  return { ...state, workouts: [...state.workouts, workout]};
}

function addNewWorkout(state, workout) {
  let newId = parseInt(state.workouts[state.workouts.length - 1].id) + 1;
  let id = newId.toString()

  return { ...state, workouts: [...state.workouts, { ...workout, id: id }]};
}

function replaceWorkout(state, workout) {

  state = {
    ...state,
    workouts: state.workouts.filter(function(item) {
      return item.id !== workout.id
    }),
  }

  return {...state, workouts: [...state.workouts, workout]};
}

