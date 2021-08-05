import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { getColor } from "../../../../../../../../assets/colors/color";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

const MealCard = ({ item }) => {
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.name}>{ item.name }</Text>
        <MaterialIcons name={'restaurant'} size={15} color={getColor().primary}/>
      </View>

      <View style={styles.content}>

        <View style={styles.leftWrapper}>
          <Text>Calories: { item.kcal } kcal</Text>
          <Text>Protein: { item.protein}g </Text>
        </View>

        <View style={styles.rightWrapper}>
          <Text>Fat: { item.fat}g </Text>
          <Text>Carbs: { item.carbohydrates}g </Text>
        </View>

      </View>
    </View>
  )
}

export default (MealCard);

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: getColor().border,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  content: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  leftWrapper: {},
  rightWrapper: {},

  // text
  name: {
    fontSize: 20,
    marginHorizontal: 10,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
  }
})
