import React, { ReactNode, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, TextInputProps } from 'react-native';
import { IStyles } from './types';
import { IStyleTypeA, defaultStyleTypeA, MoveAndScale } from './helpers';

export interface IInputTypeAProps extends IStyleTypeA, TextInputProps {
  label: string;
  value: string;
  onChangeText: (value: string) => void;

  suffix?: ReactNode;
  error?: boolean | string;
}

export const InputTypeA: React.FC<IInputTypeAProps> = ({
  label,
  value,
  onChangeText,

  suffix,
  error = false,

  // dimensions
  height = defaultStyleTypeA.height,
  width = defaultStyleTypeA.width,
  paddingHoriz = defaultStyleTypeA.paddingHoriz,
  gapXflatLeft = defaultStyleTypeA.gapXflatLeft,
  suffixPaddingRight = defaultStyleTypeA.suffixPaddingRight,
  marginVert = defaultStyleTypeA.marginVert,
  fontSize = defaultStyleTypeA.fontSize,
  fontFamily = defaultStyleTypeA.fontFamily,
  fontWeight = defaultStyleTypeA.fontWeight,
  labelScale = defaultStyleTypeA.labelScale,
  factorFontsize2width = defaultStyleTypeA.factorFontsize2width,
  durationMS = defaultStyleTypeA.durationMS,

  // border
  borderRadius = defaultStyleTypeA.borderRadius,
  borderWidth = defaultStyleTypeA.borderWidth,
  flatLeft = defaultStyleTypeA.flatLeft,
  flatRight = defaultStyleTypeA.flatRight,
  noBorderLeft = defaultStyleTypeA.noBorderLeft,

  // colors
  color = defaultStyleTypeA.color,
  bgColor = defaultStyleTypeA.bgColor,
  hlColor = defaultStyleTypeA.hlColor,
  errorColor = defaultStyleTypeA.errorColor,
  mutedColor = defaultStyleTypeA.mutedColor,
  borderColor = defaultStyleTypeA.borderColor,

  ...rest
}) => {
  if (error) {
    color = errorColor;
    hlColor = errorColor;
    mutedColor = errorColor;
    borderColor = errorColor;
  }

  const hasValue = !!value;
  const refInput = useRef<TextInput>(null);
  const [anim, setAnim] = useState({ steady: hasValue, enabled: hasValue });
  const [colors, setColors] = useState({
    border: borderColor,
    label: mutedColor,
  });

  const radius = borderRadius > height / 2 ? height / 2 : borderRadius;

  const labelHeightBefore = fontSize;
  const labelWidthBefore = fontSize * label.length * factorFontsize2width;
  const labelHeightAfter = fontSize * labelScale;

  const marginTop = marginVert || labelHeightAfter / 2;

  const labelDx = -paddingHoriz + (flatLeft ? gapXflatLeft : radius);
  const labelDy = -height / 2;

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
      fontFamily,
      fontWeight,
      paddingLeft: paddingHoriz,
      color,
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
      fontFamily,
      color: colors.label,
    },

    suffix: {
      position: 'absolute',
      top: height / 2 - fontSize / 2,
      right: suffixPaddingRight,
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
  };

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
        {suffix && <View style={styles.suffix}>{suffix}</View>}
        <View style={styles.animationWrapper}>
          <MoveAndScale
            dx={labelDx}
            dy={labelDy}
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
