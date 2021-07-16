const initialState = {
  name: '',
  exercises: [],
}

export const workoutCreatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return addExercise(state, action);
    case 'ADD_TITLE':
      return addTitle(state, action);
    case 'INCREMENT_EXERCISE_QUANTITY':
      return incrementExerciseQuantity(state, action);
    case 'DECREMENT_EXERCISE_QUANTITY':
      return decrementExerciseQuantity(state, action);
  }
  return state;
}

function addExercise(state, action) {

  for ( let i =0; i < state.exercises.length; i++ )
    if ( state.exercises[i].id === action.exercise.id)
      return state;

  let exercise = { ...action.exercise, quantity: 1 }

  return {
    ...state,
    exercises: [...state.exercises, exercise],
  }
}

function addTitle(state, action) {
  return {
    ...state,
    name: action.name,
  }
}

function incrementExerciseQuantity(state, action) {
  let exercises = state.exercises;

  for ( let i =0; i < exercises.length; i++ )
    if ( exercises[i].id === action.exercise.id)
      exercises[i].quantity += 1;
  return { ...state, exercises: [...exercises] };
}

function decrementExerciseQuantity(state, action) {
  let exercises = state.exercises;

  for ( let i =0; i < exercises.length; i++ )
    if ( exercises[i].id === action.exercise.id)
      if ( !(exercises[i].quantity <= 1))
        exercises[i].quantity -= 1;
  return { ...state, exercises: [...exercises] };
}
