import React from 'react';
import { ScrollView, View, Text, ImageSourcePropType } from 'react-native';
import { IStyles } from './types';
import { BaseImage } from './BaseImage';
import { BaseHorizBar } from './BaseHorizBar';
import { bannerStyles } from './withBanner';

const s: IStyles = {
  ...bannerStyles,
  section: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#343434',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#343434',
  },
};

export interface IBaseInfoContent {
  title: string;
  paras: string[];
}

export interface IBaseInfoProps {
  content: IBaseInfoContent[];
  bannerImage?: ImageSourcePropType;
  bannerCaption?: string;
}

export const BaseInfoTextScreen: React.FC<IBaseInfoProps> = ({
  content,
  bannerImage,
  bannerCaption,
}) => (
  <ScrollView contentInsetAdjustmentBehavior="automatic" style={s.root}>
    <View style={s.content}>
      {bannerImage && <BaseImage image={bannerImage} />}
      {bannerCaption && <Text style={s.caption}>{bannerCaption}</Text>}
      {bannerImage && <BaseHorizBar />}
      {content.map((c, i) => (
        <View style={s.content} key={i}>
          <View style={s.section}>
            <Text style={s.title}>{c.title}</Text>
            {c.paras.map((p, j) => (
              <Text style={s.description} key={j}>
                {p}
              </Text>
            ))}
          </View>
        </View>
      ))}
      <View style={s.extraSpace} />
    </View>
  </ScrollView>
);
