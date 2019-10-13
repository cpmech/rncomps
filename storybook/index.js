import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';

// import stories
configure(() => {
  require('../stories');
}, module);

export const Storybook = getStorybookUI({});
