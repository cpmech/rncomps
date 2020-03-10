import React from 'react';
import { TouchableHighlight, View, Text, GestureResponderEvent } from 'react-native';
import { BaseIcon } from './BaseIcon';

export interface IBaseIconProps {
  onPress: (event: GestureResponderEvent) => void;
  name: string;
  size?: number;
  color?: string;
  underlayColor?: string;
}

export const IconButton: React.FC<IBaseIconProps> = ({
  onPress,
  name,
  size = 24,
  color = '#484848',
  underlayColor = 'transparent',
}) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <TouchableHighlight onPress={onPress} underlayColor={underlayColor}>
      <BaseIcon
        name={name}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        color={color}
        size={size}
      />
    </TouchableHighlight>
  </View>
);
