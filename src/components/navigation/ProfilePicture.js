import { Image, View, StyleSheet } from "react-native";
import React from "react";

const size = 50;

const ProfilePicture = () => {
  return (
    <View>
      <Image source={require('../../../assets/images/profile.png')} style={styles.image}/>
    </View>
  )
}

export default ProfilePicture

const styles = StyleSheet.create(
  {
  image: {
    width: size,
    height: size,
    borderRadius: size,
  },
})
