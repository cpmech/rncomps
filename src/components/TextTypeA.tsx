import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { IStyles } from './types';
import { IStyleTypeA, defaultStyleTypeA } from './helpers';

export interface ITextTypeAProps extends IStyleTypeA {
  label: string;
  value: string;
  material?: boolean;
  suffix?: ReactNode;
  textMaxWidth?: number;
}

export const TextTypeA: React.FC<ITextTypeAProps> = ({
  label,
  value,
  material,
  suffix,
  textMaxWidth,

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

  // border
  borderRadius = defaultStyleTypeA.borderRadius,
  borderWidth = defaultStyleTypeA.borderWidth,
  flatLeft = defaultStyleTypeA.flatLeft,
  flatRight = defaultStyleTypeA.flatRight,
  noBorderLeft = defaultStyleTypeA.noBorderLeft,

  // colors
  color = defaultStyleTypeA.color,
  bgColor = defaultStyleTypeA.bgColor,
  mutedColor = defaultStyleTypeA.mutedColor,
  borderColor = defaultStyleTypeA.borderColor,
}) => {
  if (material) {
    borderRadius = 0;
    borderWidth = 0;
    paddingHoriz = 0;
    suffixPaddingRight = 0;
  }

  const radius = borderRadius > height / 2 ? height / 2 : borderRadius;

  const labelHeightBefore = fontSize;
  const labelWidthBefore = fontSize * label.length * factorFontsize2width;
  const labelHeightAfter = fontSize * labelScale;

  const marginTop = marginVert || labelHeightAfter / 2;

  const styles: IStyles = {
    root: {
      width,
      height: height + marginTop + 2,
    },

    container: {
      position: 'absolute',
      top: marginTop,
      width: '100%',
    },

    input: {
      height,
      borderColor,
      borderLeftWidth: noBorderLeft ? undefined : borderWidth,
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
      paddingRight: paddingHoriz,
      color,
      backgroundColor: bgColor,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    inputText: {
      color,
      fontSize,
      fontFamily,
      fontWeight,
      maxWidth: textMaxWidth,
    },

    animationWrapper: {
      position: 'absolute',
      top: -labelHeightBefore / 2,
      left: material ? 0 : flatLeft ? gapXflatLeft : paddingHoriz,
    },

    labelWrapper: {
      width: material ? undefined : labelWidthBefore * labelScale,
      height: labelHeightBefore * labelScale,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor,
    },

    label: {
      fontSize: fontSize * labelScale,
      fontFamily,
      color: mutedColor,
    },

    suffix: {
      position: 'absolute',
      top: height / 2 - fontSize / 2,
      right: suffixPaddingRight,
    },
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.input}>
          <Text style={styles.inputText}>{value}</Text>
        </View>
        {suffix && <View style={styles.suffix}>{suffix}</View>}
        <View style={styles.animationWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label} numberOfLines={1}>
              {label}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
