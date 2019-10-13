import React from 'react';
import { TouchableHighlight, View, GestureResponderEvent } from 'react-native';
import { BaseIcon } from './BaseIcon';

const colors = {
  fg: '#ffffff',
  bg: '#2f95dc',
  fgDisabled: '#a4a4a4',
  bgDisabled: '#dfdfdf',
};

interface IProps {
  onPress: (event: GestureResponderEvent) => void;
  iconName: string;
  disabled?: boolean;
  outline?: boolean;
  fg?: string;
  bg?: string;
  fgDisabled?: string;
  bgDisabled?: string;
  iconSize?: number;
  width?: number;
  iconLeftPadding?: number; // because arrow-dropright is not centered
  iconTopPadding?: number; // because the icon is not centered on iOS
}

export const BaseCircleButton: React.FC<IProps> = ({
  onPress,
  iconName,
  disabled,
  outline,
  fg = colors.fg,
  bg = colors.bg,
  fgDisabled = colors.fgDisabled,
  bgDisabled = colors.bgDisabled,
  iconSize = 24,
  width = 40,
  iconLeftPadding = 0,
  iconTopPadding = 0,
}) => (
  <TouchableHighlight
    onPress={
      disabled
        ? () => {
            /*nada*/
          }
        : onPress
    }
    underlayColor={fg}
    style={{ borderRadius: width / 2 }}
  >
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width / 2,
        height: width,
        width,
        backgroundColor: outline ? 'transparent' : disabled ? bgDisabled : bg,
        borderWidth: outline ? 1 : 0,
        borderColor: outline ? bg : 'transparent',
      }}
    >
      <BaseIcon
        name={iconName}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: iconLeftPadding,
          paddingTop: iconTopPadding,
        }}
        color={outline ? bg : disabled ? fgDisabled : fg}
        size={iconSize}
      />
    </View>
  </TouchableHighlight>
);
