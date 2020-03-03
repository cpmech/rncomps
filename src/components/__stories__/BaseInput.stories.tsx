import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { XCentered } from '../XCentered';
import { BaseInput } from '../BaseInput';

const stories = storiesOf('BaseInput', module);

stories.add('default', () => (
  <XCentered>
    <BaseInput caption="Name" placeholder="Name" />
  </XCentered>
));
