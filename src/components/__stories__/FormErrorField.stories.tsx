import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { FormErrorField } from '../FormErrorField';
import { XColumn } from '../XColumn';

const stories = storiesOf('FormErrorField', module);

stories.add('default', () => (
  <XColumn>
    <FormErrorField error="1: some error happened" />
    <FormErrorField error="" />
    <FormErrorField error="3: some error happened" />
    <FormErrorField error="4: some error happened" />
    <FormErrorField error="" fixedHeight={true} />
    <FormErrorField error="6: some error happened" />
  </XColumn>
));
