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

interface IProps {
  prompt: string;
  data: IPickerData[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  width?: string;
  selectedHeight?: number;
  selectedColor?: string;
  selectedBGcolor?: string;
  selectedFontSize?: number;
  selectedFontFamily?: string;
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

export const BasePicker: React.FC<IProps> = ({
  prompt,
  data,
  selectedValue,
  onValueChange,
  width = '100%',
  selectedHeight = 50,
  selectedColor = colors.default,
  selectedBGcolor = colors.white,
  selectedFontSize = 18,
  selectedFontFamily,
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
          color: selectedColor,
          fontSize: selectedFontSize,
          fontFamily: selectedFontFamily,
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

  const height = imageSize ? Math.max(selectedHeight, imageSize + 7) : selectedHeight;

  return (
    <React.Fragment>
      <TouchableHighlight
        onPress={() => {
          console.log('here');
          setVisible(true);
        }}
        underlayColor={selectedBGcolor}
      >
        <View style={{ height }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: selectedBGcolor,
              paddingLeft,
              paddingRight,
            }}
          >
            {selected && selected.image && !selectedHideImage
              ? renderSelectedWithImage()
              : renderSelectedText()}
            <BaseIcon
              color={selectedColor}
              size={iconSize ? iconSize : selectedFontSize + 5}
              name={'arrow-picker'}
            />
          </View>
        </View>
      </TouchableHighlight>

      <BaseModal
        visible={visible}
        title={prompt}
        onClose={() => setVisible(false)}
        renderContent={() => (
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
        )}
      />
    </React.Fragment>
  );
};
