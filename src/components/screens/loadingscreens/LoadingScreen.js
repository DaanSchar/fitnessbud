import { ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { color, getColor } from "../../../../assets/colors/color";
import LinearGradient from "react-native-linear-gradient";

const LoadingScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={[getColor().primary, getColor().secondary]}>
        <ActivityIndicator color={getColor().white} size='large'/>
    </LinearGradient>
  );
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
