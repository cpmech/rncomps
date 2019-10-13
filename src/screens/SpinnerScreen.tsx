import React from 'react';
import { BaseSpinnerScreen, withNavTitle } from '../components';

const Comp: React.FC = () => <BaseSpinnerScreen />;

export const SpinnerScreenSample = withNavTitle(Comp, 'SpinnerScreen');
