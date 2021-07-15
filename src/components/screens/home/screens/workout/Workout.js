import { Text, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { getColor } from "../../../../../../assets/colors/color";
import Feather from "react-native-vector-icons/Feather";
import WorkOutCard from "./components/WorkoutCard";
import { workoutData } from "../../../../../../assets/data/workoutData";
import TopMenu from "../../../../menu/TopMenu";

const Workout = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <TopMenu navigation={navigation}/>
      <Text style={styles.title}>Pick a Workout</Text>

      {/* Workout FlatList*/}
      <View style={styles.listContainer}>
        <FlatList data={workoutData} keyExtractor={(workout) => workout.id} renderItem={ ({ item } ) => (
          <TouchableOpacity onPress={() => {}}>
            <WorkOutCard workout={item}/>
          </TouchableOpacity>
        )} />
      </View>

      {/* Create New Workout Button*/}
      <TouchableOpacity onPress={() => navigation.navigate('WorkoutCreator')}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>Create new Workout</Text>
          <Feather name={'plus'} color={getColor().background} size={20}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Workout;

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

  //create exercise button
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

})