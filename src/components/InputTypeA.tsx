import React, { ReactNode, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { IStyles } from './types';
import { MoveAndScale } from './helpers';

interface IProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  password?: boolean;
  suffix?: ReactNode;
  suffixPaddingRight?: number;
  readOnly?: boolean;
  textMode?: boolean;

  height?: number;
  width?: string;
  paddingHoriz?: number;
  marginVert?: number;

  borderRadius?: number;
  borderWidth?: number;

  flatLeft?: boolean;
  flatRight?: boolean;

  fontSize?: number;
  labelScale?: number;
  labelXgap?: number;

  color?: string;
  bgColor?: string;
  hlColor?: string;
  errorColor?: string;
  mutedColor?: string;
  borderColor?: string;
  darkMode?: boolean;

  error?: boolean | string;

  factorFontsize2width?: number;
  durationMS?: number;
}

export const InputTypeA: React.FC<IProps> = ({
  label,
  value,
  onChange,
  password,
  suffix,
  suffixPaddingRight,
  readOnly = false,
  textMode = false,

  height = 50,
  width = '100%',
  paddingHoriz = 20,
  marginVert,

  borderRadius = 1000,
  borderWidth = 1,

  flatLeft = false,
  flatRight = false,

  fontSize = 18,
  labelScale = 0.8,
  labelXgap = 5,

  color = '#484848',
  bgColor = '#ffffff',
  hlColor = '#1ca086',
  errorColor = '#e62739',
  mutedColor = '#898989',
  borderColor = '#cccccc',
  darkMode = false,

  error = false,

  factorFontsize2width = 0.65,
  durationMS = 300,
}) => {
  const hasValue = !!value;
  const refInput = useRef<TextInput>(null);
  const [anim, setAnim] = useState({ steady: hasValue, enabled: hasValue });

  if (darkMode) {
    color = 'white';
    hlColor = 'white';
    mutedColor = '#cccccc';
  }

  if (error) {
    color = errorColor;
    hlColor = errorColor;
    mutedColor = errorColor;
    borderColor = errorColor;
  }

  const radius = borderRadius > height / 2 ? height / 2 : borderRadius;

  const labelHeightBefore = fontSize;
  const labelWidthBefore = fontSize * label.length * factorFontsize2width;
  const labelHeightAfter = fontSize * labelScale;

  const marginTop = marginVert || labelHeightAfter / 2;

  const dx = +height / 2 - paddingHoriz;
  const dy = -height / 2;

  const styles: IStyles = {
    root: {
      width,
      height: height + marginTop,
    },

    container: {
      position: 'absolute',
      top: marginTop,
      width: '100%',
    },

    input: {
      height,
      borderColor,
      borderWidth,
      borderTopLeftRadius: flatLeft ? 0 : radius,
      borderBottomLeftRadius: flatLeft ? 0 : radius,
      borderTopRightRadius: flatRight ? 0 : radius,
      borderBottomRightRadius: flatRight ? 0 : radius,
      fontSize,
      paddingLeft: paddingHoriz,
      color: textMode ? mutedColor : color,
      backgroundColor: bgColor,
    },

    animationWrapper: {
      position: 'absolute',
      top: height / 2 - labelHeightBefore / 2,
      left: paddingHoriz,
    },

    labelWrapper: {
      width: labelWidthBefore,
      height: labelHeightBefore,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor,
    },

    label: {
      fontSize,
    },
  };

  const onFocus = () => {
    if (hasValue) {
      return;
    }
    setAnim({ steady: false, enabled: true });
  };

  const onBlur = () => {
    if (!hasValue) {
      setAnim({ steady: false, enabled: false });
    }
  };

  const onPress = () => {
    if (refInput.current?.isFocused()) {
      return;
    }
    if (!hasValue) {
      refInput.current?.focus();
      setAnim({ steady: false, enabled: true });
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TextInput
          ref={refInput}
          value={value}
          style={styles.input}
          onChangeText={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          underlineColorAndroid="transparent"
        />
        <View style={styles.animationWrapper}>
          <MoveAndScale
            dx={dx}
            dy={dy}
            width={labelWidthBefore}
            sFactor={labelScale}
            durationMS={durationMS}
            {...anim}
          >
            <TouchableWithoutFeedback onPress={onPress}>
              <View style={styles.labelWrapper}>
                <Text style={styles.label} numberOfLines={1}>
                  {label}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </MoveAndScale>
        </View>
      </View>
    </View>
  );
};

/*
  const css: IStyles = {
    root: {
      height: height + marginTop,
    },
    input: {
      ...border,
      height,
      width,
      paddingLeft: paddingHoriz + labelXgap,
      paddingRight: paddingHoriz,
      color: textMode ? mutedColor : color,
      backgroundColor: bgColor,
      fontSize: fontSize,
      position: 'absolute',
      top: marginTop,
    },
    labelBox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      height: h,
      width: w,
      // backgroundColor: bgColor,
      backgroundColor: 'red',
      // top: labelDy,
      // left: paddingHoriz,
      top: 0,
      left: 0,
      opacity: 1,
    },
    label: {
      color,
      fontSize,
      marginLeft: labelXgap,
      marginRight: labelXgap,
    },
  };
  */
