import React from 'react';
import { View } from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';

export const withScrollKeysAware = <P extends object>(
  Comp: React.ComponentType<P>,
  {
    backgroundColor,
    minHeight, // e.g. 800
    contentMaxHeight, // e.g. 500
    contentMaxWidth, // e.g. 340
    paddingTop,
    paddingHoriz,
  }: {
    backgroundColor: string;
    minHeight?: number;
    contentMaxHeight?: number;
    contentMaxWidth?: number;
    paddingTop?: number;
    paddingHoriz?: number;
  },
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
              maxHeight: contentMaxHeight,
              maxWidth: contentMaxWidth,
            }}
          >
            <Comp {...(props as P)} />
          </View>
        </View>
      </View>
    </ScrollView>
  </KeyboardAwareScrollView>
);
