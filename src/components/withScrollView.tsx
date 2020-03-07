import React from 'react';
import { ScrollView, View } from 'react-native';
import { IStyles } from './types';

export const svStyles: IStyles = {
  root: {
    flex: 1,
  },
  content: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  extraSpace: {
    marginTop: 200,
  },
};

export const withScrollView = <P extends object>(
  Comp: React.ComponentType<P>,
  backgroundColor?: string,
): React.FC<P> => ({ ...props }) => (
  <ScrollView style={{ backgroundColor }}>
    <View style={svStyles.root}>
      <View style={svStyles.content}>
        <Comp {...(props as P)} />
        <View style={svStyles.extraSpace} />
      </View>
    </View>
  </ScrollView>
);
