import React, { useState, useRef, useEffect } from 'react';
import { Animated, View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { XCentered } from '../XCentered';
import { XColumn } from '../XColumn';
import { InputTypeA } from '../InputTypeA';
import { TextInput } from 'react-native-gesture-handler';
import { useAnimation } from '../helpers';

const stories = storiesOf('InputTypeA', module);

const paddingHoriz = 20;

const hhInput = 100;
const hInput = hhInput / 2;

const hhBox = 300;
const wwBox = 300;

const hhLabel = 40;
const wwLabel = 140;
const hLabel = hhLabel / 2;
const wLabel = wwLabel / 2;

const s = 0.3;

const Test: React.FC = () => {
  const animation = useAnimation(true, 500);
  const dx0 = 0;
  const dy0 = 0;
  const dx1 = hInput - paddingHoriz;
  const dy1 = -hInput;
  const s = 0.3;
  const w = wwLabel;
  const h = hhLabel;
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
          // outputRange: [dx0, dx1 - w / 2 - (w * s) / 2],
          outputRange: [dx0, dx1 - w / 2 + (w * s) / 2],
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          // outputRange: [dy0, dy1 - h / 2 + (h * s) / 2],
          outputRange: [dy0, dy1],
        }),
      },
    ],
  };

  const css = {
    backgroundColor: 'red',
    width: wwLabel,
    height: hhLabel,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Animated.View style={position}>
      <Animated.View style={[scale, css]}>
        <Text style={{ fontSize: 40 }}>2</Text>
      </Animated.View>
    </Animated.View>
  );
};

const Default = () => {
  const animation = useAnimation(true, 500);
  const [value, setValue] = useState('');
  return (
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
          height: hhBox,
          width: wwBox,
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
            // top: halfHeightBox - halfHeighLabel,
            // left: halfHeightBox - halfWidthLabel,
            top: hInput - hLabel,
            left: paddingHoriz,
            height: hhLabel,
            width: wwLabel,
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
            // top: halfHeightBox - halfHeighLabel,
            // left: halfHeightBox - halfWidthLabel,
            top: hInput - hLabel,
            left: paddingHoriz,
          }}
        >
          <Test />
          {/* <Animated.View
            style={{
              backgroundColor: 'red',
              width: wwLabel,
              height: hhLabel,
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    // outputRange: [0, 0 + (wLabel + wLabel * s)],
                    // outputRange: [0, -(wLabel + wLabel * s)],
                    // outputRange: [0, 0],
                    outputRange: [0, -wLabel / 2],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, s],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    // outputRange: [0, +(wLabel + wLabel * s)],
                    // outputRange: [0, 0],
                    outputRange: [0, +wLabel / 2],
                  }),
                },
              ],
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 40 }}>2</Text>
          </Animated.View> */}
        </View>
      </View>
    </View>
  );
};

stories.add('default', () => <Default />);

/*
const MyComponent: React.FC = () => {
  const ref = useRef<View>(null);
  // componentDidMount() {
  //   this.refs.myView.measure((x, y, width, height) => {
  //     console.log('shit =', x, y, width, height);
  //   });
  // }
  useEffect(() => {
    if (ref.current) {
      ref.current.measure((x, y, w, h, px, py) => {
        console.log({ x, y, w, h, px, py });
      });
    }
  }, [ref]);
  return (
    <View ref={ref} style={{ opacity: 1 }} collapsable={false}>
      <Text>TESTING</Text>
    </View>
  );
};

stories.add('test', () => <MyComponent />);
*/

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
