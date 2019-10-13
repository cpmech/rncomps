import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

const colors = {
  default: '#343434',
  lighter: '#a2a2a2',
};

interface IProps {
  caption?: string;
  onChange?: (value: string) => void;
  onDone?: (value: string) => void;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  captionColor?: string;
  captionFontSize?: number;
  captionFontFamily?: string;
  cursorColor?: string;
  height?: number;
  borderBottomColor?: string;
  borderBottomWidth?: number;
  paddingHorizontal?: number;
  placeholder?: string;
  placeholderColor?: string;
  suffix?: string;
  suffixColor?: string;
  suffixFontSize?: number;
  suffixFontFamily?: string;
  suffixWidthMultiplier?: number; // must be smaller than 1.0
  numberOfLines?: number;
}

export const BaseInput: React.FC<IProps> = ({
  caption,
  onChange,
  onDone,
  color = colors.default,
  fontSize = 18,
  fontFamily,
  captionColor = colors.default,
  captionFontSize = 12,
  captionFontFamily,
  cursorColor = colors.default,
  height = 40,
  borderBottomColor = colors.default,
  borderBottomWidth = 1,
  paddingHorizontal = 0,
  placeholder,
  placeholderColor = colors.lighter,
  suffix,
  suffixColor = colors.default,
  suffixFontSize = 18,
  suffixFontFamily,
  suffixWidthMultiplier = 0.25,
  numberOfLines = 1,
}) => {
  const [value, setValue] = useState('');

  const renderInput = () => (
    <TextInput
      style={{
        color,
        fontSize,
        fontFamily,
        borderBottomColor,
        borderBottomWidth,
        paddingHorizontal,
        height,
      }}
      selectionColor={cursorColor}
      onChangeText={text => {
        if (onChange) {
          onChange(text);
        }
        setValue(text);
      }}
      onEndEditing={() => {
        if (onDone) {
          onDone(value);
        }
      }}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      numberOfLines={numberOfLines}
    />
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}
    >
      {caption && (
        <Text
          style={{
            color: captionColor,
            fontSize: captionFontSize,
            fontFamily: captionFontFamily,
          }}
        >
          {caption}
        </Text>
      )}
      {suffix ? (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 / suffixWidthMultiplier - 1 }}>{renderInput()}</View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: suffixColor,
                fontSize: suffixFontSize,
                fontFamily: suffixFontFamily,
              }}
            >
              {suffix}
            </Text>
          </View>
        </View>
      ) : (
        renderInput()
      )}
    </View>
  );
};
