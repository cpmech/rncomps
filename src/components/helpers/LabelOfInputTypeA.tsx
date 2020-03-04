import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';

interface ILabelOfInputTypeAProps {}

export const LabelOfInputTypeA: React.FC<ILabelOfInputTypeAProps> = () => {
  const ref = useRef<Text>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.measure((x, y, w, h, px, py) => {
        console.log('dims =', { x, y, w, h, px, py });
      });
    }
  }, [ref]);

  return (
    <View style={{ opacity: 1 }} collapsable={false} onLayout={e => console.log(e.nativeEvent)}>
      <Text ref={ref} onLayout={e => console.log('>>', e.nativeEvent)}>
        T
      </Text>
    </View>
  );
};
