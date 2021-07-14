import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { DrawerContent } from "./DrawerContent";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();


const AppNavigator = () => {
  return(
      <Drawer.Navigator initialRouteName='Home' drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Profile' component={Profile}/>
      </Drawer.Navigator>
  );
}

export default (AppNavigator);
