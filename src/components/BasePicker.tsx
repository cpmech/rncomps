import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { BaseIcon } from './BaseIcon';
import { BaseModal } from './BaseModal';
import { ScrollView } from 'react-native-gesture-handler';

const colors = {
  default: '#343434',
  white: '#ffffff',
};

export interface IPickerData {
  value: string;
  label: string;
  image?: ImageSourcePropType;
}

interface IBasePickerProps {
  prompt: string;
  data: IPickerData[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  width?: string | number; // if string, use percentage, otherwise, no units
  height?: number;
  color?: string;
  bgColor?: string;
  fontSize?: number;
  fontFamily?: string;
  itemsMaxHeight?: number;
  itemsColor?: string;
  itemsBGcolor?: string;
  itemsFontSize?: number;
  itemsFontFamily?: string;
  paddingLeft?: number;
  paddingRight?: number;
  iconSize?: number;
  imageSize?: number;
  imageGap?: number;
  itemsGap?: number;
  selectedHideImage?: boolean;
  itemsHideImage?: boolean;
}

export const BasePicker: React.FC<IBasePickerProps> = ({
  prompt,
  data,
  selectedValue,
  onValueChange,
  width = '100%',
  height = 50,
  color = colors.default,
  bgColor = colors.white,
  fontSize = 18,
  fontFamily,
  itemsMaxHeight = 300,
  itemsColor = colors.default,
  itemsBGcolor = colors.white,
  itemsFontSize = 16,
  itemsFontFamily,
  paddingLeft = 10,
  paddingRight = 10,
  iconSize,
  imageSize,
  imageGap = 10,
  itemsGap = 10,
  selectedHideImage,
  itemsHideImage,
}) => {
  const [visible, setVisible] = useState(false);
  const selected = data.find((d: IPickerData) => d.value === selectedValue);

  const renderSelectedText = () => {
    if (!selected) {
      return;
    }
    return (
      <Text
        style={{
          color: color,
          fontSize: fontSize,
          fontFamily: fontFamily,
        }}
      >
        {selected.label}
      </Text>
    );
  };

  const renderSelectedWithImage = () => {
    if (!selected || !selected.image) {
      return;
    }
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={selected.image}
          style={{
            width: imageSize ? imageSize : itemsFontSize + 7,
            height: imageSize ? imageSize : itemsFontSize + 7,
            marginRight: imageGap,
          }}
          resizeMode="contain"
        />
        {renderSelectedText()}
      </View>
    );
  };

  const renderItemText = (d: IPickerData) => (
    <Text
      key={d.value}
      style={{
        color: itemsColor,
        fontSize: itemsFontSize,
        fontFamily: itemsFontFamily,
      }}
    >
      {d.label}
    </Text>
  );

  const renderItemWithImage = (d: IPickerData) => {
    if (!d.image) {
      return;
    }
    return (
      <View key={d.value} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={d.image}
          style={{
            width: imageSize ? imageSize : itemsFontSize + 7,
            height: imageSize ? imageSize : itemsFontSize + 7,
            marginRight: imageGap,
          }}
          resizeMode="contain"
        />
        {renderItemText(d)}
      </View>
    );
  };

  const heightFinal = imageSize ? Math.max(height, imageSize + 7) : height;

  return (
    <React.Fragment>
      <TouchableHighlight
        onPress={() => {
          console.log('here');
          setVisible(true);
        }}
        underlayColor={bgColor}
      >
        <View style={{ height: heightFinal, width }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: bgColor,
              paddingLeft,
              paddingRight,
            }}
          >
            {selected && selected.image && !selectedHideImage
              ? renderSelectedWithImage()
              : renderSelectedText()}
            <BaseIcon color={color} size={iconSize ? iconSize : fontSize + 5} name="chevron-down" />
          </View>
        </View>
      </TouchableHighlight>

      <BaseModal visible={visible} title={prompt} onClose={() => setVisible(false)}>
        <ScrollView style={{ maxHeight: itemsMaxHeight, backgroundColor: itemsBGcolor }}>
          {data.map((d, i) => (
            <TouchableOpacity
              key={d.label}
              onPress={() => {
                setVisible(false);
                onValueChange(d.value);
              }}
            >
              <View style={{ marginTop: i === 0 ? itemsGap : 0, marginBottom: itemsGap }}>
                {d.image && !itemsHideImage ? renderItemWithImage(d) : renderItemText(d)}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </BaseModal>
    </React.Fragment>
  );
};
