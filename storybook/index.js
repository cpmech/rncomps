import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

// import stories
configure(() => {
  loadStories();
}, module);

export const Storybook = getStorybookUI({
  asyncStorage: null,
});
