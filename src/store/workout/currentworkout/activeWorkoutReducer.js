const initialState = {
  workout: null,
  exercises: [],
  date: null,
}

export const activeWorkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_ACTIVE_WORKOUT':
      return initActiveWorkout(state, action);
    case 'ADD_WEIGHT_TO_SET':
      return addWeightToSet(state, action);
    case 'ADD_REPS_TO_SET':
      return addRepsToSet(state, action);
    case 'RESET_WORKOUT':
      return initialState;
  }
  return state;
}

function initActiveWorkout(state, action) {
  return {
    ...state,
    workout: action.workout,
    exercises: action.workout.exercises,
    date: new Date(),
  }
}

function addWeightToSet(state, action) {

  let exercise = action.exercise;
  let set = action.set;
  let weight = action.weight;

  let exercises = state.exercises;
  let index = indexOfExercise(state, exercise);


  if (exercises[index].weight === undefined)
    exercises[index].weight = new Array(exercise.quantity).fill(-1);

  exercises[index].weight[set-1] = weight;
  exercises[index].isFinishedWeight = isFinishedExercise(exercises[index].weight);

  return {
    ...state,
    exercises: exercises,
    isFinished: isFinishedWorkout(state, exercises) ? true : false,
  }

}

function addRepsToSet(state, action) {
  let exercise = action.exercise;
  let set = action.set ;
  let reps = action.reps;

  let exercises = state.exercises;
  let index = indexOfExercise(state, exercise);

  if (exercises[index].reps === undefined)
    exercises[index].reps = new Array(exercise.quantity).fill(-1);

  exercises[index].reps[set-1] = reps;
  exercises[index].isFinishedReps = isFinishedExercise(exercises[index].reps);

  return {
    ...state,
    exercises: exercises,
    isFinished: isFinishedWorkout(state, exercises) ? true : false,
  }
}

function indexOfExercise(state, exercise) {
  for (let i = 0; i < state.exercises.length; i++)
    if (exercise.id === state.exercises[i].id)
      return i;
  return -1;
}

function isFinishedExercise(array) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      return false;
    }
  }
  return true;
}

function isFinishedWorkout(state, exercises) {
  for (let i =0; i < exercises.length; i++)
    if (!(exercises[i].isFinishedReps && exercises[i].isFinishedWeight))
      return false;

  return true;
}
