import React from 'react';
import { View } from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { useDimensions } from '@react-native-community/hooks';

export const withScrollKeysAware = <P extends object>(
  Comp: React.ComponentType<P>,

  {
    backgroundColor,
    contentMaxHeight, // e.g. 500
    contentMaxWidth, // e.g. 340
    paddingTop,
    paddingBottom,
    paddingHoriz,
    nestedScrollEnabled,

    justifyContent,
    alignItems,
  }: {
    backgroundColor: string;
    contentMaxHeight?: number;
    contentMaxWidth?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingHoriz?: number;
    nestedScrollEnabled?: boolean;

    justifyContent?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly';

    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  },

  kasvProps?: KeyboardAwareScrollViewProps,

  //
): React.FC<P> => ({ ...props }) => {
  //
  const { width, height } = useDimensions().window;

  return (
    <KeyboardAwareScrollView {...kasvProps}>
      <ScrollView nestedScrollEnabled={nestedScrollEnabled}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop,
            paddingBottom,
            paddingLeft: paddingHoriz,
            paddingRight: paddingHoriz,
            backgroundColor,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems,
              minHeight: height,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent,
                maxHeight: contentMaxHeight,
                maxWidth: contentMaxWidth || width,
              }}
            >
              <Comp {...(props as P)} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};
