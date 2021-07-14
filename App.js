import React, { useEffect, useState } from "react";
import LoginView from "./src/components/screens/login/LoginManager";
import { Provider } from "react-redux";
import store from "./src/store/store";



function App() {
 return (
   <Provider store={store}>
    <LoginView/>
   </Provider>
 )
}

export default App;
