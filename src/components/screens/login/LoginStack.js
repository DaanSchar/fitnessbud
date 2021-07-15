import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import { color, getColor } from "../../../../assets/colors/color";
import { StyleSheet, View } from "react-native";


const Stack = createStackNavigator();

const LoginStack = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='SignInScreen' component={SignInScreen}/>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>

      </Stack.Navigator>
    </View>

  )
}

export default LoginStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().primary,
  },
})


