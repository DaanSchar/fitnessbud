import React from 'react';
import { View, StyleSheet, Text, FlatList } from "react-native";
import { getColor } from "../../../../../../../../assets/colors/color";
import MealCard from "./MealCard";
import { connect } from "react-redux";

const DayOverview = ({ meals }) => {

  const mealCard = ({ item }) => {
    return (
      <MealCard item={item}/>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { paddingVertical: 10,}]}> Today's Meals:</Text>

      <View style={{ flex: 1 }}>
        <FlatList data={meals} renderItem={mealCard} keyExtractor={((item, index) => index)}/>
      </View>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  meals: state.currentMeals.meals,
})

export default connect(mapStateToProps)(DayOverview);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderWidth: 1.5,
    borderColor: getColor().border,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingBottom: 10,
  },

  title: {
    fontSize: 25,
    alignSelf: 'center',
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
  },
})
