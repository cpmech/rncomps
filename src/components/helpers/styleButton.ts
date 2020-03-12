import { FontWeight } from '../types';

export interface IStyleButton {
  disabled?: boolean;
  outline?: boolean;
  color?: string;
  backgroundColor?: string;
  fgDisabled?: string;
  bgDisabled?: string;
  fontFamily?: string;
  fontWeight?: FontWeight;
  fontSize?: number;
  iconDeltaSize?: number;
  iconGap?: number;
  height?: number;
  width?: number;
  minWidth?: number;
  borderWidth?: number;
  borderRadius?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

export const defaultStyleButton = {
  disabled: false,
  outline: false,
  color: '#ffffff',
  backgroundColor: '#2f95dc',
  fgDisabled: '#a4a4a4',
  bgDisabled: '#dfdfdf',
  fontFamily: undefined,
  fontWeight: undefined,
  fontSize: 24,
  iconDeltaSize: 5,
  iconGap: 10,
  height: 45,
  width: undefined,
  minWidth: undefined,
  borderWidth: 1,
  borderRadius: 600,
  paddingVertical: 10,
  paddingHorizontal: 10,
};
