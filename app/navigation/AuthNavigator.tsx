import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthStackParamList} from '../types';
import {SignIn, SignUp} from '@app/screens';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
