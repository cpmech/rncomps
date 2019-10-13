import React from 'react';
import { ActivityIndicator } from 'react-native';

export interface IBaseSpinnerProps {
  darkBackground?: boolean;
  darkColor?: string;
  lightColor?: string;
}

export const BaseSpinner: React.FC<IBaseSpinnerProps> = ({
  darkBackground,
  darkColor = '#404040',
  lightColor = '#cecece',
}) => <ActivityIndicator size="large" color={darkBackground ? lightColor : darkColor} />;
