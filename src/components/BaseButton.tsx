import React from 'react';
import { TouchableHighlight, View, Text, GestureResponderEvent } from 'react-native';
import { BaseIcon } from './BaseIcon';
import { IStyleButton, defaultStyleButton } from './helpers';

export interface IBaseButtonProps extends IStyleButton {
  onPress: (event: GestureResponderEvent) => void;
  text?: string;
  iconName?: string;
}

export const BaseButton: React.FC<IBaseButtonProps> = ({
  onPress,
  text,
  iconName,
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
  borderRadius = defaultStyleButton.borderRadius,
  paddingVertical = defaultStyleButton.paddingVertical,
  paddingHorizontal = defaultStyleButton.paddingHorizontal,
}) => (
  <TouchableHighlight
    onPress={disabled ? () => {} : onPress}
    underlayColor={color}
    style={{ borderRadius }}
  >
    <View
      style={{
        height,
        width,
        borderRadius,
        backgroundColor: outline ? 'transparent' : disabled ? bgDisabled : backgroundColor,
        borderWidth: outline ? 1 : 0,
        borderColor: outline ? backgroundColor : 'transparent',
        paddingVertical,
        paddingHorizontal,
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
        {iconName && (
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
        {text && (
          <Text
            style={{
              color: outline ? backgroundColor : disabled ? fgDisabled : color,
              fontFamily,
              fontWeight,
              fontSize,
            }}
          >
            {text}
          </Text>
        )}
      </View>
    </View>
  </TouchableHighlight>
);
