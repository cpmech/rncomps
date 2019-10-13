import React from 'react';
import { ScrollView, View, Text, ImageSourcePropType } from 'react-native';
import { IStyles } from './types';
import { BaseImage } from './BaseImage';
import { BaseHorizBar } from './BaseHorizBar';

export const bannerStyles: IStyles = {
  root: {
    flex: 1,
  },
  content: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  caption: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#343434',
  },
  extraSpace: {
    marginTop: 200,
  },
};

export const withBanner = <P extends object>(
  Component: React.ComponentType<P>,
  image?: ImageSourcePropType,
  caption?: string,
): React.FC<P> => ({ ...props }) => (
  <ScrollView>
    <View style={bannerStyles.root}>
      <View style={bannerStyles.content}>
        {image && <BaseImage image={image} />}
        {caption && <Text style={bannerStyles.caption}>{caption}</Text>}
        <BaseHorizBar />
        <Component {...(props as P)} />
        <View style={bannerStyles.extraSpace} />
      </View>
    </View>
  </ScrollView>
);
