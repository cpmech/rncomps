import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { IconButton } from '../IconButton';

const stories = storiesOf('IconButton', module);

stories.add('default', () => (
  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton
        name="arrow-back"
        size={32}
        color="#343434"
        onPress={() => console.log('settings clicked')}
      />
    </View>
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton
        name="settings"
        size={32}
        color="#343434"
        onPress={() => console.log('go back')}
      />
    </View>
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton
        name="more"
        size={32}
        color="#343434"
        onPress={() => console.log('settings clicked')}
      />
    </View>
    <View style={{ marginTop: 20 }} />
  </View>
));
