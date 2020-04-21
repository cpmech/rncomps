import React, { useState, ReactNode } from 'react';
import { TextStyle, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDimensions } from '@react-native-community/hooks';
import { IconButton } from './IconButton';
import { getBoxShadow } from './helpers';

export interface IInfoCardProps {
  showHide?: boolean;
  initShow?: boolean;

  iconSize?: number;
  iconPadding?: number;
  borderRadius?: number;
  bgColor?: string;

  headerColor?: string;
  headerBgColor?: string;
  headerHeight?: number;

  title?: string;
  titleBgColor?: string;
  titleBorderColor?: string;
  titleStyle?: TextStyle;

  maxWidth?: number;
  paddingHoriz?: number;
  paddingVert?: number;

  heroBg?: string[]; // use more than one color to set linear gradient
  hero?: ReactNode;

  buttonsHeight?: number;
  buttonsBg?: string;
  buttons?: any;
}

export const InfoCard: React.FC<IInfoCardProps> = ({
  showHide = true,
  initShow = true,

  iconSize = 20,
  iconPadding = 25,
  borderRadius = 8,
  bgColor = '#ffffff',

  headerColor = '#484848',
  headerBgColor = '#ffffff',
  headerHeight = 38,

  title,
  titleStyle = { fontWeight: 'bold', color: '#484848' },

  maxWidth,
  paddingHoriz = 20,
  paddingVert = 20,

  heroBg = ['#ffffff', '#dfe9f3'],
  hero,

  buttonsHeight = 45,
  buttonsBg = '#ffffff',
  buttons,

  children,
}) => {
  const { width } = useDimensions().window;
  const [show, setShow] = useState(initShow);

  const w = width - 2 * paddingHoriz;
  const ww = maxWidth ? Math.min(maxWidth - 2 * paddingHoriz, w) : w;

  return (
    <View
      style={{
        // root
        position: 'relative',
        width: ww,
        backgroundColor: bgColor,
        borderRadius,
        ...getBoxShadow(),
      }}
    >
      {/* ---------------------------- title -------------------------------- */}
      {title && (
        <View
          style={{
            // header
            paddingLeft: paddingHoriz,
            backgroundColor: headerBgColor,
            borderRadius,
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

      {/* ---------------------------- content -------------------------------- */}
      {show && (
        <View>
          {hero && (
            <View
              style={{
                // hero container
                backgroundColor: heroBg.length > 1 ? undefined : heroBg[0],
              }}
            >
              {heroBg.length > 1 ? (
                <LinearGradient colors={heroBg}>
                  <View
                    style={{
                      // hero with gradient
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
              paddingVertical: paddingVert,
              paddingHorizontal: paddingHoriz,
            }}
          >
            {children}
          </View>

          {buttons && (
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
          )}
        </View>
      )}

      {/* ---------------------------- icon -------------------------------- */}
      {showHide && (
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
            }}
          >
            <IconButton
              name={show ? 'chevron-up' : 'chevron-down'}
              size={iconSize}
              onPress={() => setShow(!show)}
            />
          </View>
        </View>
      )}
    </View>
  );
};
