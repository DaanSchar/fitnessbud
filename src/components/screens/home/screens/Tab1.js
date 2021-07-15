import { ScrollView, Text, View, StyleSheet } from "react-native";
import React from "react";
import { color, getColor } from "../../../../../assets/colors/color";
import TopMenu from "../../../menu/TopMenu";

const Tab1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopMenu navigation={navigation}/>
      <Text style={styles.title}>Tab 1</Text>
    </View>
  )
}

export default Tab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 35,
    alignSelf: 'center',
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
  }
})
