import { FontWeight, TextDecorationLine } from '../types';

export interface IStyleLink {
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: FontWeight;
  color?: string;
  underlayColor?: string;
  textDecorationLine?: TextDecorationLine;
}

export const defaultStyleLink = {
  fontSize: 18,
  fontFamily: undefined,
  fontWeight: undefined,
  color: '#2296f3',
  underlayColor: 'transparent',
  textDecorationLine: 'underline' as TextDecorationLine,
};
