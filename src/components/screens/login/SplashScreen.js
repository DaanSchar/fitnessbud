import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Dimensions, TouchableOpacity, StatusBar } from "react-native";
import { color, getColor } from "../../../../assets/colors/color";
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const SplashScreen = ({ navigation }) => {
  return (
    <LinearGradient style={styles.container} colors={[getColor().primary, getColor().secondary]}>
      <StatusBar backgroundColor={color.primary} barStyle={'light-content'}/>

      {/* Header */}
      <View style={styles.headerWrapper}>
        <Animatable.View animation='bounceIn' duration={2000}>
          <Text style={styles.headerTitle}>Fitness Bud</Text>
        </Animatable.View>
      </View>

      {/* Footer */}
      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        <View style={styles.footerContainer}>

          {/* Text */}
          <Text style={styles.footerTitle}>Start tracking your progress!</Text>
          <Text style={styles.footerText}>Sign in with an account</Text>

          {/* Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
              <MaterialIcons name='navigate-next' color={getColor().white} size={20}/>
            </TouchableOpacity>
          </View>

        </View>
      </Animatable.View>
    </LinearGradient>
  )
}

export default (SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor().primary,
    justifyContent: 'space-between',
  },
  headerWrapper: {
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    flex: 1
  },

  // header
  headerTitle: {
    fontSize: 40,
    fontFamily: 'DMSans-Bold',
    color: getColor().white,
  },

  // footer
  footer: {
    backgroundColor: getColor().white,
    height: '35%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  footerContainer: {
    padding: 30,
  },
  footerTitle: {
    color: getColor().textDark,
    fontSize: 25,
    fontFamily: 'DMSans-Bold'
  },
  footerText: {
    marginTop: 10,
    color: getColor().textLight,
  },

  //button
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: getColor().primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
  },
  buttonText: {
    fontSize: 20,
    color: getColor().white,
    paddingVertical: 7,
    paddingLeft: 10,
    fontFamily: 'DMSans-Medium',
  },
})
