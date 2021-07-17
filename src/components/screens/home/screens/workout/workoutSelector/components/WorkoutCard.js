import { StyleSheet, Text, TouchableOpacity, View, Animated } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { getColor } from "../../../../../../../../assets/colors/color";
import React from "react";
import { exercisesData } from "../../../../../../../../assets/data/exercisesData";
import * as workoutCreatorActions from "../../../../../../../store/workout/workoutcreator/workoutCreatorActions";
import * as workoutActions from "../../../../../../../store/workout/workoutselector/workoutActions";
import { connect } from "react-redux";
import Swipeable from "react-native-gesture-handler/Swipeable";

const WorkOutCard = ({ navigation, workout, setWorkout, deleteWorkout}) => {

  const exercises = workout.exercises;
  const name = workout.name

  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
    });
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => deleteWorkout(workout)}>
          <Animated.View style={{ transform: [{ scale: scale }] }}>
            <View style={styles.item}>
              <Feather name={'trash-2'} color={getColor().background} size={26} />
            </View>
          </Animated.View>
        </TouchableOpacity>
      </View>
    )
  }

  const getNameOfExercise = (id) => {
    for (let i = 0; i < exercisesData.length; i++)
      if (exercisesData[i].id === id)
        return exercisesData[i].name
  }

  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <View style={styles.container}>
        <View style={styles.topContainer}>

          {/* Card Title*/}
          <Text numberOfLines={1} style={styles.workoutTitle}>{ name }</Text>

          {/* Edit Button */}
          <TouchableOpacity onPress={() => {navigation.navigate('WorkoutCreator'); setWorkout(workout)}}>
            <Feather name={'edit'} size={24} color={getColor().primary}/>
          </TouchableOpacity>

        </View>

        <View style={styles.exercisesContainContainer}>

          {/* Left half of list*/}
          <View style={styles.exercisesContainer}>
            {
              exercises.slice(0,5).map((exercise) => (
                <Text numberOfLines={1} key={exercise.id} style={styles.exerciseTitle}>{ exercise.quantity } x { getNameOfExercise(exercise.id)}</Text>
              ))
            }
          </View>

          {/* Right half of list*/}
          <View style={styles.exercisesContainer}>
          {
            exercises.slice(5,9).map((exercise) => (
              <Text numberOfLines={1} key={exercise.id} style={styles.exerciseTitle}>{ exercise.quantity } x { getNameOfExercise(exercise.id)}</Text>
            ))
          }
          { exercises.slice(9,10).length > 0 ? <Text style={styles.exerciseTitle}>...</Text> : null}
          </View>

        </View>
      </View>
    </Swipeable>
  )
}


const mapStateToProps = (state, ownProps) => ({
  navigation: ownProps.navigation,
  workout: ownProps.workout,
  exercises: state.workoutCreator.exercises,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addTitle: (title) => dispatch(workoutCreatorActions.addTitle(title)),
    addWorkout: (name, exercises) => dispatch(workoutActions.addWorkout(name, exercises)),
    setWorkout: (workout) => dispatch(workoutCreatorActions.set(workout)),
    deleteWorkout: (workout) => dispatch(workoutActions.deleteWorkout(workout)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkOutCard);


const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1.5,
    borderColor: getColor().border,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: getColor().background
  },
  exercisesContainer: {
    paddingHorizontal: 15,
    width: '50%',
  },
  exerciseTitle: {
    color: getColor().primary,
    fontSize: 12,
    fontFamily: 'DMSans-Medium',
    paddingVertical: 5,
  },
  workoutTitle: {
    paddingHorizontal: 15,
    fontSize: 25,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
    width: '90%',
  },
  exercisesContainContainer: {
    flexDirection: 'row',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: getColor().border,
  },

  // delete
  item: {
    backgroundColor: getColor().delete,
    borderRadius: 28,
    padding: 7,
  },
  itemContainer: {
    justifyContent: 'center',
    paddingLeft: 25,
    marginBottom: 20,
  },
})
