import { connect } from "react-redux";
import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { getColor } from "../../../../../../../assets/colors/color";
import { DarkButton } from "../../../../../menu/DarkButton";
import ExerciseCard from "./components/ExerciseCard";
import * as activeWorkoutActions from "../../../../../../store/workout/currentworkout/activeWorkoutActions";

const PostWorkout = ({ navigation, activeWorkout, }) => {
  return (
    <View style={styles.container}>

      {/* title*/}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {  marginTop: 20 }]}>Great Job!</Text>
        <Text style={[styles.title, {  marginTop: 10, fontFamily: 'DMSans-Regular'}]}> You've Finished { activeWorkout.workout.name } </Text>
      </View>

      <View style={styles.resultContainer}>
        <Text style={[styles.title, { fontSize: 25, fontFamily: 'DMSans-Regular' , borderBottomWidth: 1.5, borderColor: getColor().border }]}> Result</Text>

        <FlatList
        data={activeWorkout.exercises} keyExtractor={(exercise) => exercise.id} renderItem={ ({ item } ) => (
          <ExerciseCard exercise={item}/>
        )} />

      </View>

      <View style={styles.doneButton}>
        <TouchableOpacity onPress={() => { navigation.navigate("WorkoutSelector"); }} style={{alignSelf: 'center', marginTop: 30}}>
          <DarkButton text={'Done'} size={28}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  navigation: ownProps.navigation,
  activeWorkout: state.activeWorkout,
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    resetActiveWorkout: () => dispatch(activeWorkoutActions.resetWorkout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostWorkout)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
    paddingHorizontal: 20
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
  },
  resultContainer: {
    marginTop: 30,
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 20,
    borderColor: getColor().border,
  },
  doneButton: {

  },
})
