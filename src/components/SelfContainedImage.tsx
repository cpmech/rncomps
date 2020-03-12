import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';

interface IProps {
  image: ImageSourcePropType;
}

export const SelfContainedImage: React.FC<IProps> = ({ image }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        resizeMode="contain"
        style={{
          flex: 1,
          width: null,
          height: null,
        }}
        source={image}
      />
    </View>
  );
};
