import React from 'react';
import { Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { IStyle } from './types';

interface IProps {
  name: string;
  style?: IStyle;
  color?: string;
  size?: number;
  kind?: string; // ion [default], material
}

export const BaseIcon: React.FC<IProps> = ({
  name,
  style,
  color = '#343434',
  size = 26,
  kind = 'ion',
}) => {
  let n = Platform.select({ ios: `ios-${name}`, android: `md-${name}` });
  if (n === undefined) {
    n = 'happy-outline';
  }
  if (name === 'logo-tux' || name === 'logo-game-controller-b') {
    n = name;
  }
  if (name === 'arrow-next') {
    n = 'ios-arrow-forward';
  }
  if (name === 'arrow-picker') {
    n = 'ios-arrow-down';
  }
  if (name === 'arrow-picker-up') {
    n = 'ios-arrow-up';
  }
  switch (kind) {
    case 'material':
      return <MaterialIcon name={n} size={size} color={color} style={style} />;
  }
  return <IonIcon name={n} size={size} color={color} style={style} />;
};
