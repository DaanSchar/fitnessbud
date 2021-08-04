import React from 'react';
import { getColor, palette } from "../../../../../../../../assets/colors/color";
import { View, StyleSheet, Text } from "react-native";
import { Dimensions } from 'react-native';
import { mealData } from "../../../../../../../../assets/data/food/mealData";

const boxWidth = (Dimensions.get('window').width - 40)/4;

const MacroTracker = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.kcal]}>
        <Text style={styles.boxTitle}>kcal</Text>
        <Text style={styles.boxTotalTitle}>{mealData.totalKcal}</Text>
      </View>

      <View style={[styles.box, styles.protein]}>
        <Text style={styles.boxTitle}>Protein</Text>
        <Text style={styles.boxTotalTitle}>{mealData.totalProtein}g</Text>
      </View>

      <View style={[styles.box, styles.fat]}>
        <Text style={styles.boxTitle}>Fat</Text>
        <Text style={styles.boxTotalTitle}>{mealData.totalFat}g</Text>
      </View>

      <View style={[styles.box, styles.carbohydrates]}>
        <Text style={styles.boxTitle}>Carbs</Text>
        <Text style={styles.boxTotalTitle}>{mealData.totalCarbohydrates}g</Text>
      </View>

    </View>
  )
}

export default (MacroTracker);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: getColor().border,
    marginHorizontal: 20,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  box: {
    width: boxWidth,
    height: 50,
  },
  boxTitle: {
    marginTop: 4,
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: 'DMSans-Regular',
    color: getColor().background,
  },
  boxTotalTitle: {
    marginTop: 0,
    fontSize: 17,
    alignSelf: 'center',
    fontFamily: 'DMSans-Bold',
    color: getColor().background,
  },

  kcal: {
    backgroundColor: palette.a,
  },
  protein: {
    backgroundColor: palette.b,
  },
  fat: {
    backgroundColor: palette.c,
  },
  carbohydrates: {
    backgroundColor: palette.d,
  },
})
