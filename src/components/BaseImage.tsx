import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { IStyles } from './types';

const s: IStyles = {
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

interface IProps {
  image: ImageSourcePropType;
  alignLeft?: boolean;
  height?: number;
  width?: number;
}

export const BaseImage: React.FC<IProps> = ({ image, alignLeft, height = 80, width }) => (
  <View style={{ ...s.root, alignItems: alignLeft ? 'flex-start' : 'center' }}>
    <Image style={width ? { height, width } : { height }} source={image} resizeMode="contain" />
  </View>
);
