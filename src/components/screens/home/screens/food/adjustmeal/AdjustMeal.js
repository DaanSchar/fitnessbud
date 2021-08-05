import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { getColor } from "../../../../../../../assets/colors/color";
import BackButton from "../../../../../menu/BackButton";
import ScanButton from "../mealcreator/components/ScanButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";

const AdjustMeal = ({ route, navigation }) => {

  let { item } = route.params;
  let [nutrients, setNutrients] = useState([item.protein, item.fat, item.carbohydrates]);
  let [max, setMax] = useState(0);
  let maxWidth = 200;

  function deterMax() {
    let max = -1;
    for (let i = 0; i < nutrients.length; i++) {
      if (nutrients[i] > max) {
        max = nutrients[i];
      }
    }
    setMax(max);
  }

  function changeText(text) {
    if (text.length < 1)
      return;

    let nut = [...nutrients];
    for (let i = 0; i < nut.length; i++) {
      nut[i] = nut[i] * parseInt(text);
    }
    setNutrients(nut)
  }

  return (
  <View style={styles.container}>

    <View style={styles.topMenu}>
      {/* back button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackButton/>
      </TouchableOpacity>
    </View>

    <View style={styles.content}>
      <Text style={styles.title}>{ item.name }</Text>


      <View style={styles.searchWrapper}>
        <Text style={styles.text}>Portion Size: </Text>
        <TextInput keyboardType='numeric' style={[styles.text, { width: 50, fontSize: 22 }]} onChangeText={text => changeText(text)}>100</TextInput>
        <Text style={styles.text}> g </Text>
      </View>

      <View style={styles.infoWrapper}>

        <Text style={[styles.text, { marginBottom: 20,}]}>Calories: { item.kcal } kcal</Text>

        <Text style={styles.text}>Protein: { item.protein}g </Text>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[getColor().secondary ,getColor().primary]} style={[styles.bar, { width: maxWidth * item.protein/max}]}></LinearGradient>

        <Text style={styles.text}>Fat: { item.fat}g </Text>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[getColor().secondary ,getColor().primary]} style={[styles.bar, { width: maxWidth * item.fat/max}]}></LinearGradient>

        <Text style={styles.text}>Carbs: { item.carbohydrates}g </Text>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[getColor().secondary ,getColor().primary]} style={[styles.bar, { width: maxWidth * item.carbohydrates/max}]}></LinearGradient>
      </View>
    </View>
  </View>
  )
}

export default (AdjustMeal);

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
    paddingVertical: 5,
    borderColor: getColor().border,
  },
  title: {
    fontSize: 35,
    alignSelf: 'center',
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
    marginTop: 20,
  },

  content: {
    marginHorizontal: 20,
  },


  searchWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: getColor().border,
  },

  text: {
    fontSize: 20,
    fontFamily: 'DMSans-Regular',
    color: getColor().textDark,
  },

  bar: {
    width: 20,
    height: 20,
    backgroundColor: getColor().secondary,
    borderRadius: 20,
  },
  infoWrapper: {
    marginTop: 20,
  }

})
