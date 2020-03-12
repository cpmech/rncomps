import React, { useState } from 'react';
import {
  Animated,
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { BaseIcon } from '../BaseIcon';
import { InputTypeA } from '../InputTypeA';
import { useAnimation } from '../helpers';

const stories = storiesOf('InputTypeA', module);

const paddingHoriz = 20;

const HInput = 100;
const hInput = HInput / 2;

const HBox = 300;
const WBox = 300;

const HLabel = 40;
const WLabel = 140;
const hLabel = HLabel / 2;

const TestLabel: React.FC = () => {
  const animation = useAnimation(true, 500);
  const dx1 = hInput - paddingHoriz;
  const dy1 = -hInput;
  const s = 0.7;
  const w = WLabel;
  const scale = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, s],
        }),
      },
    ],
  };

  const position = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, dx1 - w / 2 + (w * s) / 2],
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, dy1],
        }),
      },
    ],
  };

  const css = {
    backgroundColor: 'red',
    width: WLabel,
    height: HLabel,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Animated.View style={position}>
      <Animated.View style={[scale, css]}>
        <Text style={{ fontSize: HLabel }}>2</Text>
      </Animated.View>
    </Animated.View>
  );
};

const Test = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    }}
  >
    <View
      style={{
        backgroundColor: '#cecece',
        height: HBox,
        width: WBox,
      }}
    >
      <View style={{ position: 'absolute', top: 0, width: '100%' }}>
        <TextInput
          style={{
            height: 100,
            borderWidth: 1,
            borderRadius: 50,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          position: 'absolute',
          top: hInput - hLabel,
          left: paddingHoriz,
          height: HLabel,
          width: WLabel,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 40 }}>1</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: hInput - hLabel,
          left: paddingHoriz,
        }}
      >
        <TestLabel />
      </View>
    </View>
  </View>
);

stories.add('test', () => <Test />);

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
  const [values, setValues] = useState({
    fullname: 'My here',
    email: 'me@example.com',
    password: '',
    age: '',
    sex: 'male',
  });
  const [showPassword, setShowPassword] = useState(false);

  const renderIcon = (
    <TouchableHighlight onPress={() => setShowPassword(!showPassword)}>
      {showPassword ? <BaseIcon name="eye-off" size={20} /> : <BaseIcon name="eye" size={20} />}
    </TouchableHighlight>
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            {/* <Text style={styles.header}>Header</Text>
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} />
            <TextInput placeholder="Confrim Password" style={styles.input} />
            <View style={styles.btnContainer}>
              <Button title="Submit" onPress={() => null} />
            </View>
            <View style={{ flex: 1 }} /> */}
            <InputTypeA
              label="Fullname"
              value={values.fullname}
              onChangeText={v => setValues({ ...values, fullname: v })}
              autoCorrect={false}
            />
            <InputTypeA
              label="Email"
              value={values.email}
              onChangeText={v => setValues({ ...values, email: v })}
              autoCompleteType="email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
            />
            <InputTypeA
              label="Password"
              value={values.password}
              onChangeText={v => setValues({ ...values, password: v })}
              autoCorrect={false}
              textContentType="password"
              secureTextEntry={!showPassword}
              suffix={renderIcon}
            />
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <InputTypeA
                label="Age"
                value={values.age}
                onChangeText={v => setValues({ ...values, age: v })}
                width="50%"
                flatRight={true}
                keyboardType="numeric"
                autoCorrect={false}
              />
              <InputTypeA
                label="Sex"
                value={values.sex}
                onChangeText={v => setValues({ ...values, sex: v })}
                width="50%"
                flatLeft={true}
                noBorderLeft={true}
                editable={false}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

stories.add('default', () => <Default />);
