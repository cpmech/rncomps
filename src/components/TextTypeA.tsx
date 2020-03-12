import React from 'react';
import { IInputTypeAProps, InputTypeA } from './InputTypeA';

export interface ITextTypeAProps extends Omit<IInputTypeAProps, 'onChangeText'> {
  label: string;
  value: string;
}

export const TextTypeA: React.FC<ITextTypeAProps> = ({ label, value, ...rest }) => {
  return (
    <InputTypeA
      label={label}
      value={value}
      onChangeText={() => {
        /*do nothing*/
      }}
      editable={false}
      {...rest}
    />
  );
};
