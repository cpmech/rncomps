import React from 'react';
import { Text, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { defaultStyleLink, IStyleLink } from './helpers';

interface IProps extends IStyleLink {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const BaseLink: React.FC<IProps> = ({
  text,
  onPress,
  disabled,
  color = defaultStyleLink.color,
  fontSize = defaultStyleLink.fontSize,
  fontFamily = defaultStyleLink.fontFamily,
  fontWeight = defaultStyleLink.fontWeight,
  underlayColor = defaultStyleLink.underlayColor,
  textDecorationLine = defaultStyleLink.textDecorationLine,
  textAlign,
}) => (
  <TouchableHighlight disabled={disabled} onPress={onPress} underlayColor={underlayColor}>
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
