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

  }
  return state;
}

function addExercise(state, action) {
  return {
    ...state,
    exercises: [...state.exercises, { id: action.id, quantity: action.quantity}],
  }
}

function addTitle(state, action) {
  return {
    ...state,
    name: action.name,
  }
}
