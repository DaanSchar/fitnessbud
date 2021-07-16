import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import { getColor } from "../../../../../../../assets/colors/color";
import { connect } from "react-redux";
import * as workoutCreatorActions from "../../../../../../store/workout/workoutcreator/workoutCreatorActions";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ExerciseCard = ({exercise, exercises, incrementExerciseQuantity, decrementExerciseQuantity, deleteExercise,}) => {

  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
    });
    return (
      <View style={styles.swipeLeftContainer}>
        <TouchableOpacity onPress={() => deleteExercise(exercise)}>
          <Animated.View style={{ transform: [{ scale: scale }] }}>
            <View style={styles.delete}>
              <Feather name={'trash-2'} color={getColor().background} size={26} />
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>
    )
  }

  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
    });
    return (
      <View style={styles.swipeRightContainer}>
        <Animated.View style={{ transform: [{ scale: scale }] }}>

          <View style={styles.buttonContainer}>

            {/* add */}
            <TouchableOpacity onPress={() => {incrementExerciseQuantity(exercise)}}>
                <View style={styles.add}>
                  <Feather name={'plus'} color={getColor().background} size={30} />
                </View>
            </TouchableOpacity>

            {/* remove */}
            <TouchableOpacity onPress={() => {decrementExerciseQuantity(exercise)}}>
                <View style={styles.remove}>
                  <Feather name={'minus'} color={getColor().primary} size={30} />
                </View>
            </TouchableOpacity>

            </View>
        </Animated.View>
      </View>
    )
  }


  return (
    <Swipeable renderLeftActions={leftSwipe} renderRightActions={rightSwipe}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.name}>{ exercise.name }</Text>
          <View style={styles.quantityContainer}>

            {/* Button*/}


              <View style={styles.quantityHolder}>
                <Text style={styles.category}>{ exercise.quantity}  Set{ exercise.quantity > 1 ? 's' : ''}</Text>
              </View>



          </View>
        </View>
        <Text style={styles.category}>{ exercise.category }</Text>
      </View>
    </Swipeable>
  )
}

const mapStateToProps = (state, ownProps) => ({
  exercise: ownProps.exercise,
  exercises: state.workoutCreator.exercises,
})

const mapDispatchToProps =(dispatch) => {
  return {
    dispatch,
    incrementExerciseQuantity: (exercise) => dispatch(workoutCreatorActions.incrementExerciseQuantity(exercise)),
    decrementExerciseQuantity: (exercise) => dispatch(workoutCreatorActions.decrementExerciseQuantity(exercise)),
    deleteExercise: (exercise) => dispatch(workoutCreatorActions.deleteExercise(exercise)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCard);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: getColor().border,
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: getColor().background,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: getColor().border,
  },
  quantityButton: {
    flexDirection: 'row',
    borderColor: getColor().secondary,
    borderWidth: 1.5,
    borderRadius: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    color: getColor().primary,
  },
  plus: {
    backgroundColor: getColor().primary,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  quantityHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 82,
  },
  category: {
    fontFamily: 'DMSans-Medium',
    fontSize: 16,
    color: getColor().secondary,
  },

  // swipe
  swipeLeftContainer: {
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 25,
  },

  swipeRightContainer: {
    transform: [{rotate: '-180deg'}],
    marginTop: 10,
    paddingLeft: 25,
    justifyContent: 'center',

  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  delete: {
    backgroundColor: getColor().delete,
    borderRadius: 28,
    padding: 7,
  },
  add: {
    backgroundColor: getColor().primary,
    padding: 8,
    borderRadius: 30,
    marginRight: 3,
  },
  remove: {
    backgroundColor: getColor().white,
    padding: 6.5,
    borderWidth: 1.5,
    borderColor: getColor().primary,
    borderRadius: 30,
  }
})
