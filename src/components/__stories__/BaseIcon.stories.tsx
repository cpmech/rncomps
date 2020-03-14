import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
  'arrow-back',
  'arrow-next',
  'arrow-down',
  'arrow-up',
  'happy',
  'chevron-back',
  'chevron-next',
  'chevron-down',
  'chevron-up',
  'home',
  'settings',
  'more',
  'ellipsis',
  'ellipsis-v',
  'tux',
  'game',
  'cube',
  'construct',
  'cloud',
  'trophy',
  'rocket',
  'planet',
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
  'solar-panel',
  'user',
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

    <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
      <Text>Font Awesome 5</Text>
    </View>
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      {names.map(name => (
        <View key={name} style={styles.boxStyle}>
          <View style={styles.content}>
            <BaseIcon name={name} kind="fa5" />
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
);

stories.add('default', () => <Example />);
