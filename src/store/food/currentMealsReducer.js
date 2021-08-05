import { mealData } from "../../../assets/data/food/mealData";

const initialState = mealData

export const currentMealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MEAL':
      return addMeal(state, action);
  }
  return state;
}

function addMeal(state, action) {
  let meals = [...state.meals];
  let newMeal = {meal: action.meal, portionSize: action.portionSize}

  meals = [...meals, newMeal];

  return {
    ...state,
    meals: meals,
  }
}
