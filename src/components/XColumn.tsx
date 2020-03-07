import React from 'react';
import { View } from 'react-native';

interface IProps {
  bgColor?: string;
}

export const XColumn: React.FC<IProps> = ({ bgColor, children }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor || '#e8f4ff',
      }}
    >
      {children}
    </View>
  );
};
