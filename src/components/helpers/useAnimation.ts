import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export const useAnimation = (enabled: boolean, duration: number) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      duration,
      useNativeDriver: true,
    }).start();
  }, [enabled]);
  return animation;
};
