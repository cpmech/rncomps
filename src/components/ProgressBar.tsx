import React from 'react';
import { View } from 'react-native';
import { ProgressLinear } from './ProgressLinear';

export interface IProgressBar {
  progress: number;
  width?: string;
}

export const ProgressBar: React.FC<IProgressBar> = ({ progress, width = '80%' }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ width }}>
        <ProgressLinear progress={progress} />
      </View>
    </View>
  );
};
