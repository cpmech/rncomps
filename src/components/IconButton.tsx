import React from 'react';
import { TouchableHighlight, View, Text, GestureResponderEvent } from 'react-native';
import { BaseIcon, IBaseIconProps } from './BaseIcon';

export interface IIconButtonProps extends IBaseIconProps {
  onPress: (event: GestureResponderEvent) => void;
  underlayColor?: string;
  paddingLeft?: number;
  paddingRight?: number;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  onPress,
  name,
  size = 24,
  color = '#484848',
  underlayColor = 'transparent',
  paddingLeft,
  paddingRight,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={underlayColor}>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft,
        paddingRight,
      }}
    >
      <BaseIcon
        name={name}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        color={color}
        size={size}
      />
    </View>
  </TouchableHighlight>
);
