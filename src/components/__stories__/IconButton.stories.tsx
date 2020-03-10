import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { IconButton } from '../IconButton';
import { XCentered } from '../XCentered';

const stories = storiesOf('IconButton', module);

stories.add('default', () => (
  <XCentered>
    <IconButton name="settings" onPress={() => console.log('hello')} />
  </XCentered>
));
