import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { BaseButton } from '../BaseButton';

const stories = storiesOf('BaseButton', module);

stories.addDecorator(withKnobs);

stories.add('default', () => <BaseButton text="Hello World" onPress={action('button clicked')} />);
