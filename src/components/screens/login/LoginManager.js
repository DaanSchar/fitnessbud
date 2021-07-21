import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from '../../context'
import * as loginActions from '../../../store/login/loginActions'
import { connect } from "react-redux";
import LoadingScreen from "../loadingscreens/LoadingScreen";
import AppNavigation from "../../navigation/AppNavigator";



const LoginManager = ({ retrieveToken, login, logout, register, loginState, }) => {

  const authContext = React.useMemo(() =>({
      signIn: (username, password) => {
        let userToken = null;


        if (username === 'user' && password === 'pas') {
          userToken = '111aaa'
        }

        //login(username, userToken);
        login('user', '111aaa');
      },
      signOut: () => {
        logout();
      },
      signUp: (username, password) => {
        register(username, '222aaa');
      },
    })
  );

  useEffect(() => {
    setTimeout(() => {
      console.log(loginState)
      retrieveToken(loginState.userToken);
    }, 10 ) // TODO: change back to 1000 ms
  },[])

  // TODO: uncomment this
  // if ( loginState.isLoading )
  //   return <LoadingScreen/>


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {/*{loginState.userToken !== null ? <AppNavigation/> : <LoginStack/>}*/}
        <AppNavigation/>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const mapStateToProps = (state, ownProps) => ({
  loginState: state.loginState,
})

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    retrieveToken: (token) => dispatch(loginActions.retrieveToken(token)),
    login: (username, token) => dispatch(loginActions.login(username, token)),
    logout: () => dispatch(loginActions.logout()),
    register: (username, token) => dispatch(loginActions.register(username, token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginManager);
