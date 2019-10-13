import React from 'react';
import { BaseSpinnerScreen, withNavTitle } from '../components';

export const Comp: React.FC = () => <BaseSpinnerScreen />;

export const BaseSpinnerScreenSample = withNavTitle(Comp, 'BaseSpinnerScreen');
