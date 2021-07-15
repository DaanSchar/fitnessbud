export const addTitle = (title) => {
  return { type: 'ADD_TITLE', title: title, }
}

export const addExercise = (id, quantity) => {
  return { type: 'ADD_EXERCISE', id: id, quantity: quantity, }
}
