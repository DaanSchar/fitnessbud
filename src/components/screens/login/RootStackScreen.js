import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import { color, getColor } from "../../../../assets/colors/color";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, View } from "react-native";


const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='SplashScreen' component={SplashScreen}/>
        <RootStack.Screen name='SignInScreen' component={SignInScreen}/>
        <RootStack.Screen name='SignUpScreen' component={SignUpScreen}/>

      </RootStack.Navigator>
    </View>

  )
}

export default RootStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().primary,
  },
})


