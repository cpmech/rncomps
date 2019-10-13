import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';
import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

export const Storybook = getStorybookUI({});
