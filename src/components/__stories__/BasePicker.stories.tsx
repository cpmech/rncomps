import React, { useState } from 'react';
import { SafeAreaView, Platform, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { BasePicker } from '../BasePicker';
import { fmaPickerData } from '../../screens/fmaPickerData';
import { XCentered } from '../XCentered';

const stories = storiesOf('BasePicker', module);

const Default = () => {
  const [pickerSelected, setPickerSelected] = useState('bender');

  return (
    <XCentered>
      <View style={{ backgroundColor: 'blue', width: '100%' }}>
        <BasePicker
          prompt="What's your favorite character?"
          data={fmaPickerData}
          selectedValue={pickerSelected}
          onValueChange={(value: string) => {
            console.log(`selecting ${value}`);
            setPickerSelected(value);
          }}
          // selectedColor="#355C7D"
          // selectedBGcolor="#F8B195"
          // selectedFontSize={18}
          // selectedFontFamily={Platform.OS === 'android' ? 'monospace' : 'Courier New'}
          // iconSize={40}
          itemsColor="#0000ff"
          // itemsBGcolor="#cecece"
          // itemsFontSize={18}
          // itemsMaxHeight={240}
          imageSize={40}
          selectedHideImage={false}
          itemsHideImage={false}
        />
      </View>
    </XCentered>
  );
};

stories.add('default', () => <Default />);
