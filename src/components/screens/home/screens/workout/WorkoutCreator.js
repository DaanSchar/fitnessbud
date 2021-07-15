import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import React from "react";
import { getColor } from "../../../../../../assets/colors/color";
import BackButton from "../../../../menu/BackButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

/**
 * TODO: Fix name input nopt showing completely
 */

const WorkoutCreator = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>

        {/*Top Menu*/}
        <View style={styles.topMenu}>
          <BackButton navigation={navigation}/>
        </View>


        <View style={styles.contentContainer}>
          <Text style={styles.Title}>Create new Workout</Text>

          <View style={styles.inputWrapper}>
            <MaterialIcons name={'edit'} size={15} color={getColor().textLight}/>
            <TextInput style={styles.nameInput} placeholder={'Name of you workout'}/>

          </View>
        </View>
    </ScrollView>
  )
}

export default WorkoutCreator;

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
    marginLeft: 10,
    fontSize: 15,
    fontFamily: 'DMSans-Medium',
  },
})
