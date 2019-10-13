import React from 'react';
import { View } from 'react-native';
import { BaseSpinner, IBaseSpinnerProps } from './BaseSpinner';
import { IStyles } from './types';

const s: IStyles = {
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

interface IProps extends IBaseSpinnerProps {
  backgroundColor?: string;
}

export const BaseSpinnerScreen: React.FC<IProps> = props => (
  <View style={{ ...s.root, backgroundColor: props.backgroundColor }}>
    <BaseSpinner {...props} />
  </View>
);
