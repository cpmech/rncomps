import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { BaseSwitch } from '../BaseSwitch';
import { XCentered } from '../XCentered';
import { View } from 'react-native';

const stories = storiesOf('BaseSwitch', module);

const Default = () => {
  const [on1, setOn1] = useState(false);
  const [on2, setOn2] = useState(false);

  return (
    <View>
      <BaseSwitch on={on1} onPress={setOn1} textLeft="This is something to select" />
      <BaseSwitch
        on={on2}
        onPress={setOn2}
        textRight="This is something to select"
        textStyle={{
          color: 'red',
          fontWeight: 'bold',
        }}
      />
    </View>
  );
};

stories.add('default', () => (
  <XCentered>
    <Default />
  </XCentered>
));
