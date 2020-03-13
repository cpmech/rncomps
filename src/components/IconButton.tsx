import React from 'react';
import { View, TouchableHighlight, GestureResponderEvent, Platform } from 'react-native';
import { BaseIcon, IBaseIconProps } from './BaseIcon';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export interface IIconButtonProps extends IBaseIconProps {
  onPress: (event: GestureResponderEvent) => void;
  underlayColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  borderRadius?: number;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  onPress,
  name,
  size = 24,
  color = '#484848',
  underlayColor = 'transparent',
  paddingHorizontal = 5,
  paddingVertical = 5,
  borderRadius = 300,
  ...rest
}) => {
  if (Platform.OS === 'android') {
    return (
      <View
        style={{
          width: size + 2 * paddingHorizontal,
          height: size + 2 * paddingVertical,
          borderRadius,
          overflow: 'hidden',
        }}
      >
        <TouchableNativeFeedback onPress={onPress} useForeground={true}>
          <View
            style={{
              width: size + 2 * paddingHorizontal,
              height: size + 2 * paddingVertical,
              paddingHorizontal,
              paddingVertical,
              borderRadius,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <BaseIcon name={name} color={color} size={size} {...rest} />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  return (
    <View
      style={{
        width: size + 2 * paddingHorizontal,
        height: size + 2 * paddingVertical,
        borderRadius,
        overflow: 'hidden',
      }}
    >
      <TouchableHighlight onPress={onPress} underlayColor="transparent">
        <View
          style={{
            width: size + 2 * paddingHorizontal,
            height: size + 2 * paddingVertical,
            paddingHorizontal,
            paddingVertical,
            borderRadius,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <BaseIcon name={name} color={color} size={size} {...rest} />
        </View>
      </TouchableHighlight>
    </View>
  );
};
