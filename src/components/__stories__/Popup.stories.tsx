import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Popup } from '../Popup';
import { XColumn } from '../XColumn';
import { BaseButton } from '../BaseButton';

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const stories = storiesOf('Popup', module);

const Default = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <XColumn>
      <BaseButton
        width={300}
        onPress={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 3000);
        }}
        text="Show Loading"
      />

      <View style={{ height: 20 }} />

      <BaseButton
        width={300}
        onPress={async () => {
          setProgress(50);
          for (let i = 1; i < 99; i++) {
            setProgress(i);
            await sleep(50);
          }
          setProgress(100);
        }}
        text="Show Progress"
      />

      <View style={{ height: 20 }} />

      <BaseButton width={300} onPress={() => setError(true)} text="Show Error" />

      <View
        style={{
          width: '100%',
        }}
      >
        <Popup title="Loading..." visible={loading} isLoading={true} />
        <Popup title="Progress..." visible={progress > 0 && progress < 100} progress={progress} />
        <Popup
          title="Error..."
          visible={error}
          onClose={() => setError(false)}
          isError={true}
          message="Unfortunately some error has just happened"
        />
      </View>
    </XColumn>
  );
};

stories.add('default', () => <Default />);
