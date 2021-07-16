export const addTitle = (title) => {
  return { type: 'ADD_TITLE', title: title, }
}

export const addExercise = (exercise) => {
  return { type: 'ADD_EXERCISE', exercise: exercise, }
}

export const incrementExerciseQuantity = (exercise) => {
  return { type: 'INCREMENT_EXERCISE_QUANTITY', exercise: exercise}
}

export const decrementExerciseQuantity = (exercise) => {
  return { type: 'DECREMENT_EXERCISE_QUANTITY', exercise: exercise}
}
