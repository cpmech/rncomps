import React from 'react';
import { View } from 'react-native';
import { BaseIcon, IBaseIconProps } from './BaseIcon';
import { TH } from './helpers';

export interface IIconButtonProps extends IBaseIconProps {
  onPress: () => void;
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
  const children = (
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
  );
  return (
    <View
      style={{
        width: size + 2 * paddingHorizontal,
        height: size + 2 * paddingVertical,
        borderRadius,
        overflow: 'hidden',
      }}
    >
      {TH(onPress, children)}
    </View>
  );
};
