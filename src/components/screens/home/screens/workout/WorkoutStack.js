import React from 'react';
import { StyleSheet, View } from "react-native";
import { getColor } from "../../../../../../assets/colors/color";
import Workout from "./Workout";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutCreator from "./WorkoutCreator";
import ExerciseList from "./ExerciseList";


const Stack = createStackNavigator();

const LoginStack = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Workout' component={Workout}/>
        <Stack.Screen name='WorkoutCreator' component={WorkoutCreator}/>
        <Stack.Screen name='ExerciseList' component={ExerciseList}/>

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
