import { ScrollView, Text, View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { color, getColor } from "../../../../assets/colors/color";
import TopMenu from "../../menu/TopMenu";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopMenu navigation={navigation}/>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Settings</Text>
      </View>
    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 35,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
  }
})
