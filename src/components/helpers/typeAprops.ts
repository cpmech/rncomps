export interface ITypeAProps {
  // dimensions
  height?: number;
  width?: string;
  paddingHoriz?: number;
  gapXflatLeft?: number;
  suffixPaddingRight?: number;
  marginVert?: number;
  fontSize?: number;
  labelScale?: number;
  factorFontsize2width?: number;
  durationMS?: number;

  // border
  borderRadius?: number;
  borderWidth?: number;
  flatLeft?: boolean;
  flatRight?: boolean;
  noBorderLeft?: boolean;

  // colors
  color?: string;
  bgColor?: string;
  hlColor?: string;
  errorColor?: string;
  mutedColor?: string;
  borderColor?: string;
  darkMode?: boolean;
}

export const typeAdefault = {
  // dimensions
  height: 50,
  width: '100%',
  paddingHoriz: 20,
  gapXflatLeft: 8,
  suffixPaddingRight: 20,
  marginVert: undefined,
  fontSize: 18,
  labelScale: 0.8,
  factorFontsize2width: 0.65,
  durationMS: 300,

  // border
  borderRadius: 1000,
  borderWidth: 1,
  flatLeft: false,
  flatRight: false,
  noBorderLeft: false,

  // colors
  color: '#484848',
  bgColor: '#ffffff',
  hlColor: '#1ca086',
  errorColor: '#e62739',
  mutedColor: '#898989',
  borderColor: '#cccccc',
  darkMode: false,
};
