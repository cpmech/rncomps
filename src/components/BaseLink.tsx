import React from 'react';
import { Text, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { defaultStyleLink, IStyleLink } from './helpers';

interface IProps extends IStyleLink {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const BaseLink: React.FC<IProps> = ({
  text,
  onPress,
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
      {text}
    </Text>
  </TouchableHighlight>
);
