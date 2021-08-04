import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { getColor } from "../../../../../../../../assets/colors/color";

const ScanButton = () => {
  return(
    <View>
      <MaterialIcons name={'flip'} size={25} color={getColor().secondary}/>
      <Text style={styles.title}>Scan</Text>
    </View>
  )
}

export default (ScanButton);

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 11,
    alignSelf: 'center',
    fontFamily: 'DMSans-SemiBold',
    color: getColor().secondary,
  },
})
