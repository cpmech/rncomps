import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BaseIcon } from '../components';
import { HomeScreen } from '../screens/HomeScreen';
import { BaseInfoTextScreenSample } from '../screens/BaseInfoTextScreenSample';
import { BaseSpinnerScreenSample } from '../screens/BaseSpinnerScreenSample';

const tabIcon = (name: string) => ({ focused }) => (
  <BaseIcon name={name} size={26} color={focused ? '#2f95dc' : '#ccc'} />
);

// HomeStack /////////////////////////////////////////////////////////////////

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  BaseInfoTextScreenSample,
  BaseSpinnerScreenSample,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: tabIcon('home'),
};

// HomeTabs //////////////////////////////////////////////////////////////////

export const HomeTabs = createBottomTabNavigator({
  HomeStack,
});

(HomeTabs as any).navigationOptions = {
  header: null,
};
