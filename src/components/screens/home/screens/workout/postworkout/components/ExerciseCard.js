import { Text, View, StyleSheet} from "react-native";
import React from 'react'
import { getColor } from "../../../../../../../../assets/colors/color";

const ExerciseCard = ({ exercise }) => {

  if ( exercise.reps === undefined && exercise.reps === undefined)
    return (
      <View>
        <Text></Text>
      </View>
    )


  return (
    <View style={styles.container}>

      <View style={styles.exerciseContainer}>
        <Text style={styles.text}>{ exercise.name }</Text>

        <View>
          {
            exercise.reps.map((reps, index) => (
              <View key={index.toString()}>
                <Text style={[styles.text, { width: 70 }]}>{ reps === -1 || exercise.weight === undefined ? null : reps + ' x ' + exercise.weight[index] }</Text>
              </View>
            ))
          }
        </View>

      </View>

    </View>
  )

}

export default ExerciseCard;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.5,
    borderColor: getColor().border,
  },
  text: {
    fontFamily: 'DMSans-Regular',
    fontSize: 18,
    color: getColor().primary,
  },
  exerciseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 2,
  },
})
