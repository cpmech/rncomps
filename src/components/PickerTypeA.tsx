import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import { IStyles } from './types';
import { IStyleTypeA, defaultStyleTypeA } from './helpers';
import { BaseIcon } from './BaseIcon';
import { BaseModal } from './BaseModal';
import { IPickerData } from './BasePicker';

const renderUndefinedSelected = (width: string, borderRadius: number) => (
  <View
    style={{
      backgroundColor: 'red',
      width,
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderRadius,
      borderWidth: 1,
    }}
  >
    <Text>ERROR: selected value is NOT in data array</Text>
  </View>
);

export interface IPickerTypeAProps extends IStyleTypeA {
  label?: string;
  prompt: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  data: IPickerData[];

  noSelectedText?: boolean;
  textMaxWidth?: number;

  itemsMaxWidth?: number;
  itemsMaxHeight?: number;
  itemsColor?: string;
  itemsBGcolor?: string;
  itemsFontSize?: number;
  itemsVertGap?: number;
  itemsHideImage?: boolean;

  imageHideSelected?: boolean;
  imageSize?: number;
  imageHorizGap?: number;
  imageVertGap?: number;

  iconSize?: number;
  iconColor?: string;
  iconLeftMargin?: number;
}

export const PickerTypeA: React.FC<IPickerTypeAProps> = ({
  label,
  prompt,
  selectedValue,
  onValueChange,
  data,

  noSelectedText,
  textMaxWidth,

  itemsMaxWidth,
  itemsMaxHeight = 350,
  itemsColor = '#343434',
  itemsBGcolor = '#ffffff',
  itemsFontSize = 16,
  itemsVertGap = 10,
  itemsHideImage,

  imageHideSelected,
  imageSize,
  imageHorizGap = 10,
  imageVertGap = 0,

  iconSize,
  iconColor,
  iconLeftMargin = 10,

  // dimensions
  height = defaultStyleTypeA.height,
  width = defaultStyleTypeA.width,
  paddingHoriz = defaultStyleTypeA.paddingHoriz,
  gapXflatLeft = defaultStyleTypeA.gapXflatLeft,
  suffixPaddingRight = defaultStyleTypeA.suffixPaddingRight,
  marginVert = defaultStyleTypeA.marginVert,
  fontSize = defaultStyleTypeA.fontSize,
  fontFamily = defaultStyleTypeA.fontFamily,
  fontWeight = defaultStyleTypeA.fontWeight,
  labelScale = defaultStyleTypeA.labelScale,
  factorFontsize2width = defaultStyleTypeA.factorFontsize2width,

  // border
  borderRadius = defaultStyleTypeA.borderRadius,
  borderWidth = defaultStyleTypeA.borderWidth,
  flatLeft = defaultStyleTypeA.flatLeft,
  flatRight = defaultStyleTypeA.flatRight,
  noBorderLeft = defaultStyleTypeA.noBorderLeft,

  // colors
  color = defaultStyleTypeA.color,
  bgColor = defaultStyleTypeA.bgColor,
  mutedColor = defaultStyleTypeA.mutedColor,
  borderColor = defaultStyleTypeA.borderColor,
}) => {
  const [showModal, setShowModal] = useState(false);
  const selected = data.find(d => d.value === selectedValue);

  if (!selected) {
    return renderUndefinedSelected(width, borderRadius);
  }

  height = imageSize ? Math.max(height, imageSize + 7) : height;
  height += 2 * imageVertGap;
  const radius = borderRadius > height / 2 ? height / 2 : borderRadius;

  const labelHeightBefore = label ? fontSize : 0;
  const labelWidthBefore = label ? fontSize * label.length * factorFontsize2width : 0;
  const labelHeightAfter = label ? fontSize * labelScale : 0;

  const marginTop = marginVert || labelHeightAfter / 2;
  const iconHeight = iconSize ? iconSize : fontSize;

  const styles: IStyles = {
    root: {
      width,
      height: height + (label ? marginTop + 2 : 0),
    },

    container: {
      position: 'absolute',
      top: marginTop,
      width: '100%',
    },

    input: {
      height,
      borderColor,
      borderLeftWidth: noBorderLeft ? undefined : borderWidth,
      borderRightWidth: borderWidth,
      borderTopWidth: borderWidth,
      borderBottomWidth: borderWidth,
      borderTopLeftRadius: flatLeft ? 0 : radius,
      borderBottomLeftRadius: flatLeft ? 0 : radius,
      borderTopRightRadius: flatRight ? 0 : radius,
      borderBottomRightRadius: flatRight ? 0 : radius,
      paddingLeft: paddingHoriz,
      paddingRight: paddingHoriz + iconLeftMargin + iconHeight,
      backgroundColor: bgColor,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },

    inputText: {
      color,
      fontSize,
      fontFamily,
      fontWeight,
      maxWidth: textMaxWidth,
    },

    animationWrapper: {
      position: 'absolute',
      top: -labelHeightBefore / 2,
      left: flatLeft ? gapXflatLeft : radius,
    },

    labelWrapper: {
      width: labelWidthBefore * labelScale,
      height: labelHeightBefore * labelScale,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor,
    },

    label: {
      fontSize: fontSize * labelScale,
      fontFamily,
      color: mutedColor,
    },

    suffix: {
      position: 'absolute',
      top: height / 2 - iconHeight / 2,
      right: suffixPaddingRight,
    },

    item: {
      color: itemsColor,
      fontSize: itemsFontSize,
      maxWidth: itemsMaxWidth,
    },
  };

  const styleImage = {
    width: imageSize ? imageSize : itemsFontSize + 7,
    height: imageSize ? imageSize : itemsFontSize + 7,
    marginRight: imageHorizGap,
  };

  const renderSelectedText = () => {
    if (!selected) {
      return;
    }
    return (
      <View style={styles.input}>
        <Text style={styles.inputText}>{selected.label}</Text>
      </View>
    );
  };

  const renderSelectedWithImage = () => {
    if (!selected || !selected.image) {
      return;
    }
    return (
      <View style={styles.input}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={selected.image} style={styleImage} resizeMode="contain" />
          {selected && !noSelectedText && <Text style={styles.inputText}>{selected.label}</Text>}
        </View>
      </View>
    );
  };

  const renderItemText = (d: IPickerData) => (
    <Text key={d.value} style={styles.item}>
      {d.label}
    </Text>
  );

  const renderItemWithImage = (d: IPickerData) => {
    if (!d.image) {
      return;
    }
    return (
      <View key={d.value} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image source={d.image} style={styleImage} resizeMode="contain" />
        {renderItemText(d)}
      </View>
    );
  };

  const renderLabel = () => {
    if (!label) {
      return null;
    }
    return (
      <View style={styles.animationWrapper}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label} numberOfLines={1}>
            {label}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <React.Fragment>
      <View style={styles.root}>
        <View style={styles.container}>
          <TouchableHighlight onPress={() => setShowModal(true)} underlayColor={bgColor}>
            {selected && selected.image && !imageHideSelected
              ? renderSelectedWithImage()
              : renderSelectedText()}
          </TouchableHighlight>
          <View style={styles.suffix}>
            <TouchableHighlight onPress={() => setShowModal(true)} underlayColor={bgColor}>
              <BaseIcon color={iconColor || mutedColor} size={iconHeight} name="chevron-down" />
            </TouchableHighlight>
          </View>
          {renderLabel()}
        </View>
      </View>

      <BaseModal visible={showModal} title={prompt} onClose={() => setShowModal(false)}>
        <ScrollView style={{ maxHeight: itemsMaxHeight, backgroundColor: itemsBGcolor }}>
          {data.map((d, i) => (
            <TouchableOpacity
              key={d.label}
              onPress={() => {
                setShowModal(false);
                onValueChange(d.value);
              }}
            >
              <View style={{ marginTop: i === 0 ? itemsVertGap : 0, marginBottom: itemsVertGap }}>
                {d.image && !itemsHideImage ? renderItemWithImage(d) : renderItemText(d)}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </BaseModal>
    </React.Fragment>
  );
};
