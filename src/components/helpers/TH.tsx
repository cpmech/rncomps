import React from 'react';
import { Platform, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

export const TH = Platform.select({
  ios: (onPress: () => void, children: React.ReactNode) => (
    <TouchableHighlight onPress={() => onPress()} underlayColor="transparent">
      {children}
    </TouchableHighlight>
  ),
  android: (onPress: () => void, children: React.ReactNode) => (
    <TouchableNativeFeedback onPress={() => onPress()} useForeground={true}>
      {children}
    </TouchableNativeFeedback>
  ),
});
