import React from 'react';
import { View } from 'react-native';
import { IStyles } from './types';

const s: IStyles = {
  root: {
    marginVertical: 7,
  },
  horizBar: {
    width: '100%',
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
  },
};

export const BaseHorizBar: React.FC = () => (
  <View style={s.root}>
    <View style={s.horizBar} />
  </View>
);
