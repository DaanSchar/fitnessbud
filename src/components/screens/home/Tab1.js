import { ScrollView, Text, View, StyleSheet } from "react-native";
import React from "react";
import { color, getColor } from "../../../../assets/colors/color";

const Tab1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 1</Text>
    </View>
  )
}

export default Tab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 35,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
  }
})
