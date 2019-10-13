import React from 'react';
import { BaseInfoTextScreen, IBaseInfoContent, withNavTitle } from '../components';

const content: IBaseInfoContent[] = [
  {
    title: 'Hello',
    paras: [
      'first paragraph of first section',
      'second paragraph of first section',
      'third paragraph of first section',
      'fourth paragraph of first section',
    ],
  },
  {
    title: 'World',
    paras: [
      'first paragraph of second section',
      'second paragraph of second section',
      'third paragraph of second section',
    ],
  },
];

export const Comp: React.FC = () => <BaseInfoTextScreen content={content} />;

export const BaseInfoTextScreenSample = withNavTitle(Comp, 'BaseInfoTextScreen');
