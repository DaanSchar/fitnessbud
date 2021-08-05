import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import React from 'react';
import { foodData } from "../../../../../../../../assets/data/food/foodData";
import MealCard from "./MealCard";
import { connect } from "react-redux";
import * as activeWorkoutActions from "../../../../../../../store/workout/currentworkout/activeWorkoutActions";
import * as currentMealsActions from "../../../../../../../store/food/currentMealsActions";

const MealCardList = ({ navigation, addMeal }) => {

  function onCardClick(item) {
    //addMeal(item, 2.5)
    navigation.navigate('AdjustMeal', { item })
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onCardClick(item)}>
        <MealCard item={item}/>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList data={foodData} keyExtractor={food => food.id} renderItem={renderItem}/>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  navigation: ownProps.navigation,
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    addMeal: (meal, portionSize) => dispatch(currentMealsActions.addMeal(meal, portionSize)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealCardList);


const styles = StyleSheet.create({
  container: {

  }
})
