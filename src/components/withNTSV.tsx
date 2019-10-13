import React from 'react';
import { ScrollView, View } from 'react-native';
import { svStyles } from './withScrollView';

// with NavTitle and ScrollView (NTSV)
export const withNTSV = <P extends object>(
  Comp: React.ComponentType<P>,
  title: string,
  backgroundColor?: string,
  headerColor?: string,
  headerBackgroundColor?: string,
  headerIsFlat?: boolean,
  headerTitleIsBold?: boolean,
) =>
  class WithNavTitleScreen extends React.Component<P> {
    static navigationOptions = {
      title,
      headerTintColor: headerColor,
      headerStyle: headerBackgroundColor
        ? headerIsFlat
          ? { elevation: 0, borderBottomWidth: 0, backgroundColor: headerBackgroundColor }
          : { backgroundColor: headerBackgroundColor }
        : headerIsFlat
        ? { elevation: 0, borderBottomWidth: 0 }
        : {},
      headerTitleStyle: headerTitleIsBold ? { fontWeight: 'bold' } : {},
    };
    render() {
      const { ...props } = this.props;
      return (
        <ScrollView style={{ backgroundColor }}>
          <View style={svStyles.root}>
            <View style={svStyles.content}>
              <Comp {...(props as P)} />
              <View style={svStyles.extraSpace} />
            </View>
          </View>
        </ScrollView>
      );
    }
  };
