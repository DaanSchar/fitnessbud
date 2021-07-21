import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { color, getColor } from "../../../../assets/colors/color";
import LinearGradient from "react-native-linear-gradient";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { AuthContext } from '../../context'



const SignInScreen = ({ navigation, login }) => {

  const [data, setData] = useState({
    email: '',
    password: '',
    hidePassword: true,
  });

  const { signIn } = React.useContext(AuthContext);

  function updateEmail(text) {
    setData({...data, email: text});
  }

  function updatePassword(text) {
    setData({...data, password: text});
  }

  function toggleHidePassword() {
    setData({...data, hidePassword: !data.hidePassword});
  }

  const isValidEmail = () => {
    return data.email.length > 0;
  }
  function onClickSignIn() {
    signIn(data.email, data.password);
  }

  function onClickSignUp() {
    navigation.navigate("SignUpScreen");
  }

  return (
     <LinearGradient style={styles.container} colors={[getColor().primary, getColor().secondary]}>

      {/* Header */}
      <View style={styles.headerWrapper}>
        <Animatable.View animation='bounceIn' duration={2000}>
          <Text style={styles.headerTitle}>Log in</Text>
        </Animatable.View>
      </View>

      {/* Footer */}
      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        <View style={styles.footerContainer}>

          {/* Login section */}
          <View>

            {/* Email */}
            <Text style={styles.footerText}>Email</Text>
            <View style={styles.section}>

              <FontAwesome name={'user-o'} color={getColor().textLight} size={18}/>
              <TextInput  onChangeText={(text) => updateEmail(text)} style={styles.textInput} placeholder={'Your Email'}/>
                {
                  isValidEmail() ?
                  <Animatable.View animation='bounceIn'>
                    <Feather name={"check-circle"} color={"green"} size={20} />
                  </Animatable.View> : null
                }
            </View>

            {/* Password */}
            <Text style={styles.footerText}>Password</Text>
            <View style={styles.section}>

              <FontAwesome name={'lock'} color={getColor().textLight} size={20}/>
              <TextInput secureTextEntry={data.hidePassword} onChangeText={(text) => updatePassword(text)} style={styles.textInput} placeholder={'Your Password'}/>

              <TouchableOpacity onPress={() => toggleHidePassword()}>
                <Feather name={ (data.hidePassword ? 'eye-off' : 'eye')} color={'grey'} size={20}/>
              </TouchableOpacity>

            </View>

          </View>


          <View style={styles.buttonContainer}>
          {/* Sign in Button */}
            <TouchableOpacity onPress={() => onClickSignIn()}>
              <LinearGradient style={[styles.button, styles.signIn]} colors={[getColor().primary, getColor().secondary]}>
                <Text style={styles.buttonText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Sign up Button */}
            <TouchableOpacity onPress={() => onClickSignUp()} style={[styles.button, styles.signUp]}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Animatable.View>

    </LinearGradient>
  )
}

export default SignInScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: getColor().primary,
  },
  headerWrapper: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  // header
  headerTitle: {
    fontSize: 35,
    fontFamily: 'DMSans-Bold',
    color: getColor().white,
  },

  // footer
  footer: {
    backgroundColor: getColor().white,
    height: '80%',
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
    fontSize: 18,
    fontFamily: 'DMSans-Medium',
    color: getColor().textLight,
  },
  section: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: getColor().border,
    marginBottom: 20,
  },
  textInput: {
    marginLeft: 10,
    width: '85%',
  },

  //darkButton
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signIn: {
    backgroundColor: getColor().primary,
  },
  signUp: {
    backgroundColor: getColor().white,
    borderWidth: 1.5,
    borderColor: getColor().primary,
  },
  signUpText: {
    fontSize: 20,
    color: getColor().primary,
    paddingVertical: 7,
    paddingLeft: 10,
    fontFamily: 'DMSans-Medium',
  },
  buttonText: {
    fontSize: 20,
    color: getColor().white,
    paddingVertical: 7,
    paddingLeft: 10,
    fontFamily: 'DMSans-Medium',
  },
})
