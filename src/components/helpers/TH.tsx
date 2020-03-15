import React from 'react';
import { Platform, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

const defaultTH = (onPress: () => void, children: React.ReactNode) => (
  <TouchableHighlight onPress={() => onPress()} underlayColor="transparent">
    {children}
  </TouchableHighlight>
);

export const TH =
  Platform.OS === 'android'
    ? (onPress: () => void, children: React.ReactNode) => (
        <TouchableNativeFeedback onPress={() => onPress()} useForeground={true}>
          {children}
        </TouchableNativeFeedback>
      )
    : defaultTH;
