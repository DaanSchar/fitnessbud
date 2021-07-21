import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions, TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getColor } from "../../../../../../../../assets/colors/color";
import Feather from "react-native-vector-icons/Feather";
import { connect } from "react-redux";
import * as activeWorkoutActions from "../../../../../../../store/workout/currentworkout/activeWorkoutActions";
import { addWeightToSet } from "../../../../../../../store/workout/currentworkout/activeWorkoutActions";

const ExerciseCard = ({ exercise, activeWorkout, addWeightToSet, addRepsToSet, activeExercises }) => {

  const [exerciseIsDone, setExerciseIsDone] = useState(false);

  let width = Dimensions.get('window').width*0.789;

  let setArray = [];
  for( let i = 1; i < exercise.quantity + 1; i++) {
    setArray.push(i);
  }

  function indexOfExercise() {
    for (let i = 0; i < activeExercises.length; i++)
      if (exercise.id === activeExercises[i].id)
        return i;
    return -1;
  }

  function checkIfExerciseIsDone() {
    let index = indexOfExercise();

    if (activeExercises[index].isFinishedReps && activeExercises[index].isFinishedWeight)
      setExerciseIsDone(true);
    else
      setExerciseIsDone(false);
  }

  const set = (number) => {

    const [repIsDone, setRepIsDone] = useState(false);
    const [weightIsDone, setWeightIsDone] = useState(false);

    function changeRep(text){
      if (text.length > 0) {
        setRepIsDone(true);
        addRepsToSet(exercise, number, text)
      } else {
        setRepIsDone(false);
        addRepsToSet(exercise, number, -1)
      }
      checkIfExerciseIsDone();
    }

    function changeWeight(text){
      if (text.length > 0) {
        setWeightIsDone(true);
        addWeightToSet(exercise, number, text);
      } else {
        setWeightIsDone(false);
        addWeightToSet(exercise, number, -1);
      }
      checkIfExerciseIsDone();
    }

    return (
      <View key={number} style={[styles.setsContainer, { width }, ]}>
        <View style={styles.setContainer}>
          <Feather name={'pocket'} color={exerciseIsDone ? getColor().success : getColor().primary} size={15}/>
          <Text style={[styles.setTitle, exerciseIsDone ? {color: getColor().success} : {color: getColor().primary}]}> { number } :  </Text>
          <TextInput keyboardType={"numeric"} style={[styles.setInput, { width: '33%'}]} maxLength={3} placeholder={'Reps'} onChangeText={text => changeRep(text)}></TextInput>
          <TextInput keyboardType={"numeric"} style={[styles.setInput, { width: '33%'}]} maxLength={3} placeholder={'Weight'} onChangeText={text => changeWeight(text)}></TextInput>
          <Feather name={'check-circle'} size={20} color={ repIsDone && weightIsDone ? 'green' : getColor().textLight }/>
        </View>
      </View>
    )
  }

  return (
    <View style={[styles.container,  exerciseIsDone ? {borderColor: getColor().success} : null ]}>
      <View style={styles.contentContainer}>

        {/* Exercise Title */}
        <View style={styles.titleContainer}>
          <TouchableHighlight onPress={() => { console.log(activeWorkout) }}>
            <Text style={[styles.title,  exerciseIsDone ? {color: getColor().success} : null ]}>{exercise.name}</Text>
          </TouchableHighlight>
        </View>

        {/* Sets */}
        {
          setArray.map((number) => { return set(number) })
        }

      </View>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({
  exercise: ownProps.exercise,
  activeWorkout: state.activeWorkout,
  activeExercises: state.activeWorkout.exercises,
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    addWeightToSet: (exercise, set, weight) => dispatch(activeWorkoutActions.addWeightToSet(exercise, set, weight)),
    addRepsToSet: (exercise, set, weight) => dispatch(activeWorkoutActions.addRepsToSet(exercise, set, weight)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCard);

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: getColor().background,
    borderWidth: 1.5,
    borderColor: getColor().border,
    borderRadius: 20,
    flex: 0.7,
    marginHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderColor: getColor().border,
  },
  title: {
    fontSize: 35,
    fontFamily: 'DMSans-Bold',
    color: getColor().textDark,
    alignSelf: 'center',
  },
  contentContainer:  {
    marginTop: 20,
    marginHorizontal: 20,
  },

  // sets
  setsContainer: {
    marginTop: 20,
    //marginHorizontal: 10,
  },
  setContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: getColor().border,
    borderTopWidth: 1.5,
    marginBottom: 40,
  },
  setInput: {
    fontSize: 20,
    fontFamily: 'DMSans-Regular',
  },
  setTitle: {
    width: '20%',
    fontSize: 20,
    fontFamily: 'DMSans-Regular',
    borderRadius: 20,
  },
})
