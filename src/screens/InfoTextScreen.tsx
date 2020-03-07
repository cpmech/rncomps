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

const Comp: React.FC = () => <BaseInfoTextScreen content={content} />;

export const InfoTextScreenSample = withNavTitle(Comp, { title: 'InfoTextScreen' });
