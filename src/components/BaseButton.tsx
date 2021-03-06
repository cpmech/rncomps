import React from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';
import { BaseIcon } from './BaseIcon';
import { IStyleButton, defaultStyleButton } from './helpers';

export interface IBaseButtonProps extends IStyleButton {
  onPress: (event: GestureResponderEvent) => void;
  text?: string;
  iconName?: string;
  spinning?: boolean;
}

export const BaseButton: React.FC<IBaseButtonProps> = ({
  onPress,
  text,
  iconName,
  spinning,
  disabled = defaultStyleButton.disabled,
  outline = defaultStyleButton.outline,
  color = defaultStyleButton.color,
  backgroundColor = defaultStyleButton.backgroundColor,
  fgDisabled = defaultStyleButton.fgDisabled,
  bgDisabled = defaultStyleButton.bgDisabled,
  fontFamily = defaultStyleButton.fontFamily,
  fontWeight = defaultStyleButton.fontWeight,
  fontSize = defaultStyleButton.fontSize,
  iconDeltaSize = defaultStyleButton.iconDeltaSize,
  iconGap = defaultStyleButton.iconGap,
  height = defaultStyleButton.height,
  width = defaultStyleButton.width,
  minWidth = defaultStyleButton.minWidth,
  borderWidth = defaultStyleButton.borderWidth,
  borderRadius = defaultStyleButton.borderRadius,
  paddingVertical = defaultStyleButton.paddingVertical,
  paddingHorizontal = defaultStyleButton.paddingHorizontal,
  flatLeft = defaultStyleButton.flatLeft,
  flatRight = defaultStyleButton.flatRight,
}) => (
  <TouchableHighlight
    disabled={disabled || spinning}
    onPress={onPress}
    underlayColor={outline ? 'transparent' : color}
    style={{
      borderRadius,
      borderTopLeftRadius: flatLeft ? 0 : undefined,
      borderBottomLeftRadius: flatLeft ? 0 : undefined,
      borderTopRightRadius: flatRight ? 0 : undefined,
      borderBottomRightRadius: flatRight ? 0 : undefined,
    }}
  >
    <View
      style={{
        height,
        width,
        minWidth,
        borderRadius,
        backgroundColor: outline ? 'transparent' : disabled ? bgDisabled : backgroundColor,
        borderWidth: outline ? borderWidth : 0,
        borderColor: outline ? backgroundColor : 'transparent',
        paddingVertical,
        paddingHorizontal,
        borderTopLeftRadius: flatLeft ? 0 : undefined,
        borderBottomLeftRadius: flatLeft ? 0 : undefined,
        borderTopRightRadius: flatRight ? 0 : undefined,
        borderBottomRightRadius: flatRight ? 0 : undefined,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!spinning && iconName && (
          <BaseIcon
            name={iconName}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: iconGap,
            }}
            color={outline ? backgroundColor : disabled ? fgDisabled : color}
            size={fontSize + iconDeltaSize}
          />
        )}
        {!spinning && text && (
          <Text
            style={{
              color: outline ? backgroundColor : disabled ? fgDisabled : color,
              fontFamily,
              fontWeight,
              fontSize,
              textAlign: 'center',
            }}
          >
            {text}
          </Text>
        )}
        {spinning && <ActivityIndicator color={color} />}
      </View>
    </View>
  </TouchableHighlight>
);
