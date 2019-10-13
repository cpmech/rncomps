import React from 'react';
import { View, Text, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { IStyles } from './types';

const colors = {
  default: '#2296f3',
  hover: '#efefef',
};

const s: IStyles = {
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  text: {
    color: colors.default,
  },
  textDark: {
    color: '#ffffff',
    fontWeight: '900',
  },
};

interface IProps {
  onPress: (event: GestureResponderEvent) => void;
  message: string;
  darkBackground?: boolean;
}

export const BaseLink: React.FC<IProps> = ({ onPress, message, darkBackground }) => (
  <View style={s.root}>
    <TouchableHighlight
      onPress={onPress}
      underlayColor={darkBackground ? 'transparent' : colors.hover}
    >
      <Text style={darkBackground ? s.textDark : s.text}>{message}</Text>
    </TouchableHighlight>
  </View>
);
