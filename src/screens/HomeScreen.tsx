import React, { useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { NavigationScreenProp, ScrollView } from 'react-navigation';
import {
  withNTSV,
  BaseButton,
  BaseCheckbox,
  BaseLink,
  BaseModal,
  BaseHorizBar,
  BaseIcon,
  BaseImage,
  BaseInput,
  BaseSpacer,
  BasePicker,
  IStyles,
} from '../components';

const iconNames = [
  'cube',
  'construct',
  'cloud',
  'trophy',
  'rocket',
  'planet',
  'logo-game-controller-b',
  'logo-tux',
];

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
const img = require('../components/assets/mb-eclass.png');

const pickerData = [
  { value: 'fry', label: 'Philip J. Fry', image: require('../assets/fry.png') },
  { value: 'leela', label: 'Turanga Leela', image: require('../assets/leela.png') },
  { value: 'bender', label: 'Bender Bending Rodriguez', image: require('../assets/bender.png') },
  { value: 'prof', label: 'Professor Hubert J. Farnsworth', image: require('../assets/prof.png') },
  { value: 'amy', label: 'Amy Wong', image: require('../assets/amy.png') },
  { value: 'hermes', label: 'Hermes Conrad', image: require('../assets/hermes.png') },
  { value: 'zoidberg', label: 'Dr. John A. Zoidberg', image: require('../assets/zoidberg.png') },
  { value: 'zapp', label: 'Zapp Brannigan', image: require('../assets/zapp.png') },
  { value: 'kif', label: 'Kif Kroker', image: require('../assets/kif.png') },
  { value: 'mom', label: 'Mom', image: require('../assets/mom.png') },
  { value: 'walt', label: 'Walt', image: require('../assets/walt.png') },
  { value: 'igner', label: 'Igner', image: require('../assets/igner.png') },
  { value: 'larry', label: 'Larry', image: require('../assets/larry.png') },
  { value: 'roberto', label: 'Roberto', image: require('../assets/roberto.png') },
  { value: 'nibbler', label: 'Nibbler', image: require('../assets/nibbler.png') },
  { value: 'scruffy', label: 'Scruffy', image: require('../assets/scruffy.png') },
  { value: 'url', label: 'URL', image: require('../assets/url.png') },
  { value: 'smitty', label: 'Smitty', image: require('../assets/smitty.png') },
  { value: 'elzar', label: 'Elzar', image: require('../assets/elzar.png') },
  { value: 'labarbara', label: 'LaBarbara Conrad', image: require('../assets/labarbara.png') },
  { value: 'hgblob', label: 'Horrible Gelatinous Blob', image: require('../assets/hgblob.png') },
  { value: 'calculon', label: 'Calculon', image: require('../assets/calculon.png') },
  { value: 'hedonismbot', label: 'Hedonismbot', image: require('../assets/hedonismbot.png') },
  { value: 'clamps', label: 'Clamps', image: require('../assets/clamps.png') },
  { value: 'donbot', label: 'Donbot', image: require('../assets/donbot.png') },
  { value: 'fanny', label: 'Fanny', image: require('../assets/fanny.png') },
  { value: 'lrrr', label: 'Lrrr', image: require('../assets/lrrr.png') },
  { value: 'ndnd', label: 'Ndnd', image: require('../assets/ndnd.png') },
  { value: 'santa', label: 'Robot Santa Claus', image: require('../assets/santa.png') },
  { value: 'flexo', label: 'Flexo', image: require('../assets/flexo.png') },
];

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
      <Text style={s.text}>BaseDialog</Text>
      <BaseModal
        title="My Modal Window"
        visible={dialogVisible}
        onClose={() => setDialogVisible(false)}
        renderContent={() => (
          <View style={{ marginLeft: 10 }}>
            <Text>Hello, People!</Text>
            <Text>This is a Modal window</Text>
            <BaseSpacer />
            <BaseImage image={img} />
            <BaseSpacer />
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
        )}
      />
      <BaseButton text="Show Dialog" onPress={() => setDialogVisible(true)} />

      <Text style={s.text}>BasePicker</Text>
      <BasePicker
        prompt="What's your favorite character?"
        data={pickerData}
        selectedValue={pickerSelected}
        onValueChange={(value: string) => {
          console.log(`selecting ${value}`);
          setPickerSelected(value);
        }}
        selectedColor="#355C7D"
        selectedBGcolor="#F8B195"
        selectedFontSize={18}
        selectedFontFamily={Platform.OS === 'android' ? 'monospace' : 'Courier New'}
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
      <BaseSpacer />
      <BaseButton text="Press Me" onPress={() => console.log('2 button pressed')} disabled={true} />
      <BaseSpacer />
      <BaseButton
        text="Press Me"
        onPress={() => console.log('3 button pressed')}
        iconName="planet"
      />
      <BaseSpacer />
      <BaseButton text="Press Me" onPress={() => console.log('4 button pressed')} outline={true} />
      <BaseSpacer />
      <BaseButton
        text="Press Me"
        onPress={() => console.log('5 button pressed')}
        fontSize={40}
        iconName="cube"
        bg="#ffbe88"
      />

      <Text style={s.text}>BaseCheckbox</Text>
      <BaseCheckbox
        checked={checkboxChecked}
        onPress={() => setCheckboxChecked(!checkboxChecked)}
        message="Check me"
      />
      <BaseSpacer />
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

      <Text style={s.text}>BaseInput</Text>
      <BaseInput
        caption="PLEASE, TYPE IN YOUR NAME"
        onChange={(value: string) => {
          console.log(`changing value = ${value}`);
        }}
        onDone={(value: string) => {
          console.log(`done: value = ${value}`);
        }}
        height={100}
        fontSize={60}
        captionColor="#ff6ada"
        color="#d600a1"
        placeholder="Name Here"
        placeholderColor="#b39bad"
        borderBottomColor="#8f3e7b"
        borderBottomWidth={3}
      />

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

export const HomeScreen = withNTSV(Comp, 'Base Components');
