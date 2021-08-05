export const addMeal = (meal, portionSize) => {
  return { type: 'ADD_MEAL', meal: meal, portionSize: portionSize}
}
