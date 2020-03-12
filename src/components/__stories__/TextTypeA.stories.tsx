import React from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { TextTypeA } from '../TextTypeA';

const stories = storiesOf('TextTypeA', module);

const styles = StyleSheet.create({
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
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
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextTypeA
            label="Preferred character"
            value="Bender Rodriguez"
            factorFontsize2width={0.5}
            borderWidth={3}
            bgColor="red"
            color="#ffffff"
            mutedColor="#ffffff"
          />
          <TextTypeA
            label="Preferred character"
            value="Bender Rodriguez"
            factorFontsize2width={0.5}
            borderWidth={3}
          />
          <TextTypeA
            label="Preferred character"
            value="Bender Rodriguez"
            factorFontsize2width={0.5}
            borderWidth={3}
            suffix={<Text>HELLO</Text>}
            bgColor="yellow"
          />
          <View style={{ backgroundColor: 'blue' }}>
            <TextTypeA
              label="Preferred character"
              value="Bender Rodriguez"
              material={true}
              suffix={<Text>HELLO</Text>}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

stories.add('default', () => <Default />);
