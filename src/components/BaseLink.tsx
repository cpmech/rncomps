import React from 'react';
import { View, Text, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { defaultStyleLink, IStyleLink } from './helpers';

interface IProps extends IStyleLink {
  onPress: (event: GestureResponderEvent) => void;
  message: string;
}

export const BaseLink: React.FC<IProps> = ({
  onPress,
  message,
  color = defaultStyleLink.color,
  fontSize = defaultStyleLink.fontSize,
  fontFamily = defaultStyleLink.fontFamily,
  fontWeight = defaultStyleLink.fontWeight,
  underlayColor = defaultStyleLink.underlayColor,
  textDecorationLine = defaultStyleLink.textDecorationLine,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={underlayColor}>
    <Text
      style={{
        color,
        fontSize,
        fontWeight,
        fontFamily,
        textDecorationLine,
      }}
    >
      {message}
    </Text>
  </TouchableHighlight>
);
