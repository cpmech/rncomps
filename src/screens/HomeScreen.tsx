import React, { useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { NavigationScreenProp, ScrollView } from 'react-navigation';
import {
  IStyles,
  withNTSV,
  BaseButton,
  BaseCheckbox,
  BaseLink,
  BaseModal,
  BaseHorizBar,
  BaseIcon,
  BaseImage,
  BasePicker,
  InputTypeA,
} from '../components';
import { fmaPickerData } from './fmaPickerData';

const VSpace = () => <View style={{ height: 20 }} />;

const iconNames = ['cube', 'construct', 'cloud', 'trophy', 'rocket', 'planet', 'game', 'tux'];

const niceColors = ['#99B898', '#FECEAB', '#FF847C', '#E84A5F', '#2A363B'];

const getColor = (i: number): string => niceColors[i % niceColors.length];

const s: IStyles = {
  text: {
    color: '#343434',
    marginTop: 40,
    marginBottom: 10,
  },
};

// tslint:disable-next-line: no-var-requires
const img = require('./img/mb-eclass.png');

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}

const Comp: React.FC<IProps> = ({ navigation }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [checkboxChecked2, setCheckboxChecked2] = useState(false);
  const [pickerSelected, setPickerSelected] = useState('bender');

  return (
    <View>
      <Text style={s.text}>BaseModal</Text>
      <BaseModal
        title="My Modal Window"
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}
      >
        <View style={{ marginLeft: 10 }}>
          <Text>Hello, People!</Text>
          <Text>This is a Modal window</Text>
          <VSpace />
          <BaseImage image={img} />
          <VSpace />
          <ScrollView style={{ height: 200 }}>
            <Text>Line 01</Text>
            <Text>Line 02</Text>
            <Text>Line 03</Text>
            <Text>Line 04</Text>
            <Text>Line 05</Text>
            <Text>Line 06</Text>
            <Text>Line 07</Text>
            <Text>Line 08</Text>
            <Text>Line 09</Text>
            <Text>Line 10</Text>
            <Text>Line 11</Text>
            <Text>Line 12</Text>
            <Text>Line 13</Text>
            <Text>Line 14</Text>
            <Text>Line 15</Text>
            <Text>Line 16</Text>
            <Text>Line 17</Text>
            <Text>Line 18</Text>
            <Text>Line 19</Text>
            <Text>Line 20</Text>
            <Text>Line 21</Text>
            <Text>Line 22</Text>
            <Text>Line 23</Text>
            <Text>Line 24</Text>
            <Text>Line 25</Text>
            <Text>Line 26</Text>
            <Text>Line 27</Text>
            <Text>Line 28</Text>
            <Text>Line 29</Text>
            <Text>Line 30</Text>
            <Text>Line 31</Text>
            <Text>Line 32</Text>
            <Text>Line 33</Text>
            <Text>Line 34</Text>
            <Text>Line 35</Text>
            <Text>Line 36</Text>
            <Text>Line 37</Text>
            <Text>Line 38</Text>
            <Text>Line 39</Text>
            <Text>Line 40</Text>
          </ScrollView>
        </View>
      </BaseModal>

      <BaseButton text="Show Dialog" onPress={() => setDialogVisible(true)} />

      <Text style={s.text}>BasePicker</Text>
      <BasePicker
        prompt="What's your favorite character?"
        data={fmaPickerData}
        selectedValue={pickerSelected}
        onValueChange={(value: string) => {
          console.log(`selecting ${value}`);
          setPickerSelected(value);
        }}
        color="#355C7D"
        bgColor="#F8B195"
        fontSize={18}
        fontFamily={Platform.OS === 'android' ? 'monospace' : 'Courier New'}
        iconSize={40}
        itemsColor="#0000ff"
        itemsBGcolor="#cecece"
        itemsFontSize={18}
        itemsMaxHeight={240}
        imageSize={60}
        selectedHideImage={false}
        itemsHideImage={false}
      />

      <Text style={s.text}>BaseButton</Text>
      <BaseButton text="Press Me" onPress={() => console.log('1 button pressed')} />
      <VSpace />
      <BaseButton text="Press Me" onPress={() => console.log('2 button pressed')} disabled={true} />
      <VSpace />
      <BaseButton
        text="Press Me"
        onPress={() => console.log('3 button pressed')}
        iconName="planet"
      />
      <VSpace />
      <BaseButton text="Press Me" onPress={() => console.log('4 button pressed')} outline={true} />
      <VSpace />
      <BaseButton
        text="Press Me"
        onPress={() => console.log('5 button pressed')}
        fontSize={40}
        iconName="cube"
        backgroundColor="#ffbe88"
      />
      <VSpace />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <BaseButton text="Press Me" onPress={() => console.log('button pressed')} />
        </View>
        <View style={{ flex: 1 }}>
          <BaseButton text="Press Me" onPress={() => console.log('button pressed')} />
        </View>
      </View>

      <Text style={s.text}>BaseCheckbox</Text>
      <BaseCheckbox
        checked={checkboxChecked}
        onPress={() => setCheckboxChecked(!checkboxChecked)}
        message="Check me"
      />
      <VSpace />
      <BaseCheckbox
        checked={checkboxChecked2}
        onPress={() => setCheckboxChecked2(!checkboxChecked2)}
        renderMessage={() => (
          <View style={{ marginLeft: 10 }}>
            <Text>First line of text</Text>
            <Text>Second line of text</Text>
          </View>
        )}
      />

      <Text style={s.text}>BaseHorizBar</Text>
      <BaseHorizBar />

      <Text style={s.text}>BaseIcon</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {iconNames.map((name, i) => (
          <View style={{ flexGrow: 1 }} key={name}>
            <BaseIcon name={name} color={getColor(i)} />
          </View>
        ))}
      </View>

      <Text style={s.text}>BaseImage</Text>
      <BaseImage image={img} />

      <Text style={s.text}>InputTypeA</Text>
      <InputTypeA
        label="Full name"
        value=""
        onChangeText={(v: string) => console.log(`changing value = ${v}`)}
      />
      <VSpace />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <InputTypeA
            label="Full name"
            value=""
            onChangeText={(v: string) => console.log(`changing value = ${v}`)}
          />
        </View>
        <View style={{ width: 70 }}>
          <InputTypeA
            label="Sign"
            value=""
            onChangeText={(v: string) => console.log(`changing value = ${v}`)}
            paddingHoriz={5}
            borderRadius={4}
          />
        </View>
      </View>

      <Text style={s.text}>BaseInfoTextScreen</Text>
      <BaseLink
        message="Check out InfoTextScreen"
        onPress={() => navigation.navigate('InfoTextScreen')}
      />

      <Text style={s.text}>BaseSpinnerScreen</Text>
      <BaseLink
        message="Check out SpinnerScreen"
        onPress={() => navigation.navigate('SpinnerScreen')}
      />
    </View>
  );
};

export const HomeScreen = withNTSV(Comp, { title: 'Base Components' });
