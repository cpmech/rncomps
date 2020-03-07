import React from 'react';
import { View, Text } from 'react-native';

export const hasProp = (object: any, propertyName: string): boolean => {
  return Object.prototype.hasOwnProperty.call(object, propertyName);
};

interface IFormErrorFieldProps {
  error?: any;
  fixedHeight?: boolean;
  height?: number;
  fontSize?: number;
  hpadding?: number;
  vpadding?: number;
  marginTop?: number;
  color?: string;
}

export const FormErrorField: React.FC<IFormErrorFieldProps> = ({
  error,
  fixedHeight = false,
  height = 18,
  fontSize = 14,
  hpadding = 20,
  vpadding = 2,
  marginTop = 7,
  color = '#e62739',
}) => {
  if (error === undefined || error === null) {
    return null;
  }

  let message = '';
  if (typeof error === 'string') {
    message = error;
  } else if (hasProp(error, 'message')) {
    message = error.message;
  } else {
    message = JSON.stringify(error);
  }

  if (!message && !fixedHeight) {
    return null;
  }

  const styleRoot = fixedHeight
    ? {
        height,
        paddingVertical: vpadding,
        paddingHorizontal: hpadding,
        marginTop: marginTop,
      }
    : {
        paddingVertical: vpadding,
        paddingHorizontal: hpadding,
        marginTop: marginTop,
      };

  return (
    <View style={styleRoot}>
      <Text
        style={{
          fontSize,
          lineHeight: fontSize,
          color,
        }}
      >
        {message}
      </Text>
    </View>
  );
};
