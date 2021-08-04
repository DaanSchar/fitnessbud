import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { getColor } from "../../../../../../../../assets/colors/color";

const MealCard = ({ item }) => {

  let meal = item.meal;
  let totalKCal = meal.kcal * item.portionSize;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{meal.name}</Text>
      <Text style={styles.title}>{totalKCal} kcal</Text>
    </View>
  )
}

export default (MealCard);


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 5,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'DMSans-Regular',
    color: getColor().textDark,
  },
})

