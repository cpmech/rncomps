import React, { ReactNode } from 'react';
import { formatNumber } from '@cpmech/util';
import { IStyleTypeA } from './helpers';
import { InputTypeA } from './InputTypeA';

interface IInputNumberProps extends IStyleTypeA {
  label: string;
  value: string;
  onChangeText: (formattedValue: string) => void;

  suffix?: ReactNode;
  prefix?: string; // e.g. '' [default] or 'R$ '
  swapDotByComma?: boolean; // use ',' instead of '.' for decimals
  numDigits?: number; // number of decimal digits 2 = default
  suffixPaddingRight?: number;
}

export const InputNumber: React.FC<IInputNumberProps> = ({
  label,
  value,
  onChangeText,

  suffix,
  prefix = '',
  swapDotByComma = false,
  numDigits = 2,
  suffixPaddingRight,

  ...rest
}) => {
  const handleChange = (value: string) => {
    const v = formatNumber(value, swapDotByComma, numDigits, prefix);
    onChangeText(v);
  };

  return (
    <InputTypeA
      label={label}
      value={value}
      onChangeText={handleChange}
      suffix={suffix}
      suffixPaddingRight={suffixPaddingRight}
      keyboardType="numeric"
      {...rest}
    />
  );
};
