import React, { useState } from "react";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BackButton from "../../../../menu/BackButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { getColor } from "../../../../../../assets/colors/color";
import ExerciseCard from "./components/ExerciseCard";
import { exercisesData } from "../../../../../../assets/data/exercisesData";


const ExerciseList = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/*Top Menu*/}
      <View style={styles.topMenu}>
        <BackButton navigation={navigation}/>
      </View>


      <View style={styles.contentContainer}>
        <Text style={styles.Title}>Choose Exercise</Text>

        {/* Exercise list*/}
        <View style={styles.listContainer}>
          <FlatList data={exercisesData} keyExtractor={(exercise) => exercise.id} renderItem={ ({ item } ) => (
            <TouchableOpacity onPress={() => {}}>
              <ExerciseCard exercise={item}/>
            </TouchableOpacity>
          )} />
        </View>
      </View>
    </View>
  )
}

export default ExerciseList;

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
