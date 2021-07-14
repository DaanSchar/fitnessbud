import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Drawer, Avatar, Switch, TouchableRipple } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProfilePicture from "./ProfilePicture";
import { color, getColor } from "../../../assets/colors/color";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";


export function DrawerContent(props) {

  function getUsername() {
    return 'Person Personsson';
  }

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleDarkTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  function onClickLogout() {
    console.log('logging out');
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>

        {/* User Info Section*/}
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <ProfilePicture/>
            <Text style={styles.usernameTitle}>{ getUsername() }</Text>
          </View>
        </View>

        {/* Upper Drawer Section */}
        <Drawer.Section style={styles.topDrawerSection}>

          {/* Home Drawer */}
          <DrawerItem
            label='Home'
            onPress={() => props.navigation.navigate('Home')}
            icon={({color, size}) => (
              <Feather name={'home'} color={color} size={size}/>
            )}/>

          {/* Profile Drawer */}
          <DrawerItem
            label='Profile'
            onPress={() => props.navigation.navigate('Profile')}
            icon={({color, size}) => (
              <Feather name={'user'} color={color} size={size}/>
            )}/>

          {/* settings Drawer */}
          <DrawerItem
            label='Settings'
            onPress={() => props.navigation.navigate('Settings')}
            icon={({color, size}) => (
              <Feather name={'settings'} color={color} size={size}/>
            )}/>

        </Drawer.Section>

        <Drawer.Section title='Preferences' style={styles.middleDrawerSection}>
          <TouchableRipple onPress={() => toggleDarkTheme()}>
            <View style={styles.switchContainer}>
              <Text>Dark Theme</Text>
              <View pointerEvents='none'>
                <Switch color={color.primary} value={isDarkTheme}/>
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>

      </DrawerContentScrollView>

      {/* Bottom Drawer Section */}
      <Drawer.Section style={styles.bottomDrawerSection}>

        {/* Logout Drawer*/}
        <DrawerItem
          label='Sign Out'
          onPress={() => onClickLogout()}
          icon={({color, size}) => (
          <MaterialIcons name={'exit-to-app'} color={color} size={size}/>
          )}/>

      </Drawer.Section>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  usernameTitle: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 17,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
    width: '70%',
  },
  drawerContent: {
  },

  // Top Drawer Section
  topDrawerSection: {
    borderBottomWidth: 1,
    borderColor: getColor().border,
  },

  // Middle Drawer Section
  middleDrawerSection: {
    borderBottomWidth: 1,
    borderColor: getColor().border,
  },
  middleTitle: {
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
    width: '70%',
  },
  switchContainer: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 17,
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  // Bottom Drawer Section
  bottomDrawerSection: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: getColor().border,
  },
})
