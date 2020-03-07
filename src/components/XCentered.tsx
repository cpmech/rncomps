import React from 'react';
import { View } from 'react-native';

interface IProps {
  bgColor?: string;
}

export const XCentered: React.FC<IProps> = ({ bgColor, children }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor || '#fff4ff',
      }}
    >
      {children}
    </View>
  );
};
