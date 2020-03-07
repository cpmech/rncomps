import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type IStyle = ViewStyle | TextStyle | ImageStyle;

export interface IStyles {
  [K: string]: IStyle;
}

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type TextDecorationLine = 'none' | 'underline' | 'line-through' | 'underline line-through';
