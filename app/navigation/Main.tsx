import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeParamList} from '../types';

import {Settings, Activities, Details, Request} from '@app/screens';
import BottomTabNavigator from './BottomTabNavigator';

const HomeStack = createStackNavigator<HomeParamList>();
function Main() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={BottomTabNavigator} />
      <HomeStack.Screen name="Details" component={Details} />
      <HomeStack.Screen name="Request" component={Request} />
      <HomeStack.Screen name="Activities" component={Activities} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
}

export default Main;
