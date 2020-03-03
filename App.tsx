import React from 'react';
import { StatusBar } from 'react-native';
import { AppNavigator } from './src/navigation/AppNavigator';

/////////////////////////////////////////////////////////////////////
///////// TODO: Remove this when react-navigation is updated ////////
/////////////////////////////////////////////////////////////////////
// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Warning: componentWillMount']);
// YellowBox.ignoreWarnings(['Warning: AsyncStorage']);
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <AppNavigator />
    </>
  );
};
