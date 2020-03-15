import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { IconKind, BaseIcon } from './BaseIcon';
import { FontWeight, IStyles } from './types';

export interface INavButtonProps {
  text: string;
  onPress: () => void;

  color?: string;
  bgColor?: string;
  height?: number;
  iconName?: string;
  iconKind?: IconKind;
  iconSize?: number;
  iconGap?: number;

  fontSize?: number;
  fontFamily?: string;
  fontWeight?: FontWeight;
  textMaxWidth?: number;

  marginVertical?: number;
  paddingHoriz?: number;
  suffixPaddingRight?: number;
}

export const NavButton: React.FC<INavButtonProps> = ({
  text,
  onPress,

  color = '#5c5c5c',
  bgColor = '#ffffff',
  height = 48,
  iconName,
  iconKind = 'line',
  iconSize = 24,
  iconGap = 10,

  fontSize = 18,
  fontFamily,
  fontWeight,
  textMaxWidth,

  marginVertical = 2,
  paddingHoriz = 20,
  suffixPaddingRight = 20,

  //
}) => {
  //

  const styles: IStyles = {
    root: {
      width: '100%',
      height: height,
      marginVertical,
    },

    container: {
      position: 'absolute',
      width: '100%',
    },

    contentWrapper: {
      height,
      paddingLeft: paddingHoriz,
      backgroundColor: bgColor,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    text: {
      color,
      fontSize,
      fontFamily,
      fontWeight,
      maxWidth: textMaxWidth,
    },

    suffix: {
      position: 'absolute',
      top: height / 2 - iconSize / 2,
      right: suffixPaddingRight,
    },
  };

  return (
    <React.Fragment>
      <View style={styles.root}>
        <View style={styles.container}>
          <TouchableHighlight onPress={() => onPress()} underlayColor={bgColor}>
            <View style={styles.contentWrapper}>
              <View style={styles.content}>
                {iconName && (
                  <View style={{ marginRight: iconGap }}>
                    <BaseIcon name={iconName} kind={iconKind} size={iconSize} />
                  </View>
                )}
                <Text style={styles.text}>{text}</Text>
              </View>
            </View>
          </TouchableHighlight>
          <View style={styles.suffix}>
            <TouchableHighlight onPress={() => onPress()} underlayColor={bgColor}>
              <BaseIcon name="chevron-next" size={iconSize} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};
