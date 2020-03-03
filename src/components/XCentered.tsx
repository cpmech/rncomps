import React from 'react';
import { View } from 'react-native';

interface IProps {
  bgColor?: string;
}

export const XCentered: React.FC<IProps> = ({ bgColor, children }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: bgColor || '#fff4ff',
      }}
    >
      {children}
    </View>
  );
};
