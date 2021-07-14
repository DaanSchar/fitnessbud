import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { color, getColor } from "../../../assets/colors/color";
import { StyleSheet, Text, View } from "react-native";
import Home from "../screens/home/Home";
import Tab1 from "../screens/home/Tab1";
import Tab2 from "../screens/home/Tab2";

const Tab = createBottomTabNavigator();

const TabNav = () => {

  const tabScreen = (name, component, iconName) => {
    return (
      <Tab.Screen
        name={name}
        component={component}
        options={{tabBarLabel: name,
          tabBarIcon: ({ focused }) =>
          (
            <View style={styles.itemContainer}>
              <View style={[styles.item, (focused ? styles.selectedItem : null)]}>
                <MaterialIcons name={iconName} size={26} color={focused ? getColor().primary : getColor().tertiary}/>
              </View>
              {focused ? <Text style={styles.itemText}>{name}</Text> : null}
            </View>
          )
        }}
      />
    )
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.container
      }}
    >
      { tabScreen('Home', Home, 'home')}
      { tabScreen('Tab1', Tab1, 'bar-chart')}
      { tabScreen('Tab2', Tab2, 'add')}
    </Tab.Navigator>
  )
}

export default TabNav;


const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1.5,
    borderTopColor: getColor().border,
    flexDirection: 'column',
    backgroundColor: getColor().background,
    justifyContent: 'space-around',
    height: 60,
  },
  item: {
    paddingTop: 8,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
  itemContainer: {
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {

  },
  itemText: {
    color: getColor().primary,
  }
})

