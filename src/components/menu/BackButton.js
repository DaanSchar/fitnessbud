import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { getColor } from "../../../assets/colors/color";

const BackButton = () => {
  return (
    <View style={styles.container}>
      <Feather name={'chevron-left'} color={getColor().secondary} size={22}/>
    </View>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderWidth: 1.5,
    borderColor: getColor().secondary,
    borderRadius: 10,
  },
})
