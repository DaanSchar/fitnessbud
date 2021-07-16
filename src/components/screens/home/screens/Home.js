import { ScrollView, Text, View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { color, getColor } from "../../../../../assets/colors/color";
import TopMenu from "../../../menu/TopMenu";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={getColor().primary} barStyle={'dark-content'}/>
      <TopMenu navigation={navigation}/>
      <Text style={styles.title}>Home</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 35,
    flex: 0.6,
    alignSelf: 'center',
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
  }
})
