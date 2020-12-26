import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@shopify/restyle';
import {Icon} from '@app/components';
import {Theme, DefaultFont} from '@app/theme';
import {BottomTabParamList} from '../types';
import {Home, Activities, Profile} from '@app/screens';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const BottomTabNavigator = () => {
  const {colors} = useTheme<Theme>();

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.text,
        style: {borderTopWidth: 0, paddingTop: 5},
        labelStyle: {fontSize: 14, fontWeight: 'bold', fontFamily: DefaultFont},
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <Icon type="AntDesign" name="home" size={25} style={{color}} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Activities"
        component={Activities}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <Icon
                type="Foundation"
                name="guide-dog"
                size={30}
                style={{color}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <Icon
                type="FontAwesome"
                name="user-o"
                size={20}
                style={{color}}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
