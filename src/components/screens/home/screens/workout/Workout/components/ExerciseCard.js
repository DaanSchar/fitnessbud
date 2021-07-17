import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList, Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getColor } from "../../../../../../../../assets/colors/color";
import Feather from "react-native-vector-icons/Feather";

const ExerciseCard = ({ exercise }) => {

  let width = Dimensions.get('window').width;
  width = width*0.789;

  let setArray = [];
  for( let i = 1; i < exercise.quantity + 1; i++) {
    setArray.push(i);
  }

  const set = (number) => {

    const [repIsDone, setRepIsDone] = useState(false);
    const [weightIsDone, setWeightIsDone] = useState(false);

    function changeRep(text){
      if (text.length > 0) {
        setRepIsDone(true);
      }
    }

    function changeWeight(text){
      if (text.length > 0) {
        setWeightIsDone(true);
      }
    }

    return (
      <View key={number} style={[styles.setsContainer, { width }]}>
        <View style={styles.setContainer}>
          <Feather name={'pocket'} color={getColor().primary} size={15}/>
          <Text style={styles.setTitle}> { number } :  </Text>
          <TextInput style={styles.setInput} placeholder={'Reps'} onChangeText={text => changeRep(text)}></TextInput>
          <TextInput style={styles.setInput} placeholder={'Weight'} onChangeText={text => changeWeight(text)}></TextInput>
          <Feather name={'check-circle'} size={20} color={ repIsDone && weightIsDone ? 'green' : getColor().textLight }/>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>

        {/* Exercise Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{exercise.name}</Text>
        </View>

        {/* Reps*/}
        {
          setArray.map((number) => {return set(number)})
        }
      </View>
    </View>
  )
}

export default ExerciseCard;

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
    borderRadius: 20,
    width: '35%',
  },
  setTitle: {
    width: '20%',
    fontSize: 20,
    fontFamily: 'DMSans-Regular',
    borderRadius: 20,
  },
})
