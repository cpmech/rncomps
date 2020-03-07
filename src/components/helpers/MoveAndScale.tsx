import React from 'react';
import { Animated } from 'react-native';
import { useAnimation } from './useAnimation';

interface IMoveAndScaleProps {
  dx: number;
  dy: number;
  width: number;
  sFactor: number;
  enabled: boolean;
  steady?: boolean;
  durationMS?: number;
}

export const MoveAndScale: React.FC<IMoveAndScaleProps> = ({
  dx,
  dy,
  width,
  sFactor,
  enabled,
  steady = false,
  durationMS = 500,
  children,
}) => {
  const animation = useAnimation(enabled, durationMS);

  const newWidth = sFactor * width;
  const xCorrection = -width / 2 + newWidth / 2;

  const positionStyle = steady
    ? { transform: [{ translateX: dx + xCorrection }, { translateY: dy }] }
    : {
        transform: [
          {
            translateX: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, dx + xCorrection],
            }),
          },
          {
            translateY: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, dy],
            }),
          },
        ],
      };

  const scaleStyle = steady
    ? { transform: [{ scale: sFactor }] }
    : {
        transform: [
          {
            scale: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, sFactor],
            }),
          },
        ],
      };

  return (
    <Animated.View style={positionStyle}>
      <Animated.View style={scaleStyle}>{children}</Animated.View>
    </Animated.View>
  );
};
