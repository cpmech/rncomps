import React from 'react';
import { View, Switch, Text, StyleProp, TextStyle } from 'react-native';

interface IProps {
  on?: boolean;
  onPress?: (value: boolean) => void;
  textLeft?: string;
  textRight?: string;
  hgap?: number;
  textStyle?: StyleProp<TextStyle>;
}

export const BaseSwitch: React.FC<IProps> = ({
  on,
  onPress,
  textLeft,
  textRight,
  hgap = 5,
  textStyle,
}) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      {textLeft && (
        <View style={{ marginRight: hgap }}>
          <Text style={textStyle}>{textLeft}</Text>
        </View>
      )}
      <Switch value={on} onValueChange={onPress} />
      {textRight && (
        <View style={{ marginLeft: hgap }}>
          <Text style={textStyle}>{textRight}</Text>
        </View>
      )}
    </View>
  );
};
