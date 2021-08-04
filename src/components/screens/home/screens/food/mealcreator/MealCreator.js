import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { getColor } from "../../../../../../../assets/colors/color";
import BackButton from "../../../../../menu/BackButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ScanButton from "./components/ScanButton";

const MealCreator = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>

        {/* back button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <ScanButton/>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.searchWrapper}>
          <MaterialIcons name={'search'} color={getColor().primary} size={20}/>
          <TextInput placeholder={'search for food'}/>
        </View>
      </View>

      <Text>adding meal!</Text>
    </View>
  )
}

export default (MealCreator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1.5,
    paddingHorizontal: 10,
    paddingTop: 5,
    borderColor: getColor().border,
  },
  content: {
  },

  // searchbar
  searchWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: getColor().border,
    marginHorizontal: 20,
    height: 40,
  },
})
