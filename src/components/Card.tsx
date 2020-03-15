import React, { useState, ReactNode } from 'react';
import { TextStyle, Text, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconButton } from './IconButton';
import { TH } from './helpers';

// ref: https://github.com/styled-components/styled-components/issues/709#issuecomment-409810928
const getBoxShadow = (
  elevation = 4,
  width = 5,
  height = 5,
  color = 'grey',
  opacity = 0.5,
  radius = 10,
) => ({
  elevation,
  shadowOffset: { width, height },
  shadowColor: color,
  shadowOpacity: opacity,
  shadowRadius: radius,
});

export interface ICardMenuEntry {
  text: string;
  onPress: () => void;
}

export interface ICardProps {
  width?: number;
  height?: number;
  iconSize?: number;
  iconPadding?: number;
  borderRadius?: number;
  bgColor?: string;

  menuEntries?: ICardMenuEntry[];
  menuWidthBox?: string; // width of entries box
  menuHeightBox?: number; // height of entries box
  menuTextStyle?: TextStyle;
  menuEntryHeight?: number;

  headerColor?: string;
  headerBgColor?: string;
  headerHeight?: number;

  title?: string;
  titleBgColor?: string;
  titleBorderColor?: string;
  titleStyle?: TextStyle;

  paddingHoriz?: number;
  paddingVert?: number;

  heroHeight?: number;
  heroBg?: string[]; // use more than one color to set linear gradient
  hero?: ReactNode;

  buttonsHeight?: number;
  buttonsBg?: string;
  buttons?: any;
}

export const Card: React.FC<ICardProps> = ({
  width = 257,
  height = 400,
  iconSize = 20,
  iconPadding = 25,
  borderRadius = 8,
  bgColor = '#ffffff',

  menuEntries,
  menuWidthBox,
  menuHeightBox,
  menuTextStyle,
  menuEntryHeight = 50,

  headerColor = '#484848',
  headerBgColor = '#ffffff',
  headerHeight = 38,

  title,
  titleStyle = { fontWeight: 'bold', color: '#484848' },

  paddingHoriz = 20,
  paddingVert = 10,

  heroHeight = 100,
  heroBg = ['#ffffff', '#dfe9f3'],
  hero,

  buttonsHeight = 45,
  buttonsBg = '#ffffff',
  buttons,

  children,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const contentWidth = width - 2 * paddingHoriz;
  let contentHeight = height - headerHeight - 2 * paddingVert;
  let contentTop = headerHeight + paddingVert;
  if (hero) {
    contentHeight -= heroHeight;
    contentTop += heroHeight;
  }
  if (buttons) {
    contentHeight -= buttonsHeight;
  }

  let floatStyle: ViewStyle | undefined;
  let menuEntryStyle: ViewStyle | undefined;
  if (menuEntries) {
    floatStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: '#f9f9f9',
      minWidth: 160,
      height: menuHeightBox,
      width: menuWidthBox,
      ...getBoxShadow(),
    };
    menuEntryStyle = {
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: paddingHoriz,
      paddingRight: paddingHoriz,
      height: menuEntryHeight,
      overflow: 'hidden',
    };
  }

  return (
    <View
      style={{
        position: 'relative',
        width,
        height,
        backgroundColor: bgColor,
        overflow: 'hidden',
        borderRadius,
        ...getBoxShadow(),
      }}
    >
      {title && (
        <View
          style={{
            // header
            position: 'absolute',
            top: 0,
            left: paddingHoriz,
            width: '100%',
            backgroundColor: headerBgColor,
          }}
        >
          <View
            style={{
              // title
              height: headerHeight,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {titleStyle ? (
              <Text style={titleStyle}>{title}</Text>
            ) : (
              <Text style={{ color: headerColor }}>{title}</Text>
            )}
          </View>
        </View>
      )}

      {hero && (
        <View
          style={{
            // hero container
            position: 'absolute',
            top: headerHeight,
            left: 0,
            width: '100%',
            backgroundColor: heroBg.length > 1 ? undefined : heroBg[0],
          }}
        >
          {heroBg.length > 1 ? (
            <LinearGradient colors={heroBg}>
              <View
                style={{
                  // hero with gradient
                  height: heroHeight,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {hero}
              </View>
            </LinearGradient>
          ) : (
            <View
              style={{
                // hero
                height: heroHeight,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {hero}
            </View>
          )}
        </View>
      )}

      <View
        style={{
          // children
          position: 'absolute',
          top: contentTop,
          left: paddingHoriz,
          width: contentWidth,
          height: contentHeight,
          overflow: 'hidden',
        }}
      >
        {children}
      </View>

      {buttons && (
        <View
          style={{
            // buttons container
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
          }}
        >
          <View
            style={{
              // buttons
              height: buttonsHeight,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: buttonsBg,
            }}
          >
            {buttons}
          </View>
        </View>
      )}

      {menuEntries && (
        <React.Fragment>
          <View
            style={{
              // icon container
              position: 'absolute',
              top: 0,
              right: 0,
            }}
          >
            <View
              style={{
                // menu icon
                alignItems: 'center',
                justifyContent: 'center',
                width: iconSize + iconPadding,
                height: headerHeight,
                // color: headerColor,
              }}
            >
              <IconButton name="more" size={iconSize} onPress={() => setShowMenu(true)} />
            </View>
          </View>
          {/* menu */}
          {showMenu && (
            <View style={floatStyle}>
              {menuEntries.map((e, i) => {
                const children = (
                  <View style={menuEntryStyle}>
                    {menuTextStyle ? (
                      <Text style={menuTextStyle}>{e.text}</Text>
                    ) : (
                      <Text>{e.text}</Text>
                    )}
                  </View>
                );
                return (
                  <React.Fragment key={i}>
                    {TH(() => {
                      if (e.onPress) {
                        e.onPress();
                      }
                      setShowMenu(false);
                    }, children)}
                  </React.Fragment>
                );
              })}
            </View>
          )}
        </React.Fragment>
      )}
    </View>
  );
};
