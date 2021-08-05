import React from 'react';
import { StyleSheet, View } from "react-native";
import { getColor } from "../../../../assets/colors/color";
import { createStackNavigator } from "@react-navigation/stack";
import FoodOverview from "../../screens/home/screens/food/foodoverview/FoodOverview";
import MealCreator from "../../screens/home/screens/food/mealcreator/MealCreator";
import AdjustMeal from "../../screens/home/screens/food/adjustmeal/AdjustMeal";


const Stack = createStackNavigator();

const LoginStack = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='FoodOverview' component={FoodOverview}/>
        <Stack.Screen name='MealCreator' component={MealCreator}/>
        <Stack.Screen name='AdjustMeal' component={AdjustMeal}/>
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
