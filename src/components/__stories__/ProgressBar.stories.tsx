import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { ProgressBar } from '../ProgressBar';
import { XCentered } from '../XCentered';

const stories = storiesOf('ProgressBar', module);

stories.add('default', () => (
  <XCentered>
    <View
      style={{
        width: '100%',
      }}
    >
      <ProgressBar progress={50} />
    </View>
  </XCentered>
));
