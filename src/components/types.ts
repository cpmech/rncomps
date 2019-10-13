import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type IStyle = ViewStyle | TextStyle | ImageStyle;

export interface IStyles {
  [K: string]: IStyle;
}
