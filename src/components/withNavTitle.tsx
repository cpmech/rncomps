import React from 'react';

export const withNavTitle = <P extends object>(
  Comp: React.ComponentType<P>,
  {
    title,
    headerColor,
    headerBackgroundColor,
    headerIsFlat,
    headerTitleIsBold,
  }: {
    title: string;
    headerColor?: string;
    headerBackgroundColor?: string;
    headerIsFlat?: boolean;
    headerTitleIsBold?: boolean;
  },
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
      return <Comp {...(props as P)} />;
    }
  };
