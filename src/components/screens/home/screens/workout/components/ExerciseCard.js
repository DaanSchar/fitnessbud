import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import { getColor } from "../../../../../../../assets/colors/color";
import { connect } from "react-redux";
import * as workoutCreatorActions from "../../../../../../store/workout/workoutcreator/workoutCreatorActions";

const ExerciseCard = ({exercise, exercises, incrementExerciseQuantity, decrementExerciseQuantity, }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.name}>{ exercise.name }</Text>
        <View style={styles.quantityContainer}>

          {/* Button*/}
          <View style={styles.quantityButton}>

            {/* Plus button*/}
            <TouchableOpacity style={styles.plus} onPress={() => {
              incrementExerciseQuantity(exercise);
            }}>
              <Feather name={'plus'} color={getColor().background} size={26}/>
            </TouchableOpacity>

            <View style={styles.quantityHolder}>
              <Text style={styles.category}>{ exercise.quantity}  Set{ exercise.quantity > 1 ? 's' : ''}</Text>
            </View>


            {/* minus button*/}
            <TouchableOpacity onPress={() => decrementExerciseQuantity(exercise)}>
              <Feather name={'minus'} color={getColor().primary} size={26}/>
            </TouchableOpacity>


          </View>

        </View>
      </View>
      <Text style={styles.category}>{ exercise.category }</Text>
    </View>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCard);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: getColor().border,
    borderRadius: 15,
    marginTop: 15,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
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
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: getColor().secondary,
    paddingHorizontal: 10,
  },
  category: {
    fontFamily: 'DMSans-Medium',
    fontSize: 16,
    color: getColor().secondary,
  },
})
