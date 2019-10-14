import React from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';
import { IStyles } from './types';

// tslint:disable-next-line: no-var-requires
const iconChecked = require('../assets/icon_checkbox_checked.png');

// tslint:disable-next-line: no-var-requires
const iconUnchecked = require('../assets/icon_checkbox_unchecked.png');

const s: IStyles = {
  root: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: '#343434',
  },
  textDarkBg: {
    marginLeft: 10,
    color: '#ffffff',
  },
};

const imgStyle = {
  tintColor: '#2f95dc',
  backgroundColor: '#ffffff',
  width: 24,
  height: 24,
};

interface IProps {
  checked: boolean;
  onPress: () => void;
  message?: string;
  renderMessage?: () => void;
}

export const BaseCheckbox: React.FC<IProps> = ({ checked, onPress, message, renderMessage }) => (
  <View style={s.root}>
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={s.container}>
        <Image style={imgStyle} source={checked ? iconChecked : iconUnchecked} />
      </View>
    </TouchableHighlight>
    {message && <Text style={s.text}>{message}</Text>}
    {renderMessage && renderMessage()}
  </View>
);
