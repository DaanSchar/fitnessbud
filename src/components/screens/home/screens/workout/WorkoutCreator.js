import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { getColor } from "../../../../../../assets/colors/color";
import BackButton from "../../../../menu/BackButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { connect } from "react-redux";
import * as workoutCreatorActions from "../../../../../store/workout/workoutcreator/workoutCreatorActions";
import * as workoutActions from "../../../../../store/workout/workout/workoutActions";
import ExerciseCard from "./components/ExerciseCard";


const WorkoutCreator = ({ navigation, exercises, workoutName, addTitle, addWorkout}) => {
  return (
    <View style={styles.container}>

        {/*Top Menu*/}
        <View style={styles.topMenu}>
          <BackButton navigation={navigation}/>
        </View>


        <View style={styles.contentContainer}>
          <TouchableOpacity onPress={() => console.log(workoutName)}>
          <Text style={styles.Title}>Create new Workout</Text>
          </TouchableOpacity>

          {/* Text Input*/}
          <View style={styles.inputWrapper}>
            <MaterialIcons name={'edit'} size={15} color={getColor().textLight}/>
            <TextInput style={styles.nameInput} placeholder={'Name of you workout'} onChangeText={text => addTitle(text)}/>
          </View>


          {/*  Add Exercise Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ExerciseList')}>
              <View style={styles.addButton}>
                <Text style={styles.buttonTitle}>Add Exercise</Text>
                <Feather name={'plus'} color={getColor().background} size={20}/>
              </View>
            </TouchableOpacity>
          </View>

          {/* Exercise list*/}
          <View style={styles.listContainer}>
            <FlatList data={exercises} keyExtractor={(exercise) => exercise.id} renderItem={ ({ item } ) => (
              <ExerciseCard exercise={item}/>
            )} />
          </View>

          {/* done Button*/}
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => {
            navigation.goBack();
            addWorkout(workoutName, exercises);
          }}>
            <View style={styles.createButton}>
              <Text style={styles.buttonTitle}>Done</Text>
              <Feather name={'check'} color={getColor().background} size={20}/>
            </View>
          </TouchableOpacity>
          </View>

        </View>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  workoutName: state.workoutCreator.name,
  exercises: state.workoutCreator.exercises,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addTitle: (title) => dispatch(workoutCreatorActions.addTitle(title)),
    addWorkout: (name, exercises) => dispatch(workoutActions.addWorkout(name, exercises)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreator);

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
  listContainer: {
    height: '60%',
  },

  text: {
    fontSize: 15,
    fontFamily: 'DMSans-Medium',
    color: getColor().textDark,
  },

  // name input
  inputWrapper: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: getColor().border,
  },
  nameInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    fontFamily: 'DMSans-Medium',
  },

  // button
  addButton: {
    marginTop: 50,
    backgroundColor: getColor().primary,
    borderRadius: 10,
    width: 170,
    alignSelf: 'center',
    alignItems: 'center',
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

  createButton: {
    marginBottom: 20,
    backgroundColor: getColor().primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 5,
  },
  buttonContainer: {
    alignItems: 'center',
  },
})
