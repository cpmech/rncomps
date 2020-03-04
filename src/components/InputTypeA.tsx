import React, { ReactNode, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, TextInputProps } from 'react-native';
import { IStyles } from './types';
import { ITypeAProps, typeAdefault, MoveAndScale } from './helpers';

interface IInputTypeAProps extends ITypeAProps, TextInputProps {
  label: string;
  value: string;
  onChangeText: (value: string) => void;

  suffix?: ReactNode;
  password?: boolean;
  readOnly?: boolean;
  textMode?: boolean;
  error?: boolean | string;
}

export const InputTypeA: React.FC<IInputTypeAProps> = ({
  label,
  value,
  onChangeText,

  suffix,
  password,
  readOnly = false,
  textMode = false,
  error = false,

  // dimensions
  height = typeAdefault.height,
  width = typeAdefault.width,
  paddingHoriz = typeAdefault.paddingHoriz,
  gapXflatLeft = typeAdefault.gapXflatLeft,
  suffixPaddingRight = typeAdefault.suffixPaddingRight,
  marginVert = typeAdefault.marginVert,
  fontSize = typeAdefault.fontSize,
  labelScale = typeAdefault.labelScale,
  factorFontsize2width = typeAdefault.factorFontsize2width,
  durationMS = typeAdefault.durationMS,

  // border
  borderRadius = typeAdefault.borderRadius,
  borderWidth = typeAdefault.borderWidth,
  flatLeft = typeAdefault.flatLeft,
  flatRight = typeAdefault.flatRight,
  noBorderLeft = typeAdefault.noBorderLeft,

  // colors
  color = typeAdefault.color,
  bgColor = typeAdefault.bgColor,
  hlColor = typeAdefault.hlColor,
  errorColor = typeAdefault.errorColor,
  mutedColor = typeAdefault.mutedColor,
  borderColor = typeAdefault.borderColor,
  darkMode = typeAdefault.darkMode,

  ...rest
}) => {
  const hasValue = !!value;
  const refInput = useRef<TextInput>(null);
  const [anim, setAnim] = useState({ steady: hasValue, enabled: hasValue });
  const [colors, setColors] = useState({
    border: borderColor,
    label: mutedColor,
  });

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

  const dx = -paddingHoriz + (flatLeft ? gapXflatLeft : radius);
  const dy = -height / 2;

  const selBorderWidth = colors.border === borderColor ? undefined : borderWidth;

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
      borderColor: colors.border,
      borderLeftWidth: noBorderLeft ? selBorderWidth : borderWidth,
      borderRightWidth: borderWidth,
      borderTopWidth: borderWidth,
      borderBottomWidth: borderWidth,
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
      color: colors.label,
    },
  };

  const onFocus = () => {
    setColors({ border: hlColor, label: hlColor });
    if (hasValue) {
      return;
    }
    setAnim({ steady: false, enabled: true });
  };

  const onBlur = () => {
    setColors({ border: borderColor, label: mutedColor });
    if (!hasValue) {
      setAnim({ steady: false, enabled: false });
    }
  };

  const onPress = () => {
    if (refInput.current?.isFocused()) {
      return;
    }
    refInput.current?.focus(); // => this will trigger the animation
    // if (!hasValue) {
    // refInput.current?.focus();
    // setAnim({ steady: false, enabled: true });
    // }
  };

  const renderSuffix = () => (
    <View
      style={{
        position: 'absolute',
        top: height / 2 - fontSize / 2,
        right: suffixPaddingRight,
      }}
    >
      {suffix}
    </View>
  );

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TextInput
          ref={refInput}
          value={value}
          style={styles.input}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          underlineColorAndroid="transparent"
          {...rest}
        />
        {suffix && renderSuffix()}
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
