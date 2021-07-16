export const addWorkout = (name, exercises) => {
  return { type: 'ADD_WORKOUT', name: name, exercises: exercises}
}
