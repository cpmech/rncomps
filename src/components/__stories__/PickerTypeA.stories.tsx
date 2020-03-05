import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { PickerTypeA } from '../PickerTypeA';
import { fmaPickerData } from '../../screens/fmaPickerData';

const stories = storiesOf('PickerTypeA', module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});

const Default = () => {
  const [character, setCharacter] = useState('prof');
  const [age, setAge] = useState('18');
  const [sex, setSex] = useState('female');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <PickerTypeA
              label="Preferred character"
              prompt="Who is your preferred character?"
              selectedValue={character}
              onValueChange={v => setCharacter(v)}
              data={fmaPickerData}
              factorFontsize2width={0.5}
              imageSize={150}
              imageVertGap={10}
              textMaxWidth={120}
              itemsMaxWidth={100}
            />
            <PickerTypeA
              label="Preferred character"
              prompt="Who is your preferred character?"
              selectedValue={character}
              onValueChange={v => setCharacter(v)}
              data={fmaPickerData}
              factorFontsize2width={0.5}
            />
            <PickerTypeA
              label="Preferred character"
              prompt="Who is your preferred character?"
              selectedValue={character}
              onValueChange={v => setCharacter(v)}
              data={fmaPickerData}
              factorFontsize2width={0.5}
              imageHideSelected={true}
            />
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <PickerTypeA
                label="Age"
                prompt="Please select one"
                selectedValue={age}
                onValueChange={v => setAge(v)}
                data={[
                  { value: '18', label: '18 - 34' },
                  { value: '35', label: '35 - 54' },
                  { value: '55', label: 'over 55' },
                ]}
                width="50%"
                flatRight={true}
              />
              <PickerTypeA
                label="Sex"
                prompt="Please select one"
                selectedValue={sex}
                onValueChange={v => setSex(v)}
                data={[
                  { value: 'male', label: 'male' },
                  { value: 'female', label: 'female' },
                ]}
                width="50%"
                flatLeft={true}
                noBorderLeft={true}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

stories.add('default', () => <Default />);
