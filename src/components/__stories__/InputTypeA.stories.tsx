import React, { useState } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { XCentered } from '../XCentered';
import { XColumn } from '../XColumn';
import { InputTypeA } from '../InputTypeA';

const stories = storiesOf('InputTypeA', module);

const Default = () => {
  const [value, setValue] = useState('');
  return (
    <View style={{ backgroundColor: 'yellow' }}>
      <InputTypeA label="Email" value={value} onChange={v => setValue(v)} readOnly={false} />
    </View>
  );
};

stories.add('default', () => <Default />);

/*
stories.add('default (smaller)', () => (
  <XCentered>
    <XColumn>
      <InputTypeA
        label="Email"
        value="testing@example.com"
        onChange={v => console.log(v)}
        height={32}
        fontSize={14}
        labelFontSize={14}
      />
      <InputTypeA
        label="Email"
        value="dorival.pedroso@gmail.com"
        onChange={v => console.log(v)}
        height={32}
        fontSize={14}
        labelFontSize={14}
      />
    </XColumn>
  </XCentered>
));

stories.add('error', () => (
  <XCentered>
    <XColumn>
      <InputTypeA
        label="Email"
        value="dorival.pedroso@gmail.com"
        onChange={v => console.log(v)}
        error="Please, enter a valid email"
      />
      <InputTypeA
        label="Email"
        value="dorival.pedroso@gmail.com"
        onChange={v => console.log(v)}
        error=""
      />
      <InputTypeA
        label="Email"
        value="dorival.pedroso@gmail.com"
        onChange={v => console.log(v)}
        error={true}
      />
      <InputTypeA
        label="Email"
        value="dorival.pedroso@gmail.com"
        onChange={v => console.log(v)}
        error={false}
      />
    </XColumn>
  </XCentered>
));

stories.add('stacked', () => (
  <View
    style={
      {
        // flex: 1,
        // flexDirection: 'column',
      }
    }
  >
    <InputTypeA onChange={v => console.log(v)} label="Name" value="Hello World!" />
    <InputTypeA value="dorival.pedroso@gmail.com" onChange={v => console.log(v)} label="Email" />
    <InputTypeA
      value="dorival.pedroso@gmail.com"
      onChange={v => console.log(v)}
      label="Password"
      password={true}
    />
  </View>
));

stories.add('on row', () => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
    }}
  >
    <InputTypeA label="Name" onChange={v => console.log(v)} value="Hello World!" flatRight={true} />
    <InputTypeA
      label="Email"
      value="dorival.pedroso@gmail.com"
      onChange={v => console.log(v)}
      flatLeft={true}
      flatRight={true}
    />
    <InputTypeA
      label="Password"
      value="Senha"
      onChange={v => console.log(v)}
      password={true}
      flatLeft={true}
    />
  </View>
));

export const Controlled = () => {
  const [email, setEmail] = useState('doriv4l@gmail.com');
  return <InputTypeA label="Email" value={email} onChange={value => setEmail(value)} />;
};

stories.add('controlled', () => {
  return (
    <XCentered>
      <Controlled />
    </XCentered>
  );
});
*/
