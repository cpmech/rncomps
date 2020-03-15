import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { NavButton } from '../NavButton';
import { XCentered } from '../XCentered';
import { XColumn } from '../XColumn';

const stories = storiesOf('NavButton', module);

stories.add('default', () => (
  <XCentered>
    <XColumn>
      <NavButton iconName="user" text="User" onPress={() => console.log('hello')} />
      <NavButton iconName="doc" text="Doc" onPress={() => console.log('hello')} />
      <NavButton
        iconName="file-contract"
        iconKind="fa5"
        text="File contract"
        onPress={() => console.log('hello')}
      />
      <NavButton
        iconName="file-signature"
        iconKind="fa5"
        text="File signature"
        onPress={() => console.log('hello')}
      />
      <NavButton
        iconName="signature"
        iconKind="fa5"
        text="Signature"
        onPress={() => console.log('hello')}
      />
      <NavButton iconName="list" text="List" onPress={() => console.log('hello')} />
      <NavButton iconName="energy" text="Energy" onPress={() => console.log('hello')} />
    </XColumn>
  </XCentered>
));
