import React from 'react';
import { View } from 'react-native';

interface IProps {
  space?: number;
}

export const BaseSpacer: React.FC<IProps> = ({ space = 10 }) => (
  // tslint:disable-next-line: jsx-self-close
  <View style={{ marginBottom: space, marginTop: space }}></View>
);
