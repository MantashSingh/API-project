import React from 'react';
import { Button, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import {HomePage} from '../Screen/index';


const Stack = createStackNavigator();

function MainStack() {
  return (
    <React.Fragment>
      <Stack.Screen options={{ headerShown: false }} name={navigationStrings.HOME_PAGE} component={HomePage} />
    </React.Fragment>
  );
}

export default MainStack;
