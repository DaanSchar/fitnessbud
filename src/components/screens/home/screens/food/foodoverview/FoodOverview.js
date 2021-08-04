import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { color, getColor } from "../../../../../../../assets/colors/color";
import TopMenu from "../../../../../menu/TopMenu";
import DayOverview from "./components/DayOverview";
import MacroTracker from "./components/MacroTracker";

const FoodOverview = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopMenu navigation={navigation}/>

      <View style={styles.content}>

        {/* Today's Meals*/}
        <DayOverview/>

        {/* Macro's */}
        <View style={styles.macroTracker}>
          <MacroTracker/>
        </View>


        {/* Button */}
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('MealCreator')}>
            <View style={styles.addMealButton}>
              <Text style={{ fontSize: 20,  alignSelf: 'center', fontFamily: 'DMSans-Bold', color: getColor().background}}>Add Meal</Text>
            </View>
          </TouchableOpacity>
        </View>


      </View>
    </View>
  )
}

export default FoodOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
  },
  content: {
    marginTop: 30,
    flex: 1,
  },
  macroTracker: {
    marginTop: 15,
    flex: 0,
  },
  addMealButton: {
    marginTop: 30,
    backgroundColor: getColor().primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  title: {
    fontSize: 35,
    alignSelf: 'center',
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
  }
})
