import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { ProgressLinear } from '../ProgressLinear';
import { XCentered } from '../XCentered';

const stories = storiesOf('ProgressLinear', module);

stories.add('default', () => (
  <XCentered>
    <View
      style={{
        width: '100%',
      }}
    >
      <ProgressLinear progress={50} />
    </View>
  </XCentered>
));
