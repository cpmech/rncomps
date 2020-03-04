import { IStyles } from './types';

export interface ITypeAProps {
  height?: number;
  borderRadius?: number;
  flatLeft?: boolean;
  flatRight?: boolean;
  width?: string;
  fontSize?: number;
  labelScale?: number;
  paddingHoriz?: number;
  labelXgap?: number;
  mutedColor?: string;
  bgColor?: string;
  borderColor?: string;
  darkMode?: boolean;
  borderWidth?: number;
  error?: boolean | string;
  color?: string;
  hlColor?: string;
  colorError?: string;
  marginVert?: number;
  extraDeltaLabel?: number; // to account for weird fonts, because all the computations here are precise
}

export const getTypeAcss = (
  textMode: boolean,
  hasValue: boolean,
  pickerMode: boolean,
  {
    height = 200,
    borderRadius = 100,
    flatLeft = false,
    flatRight = false,
    width = '100%',
    fontSize = 40,
    labelScale = 0.5,
    paddingHoriz = 20,
    labelXgap = 5,
    mutedColor = '#898989',
    bgColor = '#ffffff',
    borderColor = '#cccccc',
    darkMode = false,
    borderWidth = 1,
    error = false,
    color = '#484848',
    hlColor = '#1ca086',
    colorError = '#e62739',
    extraDeltaLabel = 0,
    marginVert,
  }: ITypeAProps,
): { css: IStyles; labelDx: number; labelDy: number; labelScale: number } => {
  const radius = borderRadius > height / 2 ? height / 2 : borderRadius;
  const scaledLabelFZ = labelScale * fontSize;
  const labelDy = scaledLabelFZ / 2 - fontSize / 2 + height / 2;
  const marginTop = marginVert || scaledLabelFZ / 2;

  if (darkMode) {
    color = 'white';
    hlColor = 'white';
    mutedColor = '#cccccc';
  }

  if (error) {
    color = colorError;
    hlColor = colorError;
    mutedColor = colorError;
    borderColor = colorError;
  }

  const border = {
    borderColor,
    borderWidth,
    borderTopLeftRadius: flatLeft ? 0 : radius,
    borderBottomLeftRadius: flatLeft ? 0 : radius,
    borderTopRightRadius: flatRight ? 0 : radius,
    borderBottomRightRadius: flatRight ? 0 : radius,
  };

  return {
    css: {
      root: {
        height: height + marginTop, //marginTop,
        // backgroundColor: 'red',
      },
      input: {
        ...border,
        height,
        width,
        paddingLeft: paddingHoriz + labelXgap,
        paddingRight: paddingHoriz,
        color: textMode ? mutedColor : color,
        backgroundColor: bgColor,
        fontSize: fontSize,
        position: 'absolute',
        top: marginTop,
      },
      labelBox: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        height: fontSize,
        // backgroundColor: bgColor,
        backgroundColor: 'red',
        left: paddingHoriz,
        top: labelDy,
      },
      label: {
        color,
        fontSize,
        marginLeft: labelXgap,
        marginRight: labelXgap,
      },
      /*
      label: hasValue
        ? {
            fontSize: scaledLabelFZ,
            position: 'absolute',
            backgroundColor: bgColor,
            // left: borderWidth === 0 ? 0 : labelPaddingHoriz,
            // marginLeft: borderWidth === 0 ? 0 : paddingHoriz + labelPaddingHoriz,
            // paddingLeft: borderWidth === 0 ? 0 : labelPaddingHoriz,
            // paddingRight: borderWidth === 0 ? 0 : labelPaddingHoriz,
          }
        : {
            // textAlign: 'center',
            // height: labelFontSize,
            // lineHeight: labelFontSize,
            fontSize: labelFontSize,
            paddingLeft: paddingHoriz,
            // paddingRight: labelPaddingHoriz,
            // position: 'absolute',
            // left: paddingHoriz + 50,
            // top: marginTop,
            // backgroundColor: 'red',
          },
          */
    },
    labelDx: radius - paddingHoriz,
    labelDy,
    labelScale,
  };

  /*
  const common = `
    position: relative;
    height: ${height}px;
    margin-top: ${marginTop}px;
    width: ${width};
    input {
      font-size: ${fontSize}px;
      box-sizing: border-box;
      height: ${height}px;
      width: 100%;
      padding-left: ${paddingHoriz}px;
      padding-right: ${paddingHoriz}px;
      border: ${borderWidth}px solid ${borderColor};
      border-radius: ${borderRadius}px;
      ${flatLeft ? `border-top-left-radius:0;border-bottom-left-radius:0;` : ''}
      ${flatRight ? `border-top-right-radius:0;border-bottom-right-radius:0;` : ''}
      color: ${textMode ? mutedColor : color};
      background-color: ${bgColor};
      resize: none;
      outline: none;
      ${pickerMode && !textMode ? `cursor:pointer;` : ''}
    }
    input[required] + label[placeholder] {
      display: block;
      pointer-events: none;
      line-height: ${labelFontSize}px;
      margin-top: -${deltaLabel}px;
    }
  `;

  const highlight = `
    input[required]:focus {
      border-color: ${hlColor};
    }
    input[required]:focus + label[placeholder]:before {
      color: ${hlColor};
    }
  `;

  const transform = `
    transform-origin: center left;
    transform: translate(0, -${deltaLine}px) scale(${scaleLabel}, ${scaleLabel});
    padding-left: ${borderWidth === 0 ? 0 : labelPaddingHoriz}px;
  `;

  const placeholder = `
    content: attr(placeholder);
    display: inline-block;
    font-size: ${labelFontSize}px;
    margin-left: ${borderWidth === 0 ? 0 : paddingHoriz + labelPaddingHoriz}px;
    padding-right: ${labelPaddingHoriz}px;
    color: ${mutedColor};
    white-space: nowrap;
    transition: 0.3s ease-in-out;
    background-image: linear-gradient(to bottom, ${bgColor}, ${bgColor});
    background-size: 100% ${height}px;
    background-repeat: no-repeat;
    background-position: center;
  `;

  if (textMode) {
    return `
      ${common}
      input[required] + label[placeholder]:before {
        ${transform}
        ${placeholder}
      }
    `;
  }

  if (pickerMode) {
    return `
      ${common}
      ${highlight}
      input[required] + label[placeholder]:before {
        ${transform}
        ${placeholder}
      }
    `;
  }

  return `
    ${common}
    ${highlight}
    input[required]:focus + label[placeholder]:before,
    input[required]:valid + label[placeholder]:before {
      transition-duration: ${transTime};
      ${transform}
    }
    input[required]:invalid + label[placeholder][alt]:before {
      content: attr(placeholder);
    }
    input[required] + label[placeholder]:before {
      ${placeholder}
    }
  `;
  */
};
