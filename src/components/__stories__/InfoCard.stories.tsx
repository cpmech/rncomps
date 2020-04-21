import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { InfoCard } from '../InfoCard';
import { BaseLink } from '../BaseLink';
import { SelfContainedImage } from '../SelfContainedImage';
import { withScrollKeysAware } from '../withScrollKeysAware';

const loremIpsumFew = (
  <ScrollView>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pharetra turpis, et
      pharetra turpis. Quisque sit amet metus feugiat, aliquet risus id, egestas elit. Fusce
      vulputate purus dui, ut molestie purus malesuada eget. Curabitur sed elit magna. Proin
      accumsan purus a tellus feugiat, ac facilisis neque imperdiet. Etiam massa augue, efficitur
      sit amet placerat at, gravida non nisi. Curabitur suscipit iaculis erat, laoreet luctus arcu
      venenatis nec. Nam mattis nibh id mi laoreet, vitae aliquet nibh volutpat. Sed id consequat
      odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
      Donec efficitur nisi imperdiet mi commodo, at mollis diam lobortis.
    </Text>
  </ScrollView>
);

const stories = storiesOf('InfoCard', module);

const Hero: React.FC = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <View style={{ height: 90, width: 90 }}>
      <SelfContainedImage image={require('./houseThreeD.png')} />
    </View>
    <Text
      style={{
        paddingLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4a76ff',
        width: 120,
      }}
    >
      Found my new house!
    </Text>
  </View>
);

const Buttons = () => (
  <View>
    <BaseLink
      text="Vist my website"
      fontSize={16}
      color="#4a76ff"
      onPress={() => console.log('hello')}
      textDecorationLine="none"
    />
  </View>
);

const Comp: React.FC = () => (
  <View style={{ alignItems: 'center' }}>
    <View style={{ marginBottom: 30 }}></View>
    <InfoCard title="Good news!" hero={<Hero />} buttons={<Buttons />}>
      {loremIpsumFew}
    </InfoCard>
  </View>
);

const Test = withScrollKeysAware(Comp, { backgroundColor: 'transparent' });

stories.add('default', () => <Test />);
