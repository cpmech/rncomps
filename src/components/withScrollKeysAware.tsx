import React from 'react';
import { View } from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';

export const withScrollKeysAware = <P extends object>(
  Comp: React.ComponentType<P>,
  paddingTop?: number,
  paddingHoriz?: number,
  backgroundColor?: string,
  minHeight = 800,
  maxHeight = 500,
  maxWidth = 340,
  kasvProps?: KeyboardAwareScrollViewProps,
): React.FC<P> => ({ ...props }) => (
  <KeyboardAwareScrollView {...kasvProps}>
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop,
          paddingLeft: paddingHoriz,
          paddingRight: paddingHoriz,
          backgroundColor,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            minHeight,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              maxHeight,
              maxWidth,
            }}
          >
            <Comp {...(props as P)} />
          </View>
        </View>
      </View>
    </ScrollView>
  </KeyboardAwareScrollView>
);
