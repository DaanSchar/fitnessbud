import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";
import Profile from "../screens/profile/Profile";
import Settings from "../screens/settings/Settings";
import Home from "../screens/home/Home";

const Drawer = createDrawerNavigator();


const AppNavigator = () => {
  return(
      <Drawer.Navigator initialRouteName='Home' drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Profile' component={Profile}/>
        <Drawer.Screen name='Settings' component={Settings}/>
      </Drawer.Navigator>
  );
}

export default (AppNavigator);
