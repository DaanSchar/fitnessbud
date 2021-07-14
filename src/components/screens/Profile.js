import { ScrollView, Text, View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { color, getColor } from "../../../assets/colors/color";
import TopMenu from "../menu/TopMenu";

const Profile = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <TopMenu navigation={navigation}/>
        <Text style={styles.title}>Profile</Text>
      </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },

  title: {
    fontSize: 35,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
  }
})
