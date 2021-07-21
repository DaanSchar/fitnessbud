import React from 'react';
import { StyleSheet, View } from "react-native";
import { getColor } from "../../../assets/colors/color";
import WorkoutSelector from "../screens/home/screens/workout/workoutSelector/WorkoutSelector";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutCreator from "../screens/home/screens/workout/WorkoutCreator/WorkoutCreator";
import ExerciseSelector from "../screens/home/screens/workout/ExerciseSelector/ExerciseSelector";
import Workout from "../screens/home/screens/workout/Workout/Workout";
import PostWorkout from "../screens/home/screens/workout/postworkout/PostWorkout";


const Stack = createStackNavigator();

const LoginStack = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='WorkoutSelector' component={WorkoutSelector}/>
        <Stack.Screen name='WorkoutCreator' component={WorkoutCreator}/>
        <Stack.Screen name='ExerciseSelector' component={ExerciseSelector}/>
        <Stack.Screen name='Workout' component={Workout}/>
        <Stack.Screen name='PostWorkout' component={PostWorkout}/>
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
