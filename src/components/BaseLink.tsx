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
  fontSize = defaultStyleLink.fontSize,
  fontWeight = defaultStyleLink.fontWeight,
  color = defaultStyleLink.color,
  colorHover = defaultStyleLink.colorHover,
  darkBackground = defaultStyleLink.darkBackground,
  textDecorationLine = defaultStyleLink.textDecorationLine,
}) => (
  <View>
    <TouchableHighlight
      onPress={onPress}
      underlayColor={darkBackground ? 'transparent' : colorHover}
    >
      <Text
        style={{
          fontSize,
          color,
          fontWeight,
          textDecorationLine,
        }}
      >
        {message}
      </Text>
    </TouchableHighlight>
  </View>
);
