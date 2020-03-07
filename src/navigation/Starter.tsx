import React, { useEffect } from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { BaseSpinnerScreen } from '../components';

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}

export const Starter: React.FC<IProps> = ({ navigation }) => {
  useEffect(() => {
    const to = setTimeout(() => navigation.navigate('Storybook'), 100);
    return function cleanup() {
      clearTimeout(to);
    };
  }, []);

  return <BaseSpinnerScreen darkBackground={false} />;
};
