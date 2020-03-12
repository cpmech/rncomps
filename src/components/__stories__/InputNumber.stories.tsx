import React, { useState } from 'react';
import { View, KeyboardAvoidingView, SafeAreaView, Platform } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { InputNumber } from '../InputNumber';

const stories = storiesOf('InputNumber', module);

const Default = () => {
  const [value, setValue] = useState('123,45');
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
      <SafeAreaView>
        <View>
          <InputNumber
            label="Preço"
            value={value}
            onChangeText={v => setValue(v)}
            swapDotByComma={true}
            error={''}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

stories.add('default', () => <Default />);
