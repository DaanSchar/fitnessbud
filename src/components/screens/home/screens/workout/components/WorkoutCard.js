import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { getColor } from "../../../../../../../assets/colors/color";
import React from "react";
import { workoutData } from "../../../../../../../assets/data/workoutData";
import { exercisesData } from "../../../../../../../assets/data/exercisesData";

const WorkOutCard = (props) => {

  const workout = props.workout;
  const exercises = workout.exercises;
  const name = workout.name

  const getNameOfExercise = (id) => {
    for (let i = 0; i < exercisesData.length; i++)
      if (exercisesData[i].id === id)
        return exercisesData[i].name
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>

        {/* Card Title*/}
        <Text style={styles.workoutTitle}>{ name }</Text>

        {/* Edit Button */}
        <TouchableOpacity>
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
  )
}

export default WorkOutCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1.5,
    borderColor: getColor().border,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
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
  }
})
