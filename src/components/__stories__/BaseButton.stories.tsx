import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { BaseButton } from '../BaseButton';
import { XCentered } from '../XCentered';

const stories = storiesOf('BaseButton', module);

stories.add('default', () => (
  <XCentered>
    <BaseButton width={100} text="hello" onPress={() => console.log('hello')} />
  </XCentered>
));
