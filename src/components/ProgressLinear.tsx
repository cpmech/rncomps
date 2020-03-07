import React from 'react';
import { View, Text } from 'react-native';

export interface IProgressLinearProps {
  progress: number;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  barColor?: string;
  borderRadius?: number;
  height?: number;
}

export const ProgressLinear: React.FC<IProgressLinearProps> = ({
  progress,
  color = '#ffffff',
  backgroundColor = '#ffffff',
  borderColor = '#4d50c6',
  barColor = '#4d50c6',
  borderRadius = 300,
  height = 24,
}) => {
  const p = progress || 0;
  const width = p < 0 ? 0 : p > 100 ? 100 : p;

  return (
    <View
      style={{
        backgroundColor,
        borderWidth: borderColor ? 1 : undefined,
        borderColor,
        borderRadius: 300,
        height,
      }}
    >
      <View
        style={{
          height,
          width: `${width}%`,
          backgroundColor: barColor,
          borderRadius: borderRadius,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color,
            fontWeight: 'bold',
            fontSize: 15,
            textAlign: 'center',
          }}
        >
          {width > 24 && `${width}%`}
        </Text>
      </View>
    </View>
  );
};
