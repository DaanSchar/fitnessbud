import React from 'react';
import { StyleSheet, View } from "react-native";
import { getColor } from "../../../../assets/colors/color";
import WorkoutSelector from "../../screens/home/screens/workout/workoutSelector/WorkoutSelector";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutCreator from "../../screens/home/screens/workout/WorkoutCreator/WorkoutCreator";
import ExerciseSelector from "../../screens/home/screens/workout/ExerciseSelector/ExerciseSelector";
import Workout from "../../screens/home/screens/workout/Workout/Workout";
import PostWorkout from "../../screens/home/screens/workout/postworkout/PostWorkout";
import FoodOverview from "../../screens/home/screens/food/foodoverview/FoodOverview";
import MealCreator from "../../screens/home/screens/food/mealcreator/MealCreator";


const Stack = createStackNavigator();

const LoginStack = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='FoodOverview' component={FoodOverview}/>
        <Stack.Screen name='MealCreator' component={MealCreator}/>
      </Stack.Navigator>
    </View>

  )
}

export default LoginStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
  },
})
