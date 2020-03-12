import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { BaseButton } from '../BaseButton';
import { BaseModal } from '../BaseModal';
import { XColumn } from '../XColumn';

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const stories = storiesOf('BaseModal', module);

const Default = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <XColumn>
      <BaseButton width={300} onPress={() => setShowMessage(true)} text="Show Message" />

      <View style={{ height: 20 }} />

      <BaseButton width={300} onPress={() => setShowConfirm(true)} text="Show Confirm" />

      <BaseModal title="Message" visible={showMessage} onClose={() => setShowMessage(false)}>
        <Text>Hello World!</Text>
      </BaseModal>

      <BaseModal
        title="Confirmation"
        visible={showConfirm}
        showCancelButton={true}
        onClose={() => setShowConfirm(false)}
        onYes={() => console.log('yes clicked')}
      >
        <Text>Are you sure?</Text>
      </BaseModal>
    </XColumn>
  );
};

stories.add('default', () => <Default />);
