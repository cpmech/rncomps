import React from 'react';
import { View, Text, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { defaultStyleLink, IStyleLink } from './helpers';

interface IProps extends IStyleLink {
  onPress: (event: GestureResponderEvent) => void;
  message: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
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
  textAlign,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={underlayColor}>
    <Text
      style={{
        color,
        fontSize,
        fontWeight,
        fontFamily,
        textDecorationLine,
        textAlign,
      }}
    >
      {message}
    </Text>
  </TouchableHighlight>
);
