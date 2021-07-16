import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import { getColor } from "../../../../../../../assets/colors/color";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ExerciseSelectionCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.name}>{ props.exercise.name }</Text>
        <MaterialCommunityIcons name={'dumbbell'} color={getColor().primary} size={20}/>
      </View>
      <Text style={styles.category}>{ props.exercise.category }</Text>
    </View>
  )
}

export default ExerciseSelectionCard;

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
  name: {
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    color: getColor().primary,
  },
  category: {
    fontFamily: 'DMSans-Medium',
    fontSize: 16,
    color: getColor().secondary,
  },
})
