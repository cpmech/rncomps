import { FontWeight, TextDecorationLine } from '../types';

export interface IStyleLink {
  fontSize?: number;
  fontWeight?: FontWeight;
  color?: string;
  colorHover?: string;
  darkBackground?: boolean;
  textDecorationLine?: TextDecorationLine;
}

export const defaultStyleLink = {
  fontSize: 18,
  fontWeight: undefined,
  color: '#2296f3',
  colorHover: '#efefef',
  darkBackground: undefined,
  textDecorationLine: 'underline' as TextDecorationLine,
};
