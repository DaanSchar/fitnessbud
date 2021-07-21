import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../../../../../menu/BackButton";
import React from 'react';
import { getColor } from "../../../../../../../assets/colors/color";
import ExerciseCard from "./components/ExerciseCard";
import { exercisesData } from "../../../../../../../assets/data/exercisesData";
import * as workoutCreatorActions from "../../../../../../store/workout/workoutcreator/workoutCreatorActions";
import { connect } from "react-redux";


const ExerciseSelector = ({ navigation, addExercise}) => {


  return (
    <View style={styles.container}>

      {/*Top Menu*/}
      <View style={styles.topMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('WorkoutCreator')}>
          <BackButton/>
        </TouchableOpacity>
      </View>


      <View style={styles.contentContainer}>

        {/* Title*/}
        <Text style={styles.Title}>Choose Exercise</Text>

        {/* Exercises list */}
        <View style={styles.listContainer}>
          <FlatList data={exercisesData} keyExtractor={(exercise) => exercise.id} renderItem={ ({ item } ) => (
            <TouchableOpacity onPress={() => {addExercise(item); navigation.goBack();}}>
              <ExerciseCard exercise={item}/>
            </TouchableOpacity>
          )} />
        </View>

      </View>

    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    addExercise: (exercise) => dispatch(workoutCreatorActions.addExercise(exercise)),
  }
}

export default connect(null, mapDispatchToProps)(ExerciseSelector);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
  },
  topMenu: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: getColor().background,
    borderBottomWidth: 1.5,
    borderColor: getColor().border,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  Title: {
    marginTop: 15,
    fontSize: 30,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
  },
})
