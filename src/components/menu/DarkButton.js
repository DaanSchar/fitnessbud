import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { getColor } from "../../../assets/colors/color";

export const DarkButton = (props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: props.size}]}>{ props.text }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: getColor().primary,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  text: {
    fontFamily: 'DMSans-Bold',
    color: getColor().background,
  }
})
