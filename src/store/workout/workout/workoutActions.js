export const addWorkout = (workout) => {
  return { type: 'ADD_WORKOUT', workout: workout,}
}

export const deleteWorkout = (workout) => {
  return { type: 'DELETE_WORKOUT', workout: workout,}
}
