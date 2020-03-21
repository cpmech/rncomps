import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { BaseButton } from '../BaseButton';
import { XCentered } from '../XCentered';
import { XColumn } from '../XColumn';
import { View } from 'react-native';

const stories = storiesOf('BaseButton', module);

stories.add('default', () => (
  <XCentered>
    <XColumn>
      <BaseButton width={100} text="hello" onPress={() => console.log('hello')} />
      <View style={{ marginBottom: 30 }} />
      <BaseButton width={100} text="hello" onPress={() => console.log('hello')} spinning={true} />
    </XColumn>
  </XCentered>
));
