import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { color, getColor } from "../../../assets/colors/color";
import React from "react";

const TopMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={getColor().background} barStyle={'dark-content'}/>

      {/* Menu Button*/}
      <TouchableOpacity style={{width: 30}} onPress={() => navigation.openDrawer()}>
          <Feather name='menu' size={30} color={getColor().primary}/>
      </TouchableOpacity>

    </View>
  )
}

export default (TopMenu);

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: getColor().background,
    borderBottomWidth: 1.5,
    borderColor: getColor().border,
  },
})
