import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BaseIcon } from '../components';
import { HomeScreen, InfoTextScreenSample, SpinnerScreenSample } from '../screens';

const tabIcon = (name: string) => ({ focused }) => (
  <BaseIcon name={name} size={26} color={focused ? '#2f95dc' : '#ccc'} />
);

// HomeStack /////////////////////////////////////////////////////////////////

const HomeStack = createStackNavigator({
  Home: HomeScreen as React.ComponentClass<any, any>,
  InfoTextScreen: InfoTextScreenSample as React.ComponentClass<any, any>,
  SpinnerScreen: SpinnerScreenSample as React.ComponentClass<any, any>,
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
