import React from 'react';
import { View, Text, Image, ListView, StyleSheet, ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { BaseIcon } from '../BaseIcon';
import { IStyle } from '../types';

const stories = storiesOf('BaseIcon', module);

const s: IStyle = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const names = [
  'home',
  'settings',
  'more',
  'ellipsis',
  'ellipsis-v',
  'happy',
  'tux',
  'game',
  'cube',
  'construct',
  'cloud',
  'trophy',
  'rocket',
  'planet',
  'arrow-next',
  'arrow-picker',
  'arrow-picker-up',
  'paper',
  'pencil',
  'expand',
  'contract',
  'eye',
  'eye-off',
  'power',
  'info',
  'bulb',
  'calendar',
  'heart',
  'chart',
  'bubbles',
];

const styles = StyleSheet.create({
  boxStyle: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 12,
  },
});

const Example = () => (
  <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text>Ion</Text>
    </View>
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      {names.map(name => (
        <View key={name} style={styles.boxStyle}>
          <View style={styles.content}>
            <BaseIcon name={name} />
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      ))}
    </View>

    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text>Material</Text>
    </View>
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      {names.map(name => (
        <View key={name} style={styles.boxStyle}>
          <View style={styles.content}>
            <BaseIcon name={name} kind="mat" />
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      ))}
    </View>

    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text>Line</Text>
    </View>
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      {names.map(name => (
        <View key={name} style={styles.boxStyle}>
          <View style={styles.content}>
            <BaseIcon name={name} kind="line" />
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      ))}
    </View>

    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text>Feather</Text>
    </View>
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      {names.map(name => (
        <View key={name} style={styles.boxStyle}>
          <View style={styles.content}>
            <BaseIcon name={name} kind="feather" />
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
);

stories.add('default', () => <Example />);
