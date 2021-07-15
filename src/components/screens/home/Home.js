import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { color, getColor } from "../../../../assets/colors/color";
import Feather from "react-native-vector-icons/Feather";
import TopMenu from "../../menu/TopMenu";
import TabNav from "../../navigation/TabNav";


const Home = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <TabNav/>
    </View>
  )
}

export default (Home);


const styles = StyleSheet.create({
  container: {
    backgroundColor: getColor().white,
    flex: 1,
  },
  bottomMenuContainer: {
    flexDirection: 'row',
    backgroundColor: getColor().white,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomMenuItem: {
    padding: 20,
  },
})
