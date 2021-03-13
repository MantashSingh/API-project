import React from 'react';
import { Button, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import {LandingPage , Login , Signup} from '../Screen/index';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <React.Fragment>
       
      {/* <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LANDING_PAGE} component={LandingPage} /> */}
      {/* <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LOGIN} component={Login} /> */}
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.SIGNUP} component={Signup} /> 
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.LOGIN} component={Login} />

      


    </React.Fragment>
  );
}

export default AuthStack;