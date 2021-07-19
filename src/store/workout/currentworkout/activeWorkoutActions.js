export const initActiveWorkout = (workout) => {
  return {
    type: 'INIT_ACTIVE_WORKOUT',
    workout: workout,
  }
}

export const addWeightToSet = (exercise, set, weight) => {
  return {
    type: 'ADD_WEIGHT_TO_SET',
    exercise: exercise,
    set: set,
    weight: weight
  }
}

export const addRepsToSet = (exercise, set, reps) => {
  return {
    type: 'ADD_REPS_TO_SET',
    exercise: exercise,
    set: set,
    reps: reps,
  }
}
