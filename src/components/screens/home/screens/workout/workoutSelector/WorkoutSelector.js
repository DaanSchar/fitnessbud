import { Text, View, StyleSheet, TouchableOpacity, FlatList, Animated} from "react-native";
import React from "react";
import { getColor } from "../../../../../../../assets/colors/color";
import Feather from "react-native-vector-icons/Feather";
import WorkOutCard from "./components/WorkoutCard";
import { workoutData } from "../../../../../../../assets/data/workoutData";
import TopMenu from "../../../../../menu/TopMenu";
import * as workoutCreatorActions from "../../../../../../store/workout/workoutcreator/workoutCreatorActions";
import * as workoutActions from "../../../../../../store/workout/workoutselector/workoutActions";
import { connect } from "react-redux";
import * as activeWorkoutActions from "../../../../../../store/workout/currentworkout/activeWorkoutActions";

const WorkoutSelector = ({ navigation, workouts, resetCreator, selectWorkout, initActiveWorkout }) => {

  return (
    <View style={styles.container}>
      {/* Top Menu */}
      <TopMenu navigation={navigation}/>

      {/* Title */}
      <TouchableOpacity onPress={() => console.log(workouts)}>
        <Text style={styles.title}>Pick a Workout</Text>
      </TouchableOpacity>

      {/* WorkoutSelector FlatList*/}
      <View style={styles.listContainer}>
        <FlatList data={workouts} keyExtractor={(workout) => workout.id} renderItem={ ({ item } ) => (
          <TouchableOpacity onPress={() => {navigation.navigate("Workout"); selectWorkout(item); initActiveWorkout(item)}}>
            <WorkOutCard workout={item} navigation={navigation}/>
          </TouchableOpacity>
        )} />
      </View>

      {/* Create New Workout Button*/}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {navigation.navigate("WorkoutCreator"); resetCreator()}}>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>Create new Workout</Text>
            <Feather name={'plus'} color={getColor().background} size={20}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const mapStateToProps = (state) => ({
  workouts: state.workout.workouts,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addTitle: (title) => dispatch(workoutCreatorActions.addTitle(title)),
    addWorkout: (name, exercises) => dispatch(workoutActions.addWorkout(name, exercises)),
    resetCreator: () => dispatch(workoutCreatorActions.reset()),
    selectWorkout: (workout) => dispatch(workoutActions.selectWorkout(workout)),
    initActiveWorkout: (workout) => dispatch(activeWorkoutActions.initActiveWorkout(workout)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutSelector);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().background,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 20,
    fontSize: 35,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
    alignSelf: 'center',
  },

  //create exercise darkButton
  button: {
    marginBottom: 20,
    backgroundColor: getColor().primary,
    borderRadius: 10,
    width: 250,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonTitle: {
    color: getColor().background,
    fontSize: 20,
    fontFamily: 'DMSans-Bold',
    paddingLeft: 10,
    paddingRight: 5,
    paddingVertical: 5,
  },

  // workouts list
  listContainer: {
    marginTop: 15,
    flex: 1,
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: 'center',
  },

  // delete
  deleteContainer: {
    paddingLeft: 15,
    justifyContent: 'center',
    marginBottom: 20,
  },

})
