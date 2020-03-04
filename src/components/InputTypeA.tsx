import React, { ReactNode, useState, useRef, useEffect } from 'react';
import { Animated, View, Text, TransformsStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { IStyles } from './types';
import { useAnimation } from './helpers';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
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
}

export interface IMotionProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  width: number;
  height: number;
  scale: number;
  enabled?: boolean;
}

export const Motion: React.FC<IMotionProps> = ({
  startX,
  startY,
  endX,
  endY,
  width,
  height,
  scale,
  enabled = false,
  children,
}) => {
  const animation = useAnimation(enabled, 500);

  /*
  const doScale = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [2, 1],
        }),
      },
    ],
  };

  const position = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [startX - width / 2 - (width * initialScale) / 2, endX],
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [startY - height / 2 - (height * initialScale) / 2, endY],
        }),
      },
    ],
  };
  */

  return (
    <Animated.View
      style={{
        transform: [
          {
            scaleX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, scale],
            }),
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0],
            }),
            /*
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, deltaY],
            }),
            */
          },
        ],
      }}
    >
      {children}
    </Animated.View>
  );
};

export const InputTypeA: React.FC<IProps> = ({
  value,
  onChange,
  label,
  password,
  suffix,
  suffixPaddingRight,
  readOnly = false,
  textMode = false,

  height = 200,
  width = '100%',
  paddingHoriz = 20,
  marginVert,

  borderRadius = 100,
  borderWidth = 1,

  flatLeft = false,
  flatRight = false,

  fontSize = 40,
  labelScale = 0.5,
  labelXgap = 5,

  color = '#484848',
  bgColor = '#ffffff',
  hlColor = '#1ca086',
  errorColor = '#e62739',
  mutedColor = '#898989',
  borderColor = '#cccccc',
  darkMode = false,

  error = false,
}) => {
  const hasValue = !!value;
  const radius = borderRadius > height / 2 ? height / 2 : borderRadius;
  const scaledLabelFZ = labelScale * fontSize;
  const labelDy = scaledLabelFZ / 2 - fontSize / 2 + height / 2;
  const marginTop = marginVert || scaledLabelFZ / 2;

  const [anim, setAnim] = useState({
    // deltaX: labelDx,
    // deltaY: -labelDy,
    // scale: labelScale,
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 100,
    width: 100,
    height: 50,
    scale: 1.0,
    enabled: true,
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

  const border = {
    borderColor,
    borderWidth,
    borderTopLeftRadius: flatLeft ? 0 : radius,
    borderBottomLeftRadius: flatLeft ? 0 : radius,
    borderTopRightRadius: flatRight ? 0 : radius,
    borderBottomRightRadius: flatRight ? 0 : radius,
  };

  const h = fontSize;
  const w = 140; // label.length * fontSize * 0.7;

  const css: IStyles = {
    root: {
      height: height + marginTop, //marginTop,
      // backgroundColor: 'red',
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

  const dx = -w / 2;
  const dy = -h / 2;
  const dz = 0;

  // prettier-ignore
  const I = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
  ];

  // prettier-ignore
  const T = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    dx, dy, dz, 1,
  ];

  // prettier-ignore
  const U = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    -dx, -dy, -dz, 1,
  ];

  const s = 0.7;

  const transform: TransformsStyle = {
    transform: [
      {
        translateX: dx,
      },
      {
        translateY: h,
      },
      {
        scaleX: s,
      },
      {
        translateX: -dx + (s * w) / 2,
      },
      // {
      //   translateY: 0,
      // },
    ],
    // transform: [{ matrix: T }],
  };

  return (
    <View style={transform as TransformsStyle}>
      <View style={css.labelBox}>
        <Text style={{ fontSize }}>TESTE</Text>
      </View>
    </View>
  );

  return (
    <View style={css.root}>
      <TextInput
        style={css.input}
        value={value}
        onChangeText={text => onChange(text)}
        onFocus={() => {
          setAnim({ ...anim, enabled: true });
        }}
        onBlur={() => {
          if (!value) {
            setAnim({ ...anim, enabled: false });
          }
        }}
        underlineColorAndroid="transparent"
      />
      <View style={{ ...css.labelBox, backgroundColor: 'blue' }}>
        <Text style={css.label}>{label}</Text>
      </View>
      {/* <Motion {...anim}> */}
      {/* <Text>{labelSize.width}</Text> */}
      <View style={transform as TransformsStyle}>
        <View style={css.labelBox} collapsable={false}>
          <Text style={css.label}>{label}</Text>
        </View>
      </View>
      {/* </Motion> */}
    </View>
  );
};
