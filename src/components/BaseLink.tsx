import React from 'react';
import { View, Text, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { FontWeight } from './types';

interface IProps {
  onPress: (event: GestureResponderEvent) => void;
  message: string;
  fontSize?: number;
  fontWeight?: FontWeight;
  colorDefault?: string;
  colorHover?: string;
  colorDark?: string;
  darkBackground?: boolean;
}

export const BaseLink: React.FC<IProps> = ({
  onPress,
  message,
  fontSize = 18,
  fontWeight = 'normal',
  colorDefault = '#2296f3',
  colorHover = '#efefef',
  colorDark = '#ffffff',
  darkBackground,
}) => (
  <View>
    <TouchableHighlight
      onPress={onPress}
      underlayColor={darkBackground ? 'transparent' : colorHover}
    >
      <Text
        style={{
          fontSize,
          color: darkBackground ? colorDark : colorDefault,
          fontWeight,
        }}
      >
        {message}
      </Text>
    </TouchableHighlight>
  </View>
);
