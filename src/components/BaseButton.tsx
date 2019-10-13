import React from 'react';
import { TouchableHighlight, View, Text, GestureResponderEvent } from 'react-native';
import { BaseIcon } from './BaseIcon';

const colors = {
  fg: '#ffffff',
  bg: '#2f95dc',
  fgDisabled: '#a4a4a4',
  bgDisabled: '#dfdfdf',
};

interface IProps {
  onPress: (event: GestureResponderEvent) => void;
  text?: string;
  iconName?: string;
  disabled?: boolean;
  outline?: boolean;
  fg?: string;
  bg?: string;
  fgDisabled?: string;
  bgDisabled?: string;
  fontFamily?: string;
  fontSize?: number;
  iconDeltaSize?: number;
  iconGap?: number;
  width?: number;
  borderRadius?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

export const BaseButton: React.FC<IProps> = ({
  onPress,
  text,
  iconName,
  disabled,
  outline,
  fg = colors.fg,
  bg = colors.bg,
  fgDisabled = colors.fgDisabled,
  bgDisabled = colors.bgDisabled,
  fontFamily,
  fontSize = 24,
  iconDeltaSize = 5,
  iconGap = 10,
  width,
  borderRadius = 5,
  paddingVertical = 10,
  paddingHorizontal = 10,
}) => (
  <TouchableHighlight
    onPress={disabled ? null : onPress}
    underlayColor={fg}
    style={{ borderRadius }}
  >
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        borderRadius,
        backgroundColor: outline ? 'transparent' : disabled ? bgDisabled : bg,
        borderWidth: outline ? 1 : 0,
        borderColor: outline ? bg : 'transparent',
        paddingVertical,
        paddingHorizontal,
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
          color={outline ? bg : disabled ? fgDisabled : fg}
          size={fontSize + iconDeltaSize}
        />
      )}
      {text && (
        <Text
          style={{
            color: outline ? bg : disabled ? fgDisabled : fg,
            fontFamily,
            fontSize,
          }}
        >
          {text}
        </Text>
      )}
    </View>
  </TouchableHighlight>
);
