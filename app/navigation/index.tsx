import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {themeNavigation} from '@app/theme';

import {RootStackParamList} from '../types';
import AuthNavigator from './AuthNavigator';
import Main from './Main';

const Stack = createStackNavigator<RootStackParamList>();
function Navigator() {
  return (
    <NavigationContainer theme={themeNavigation}>
      <Stack.Navigator headerMode="none" initialRouteName="Main">
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
