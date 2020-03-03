import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ITypeAProps, getTypeAcss } from './getTypeAcss';

interface IProps extends ITypeAProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  password?: boolean;
  suffix?: ReactNode;
  suffixPaddingRight?: number;
  readOnly?: boolean;
}

export const InputTypeA: React.FC<IProps> = ({
  value,
  onChange,
  label,
  password,
  suffix,
  suffixPaddingRight,
  readOnly = false,
  ...rest
}) => {
  const hasValue = !!value;
  const css = getTypeAcss(readOnly, hasValue, false, rest);
  return (
    <View style={css.root}>
      <TextInput
        style={css.input}
        value={hasValue ? value : label}
        onChangeText={text => onChange(text)}
        underlineColorAndroid="transparent"
      />
      <Text style={css.label}>{label}</Text>
    </View>
  );
};
