import React from 'react';
import { Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { IStyle } from './types';

export type IconKind = 'ion' | 'mat' | 'line' | 'feather' | 'fa5';

export interface IBaseIconProps {
  name: string;
  style?: IStyle;
  color?: string;
  size?: number;
  kind?: IconKind;
  fa5solid?: boolean;
}

// references:
//  https://oblador.github.io/react-native-vector-icons/
//  https://feathericons.com/

export const BaseIcon: React.FC<IBaseIconProps> = ({
  name,
  style,
  color = '#343434',
  size = 26,
  kind = 'ion',
  fa5solid,
}) => {
  // aliases
  let n = name;
  let k = kind;
  let s = fa5solid;
  let fixed = false;
  switch (name) {
    case 'tux':
      n = 'logo-tux';
      k = 'ion';
      fixed = true;
      break;

    case 'game':
      n = kind === 'line' || kind === 'feather' ? 'game-controller' : 'logo-game-controller-b';
      k = kind === 'feather' ? 'line' : kind === 'mat' || kind === 'fa5' ? 'ion' : kind;
      fixed = true;
      break;

    case 'pencil':
      n = kind === 'feather' ? 'edit-2' : name;
      k = kind === 'mat' || kind === 'fa5' || kind === 'ion' ? 'line' : kind;
      break;

    case 'eye-off':
      n = kind === 'fa5' ? 'eye-slash' : name;
      k = kind === 'line' ? 'feather' : kind === 'mat' ? 'ion' : kind;
      break;

    case 'cube':
      n = kind === 'line' || kind === 'feather' ? 'box' : name;
      k = kind === 'line' ? 'feather' : kind === 'mat' ? 'ion' : kind;
      break;

    case 'info':
      n = kind === 'ion' ? 'information-circle' : name;
      break;

    case 'eye':
    case 'calendar':
    case 'heart':
      k = kind === 'mat' ? 'ion' : kind;
      break;

    case 'bulb':
      n = kind === 'fa5' ? 'lightbulb' : name;
      k = kind === 'feather' ? 'line' : kind === 'mat' ? 'ion' : kind;
      break;

    case 'rocket':
    case 'trophy':
      k = kind === 'feather' ? 'line' : kind === 'mat' ? 'ion' : kind;
      break;

    case 'more':
    case 'ellipsis':
    case 'ellipsis-v':
      n = kind === 'mat' ? 'more-vert' : 'more';
      k = kind === 'line' || kind === 'feather' || kind === 'fa5' ? 'ion' : kind;
      break;

    case 'cloud':
      k = kind === 'line' ? 'feather' : kind;
      break;

    case 'chart':
      n =
        kind === 'ion' || kind === 'mat'
          ? 'insert-chart'
          : kind === 'feather'
          ? 'bar-chart'
          : kind === 'fa5'
          ? 'chart-bar'
          : name;
      k = kind === 'ion' ? 'mat' : kind;
      break;

    case 'bubbles':
      n = kind === 'ion' ? 'chatbubbles' : kind === 'mat' || kind === 'fa5' ? 'chat-bubble' : name;
      k = kind === 'feather' ? 'line' : kind === 'fa5' ? 'mat' : kind;
      break;

    case 'chevron-next':
      n = 'chevron-right';
      k = 'feather';
      break;

    case 'chevron-back':
      n = 'chevron-left';
      k = 'feather';
      break;

    case 'chevron-next':
    case 'chevron-back':
    case 'chevron-down':
    case 'chevron-up':
      k = 'feather';
      break;

    case 'arrow-next':
      n = 'arrow-forward';
      k = 'ion';
      break;

    case 'arrow-back':
    case 'arrow-down':
    case 'arrow-up':
    case 'contract':
    case 'expand':
    case 'happy':
    case 'construct':
    case 'planet':
    case 'paper':
      k = 'ion';
      break;

    case 'settings':
      k = kind === 'fa5' ? (fa5solid ? 'mat' : 'line') : kind;
      break;

    case 'power':
      n = kind === 'fa5' ? 'power-off' : name;
      break;

    case 'solar-panel':
      k = 'fa5';
      break;

    case 'user':
      k = kind === 'ion' || kind === 'mat' ? 'fa5' : kind;
      s = kind === 'ion' || kind === 'mat' ? true : fa5solid;
      break;
  }

  if (k === 'ion' && !fixed) {
    n = Platform.select({ ios: `ios-${n}`, android: `md-${n}` }) || n;
  }

  // material
  if (k === 'mat') {
    return <MaterialIcon name={n} size={size} color={color} style={style} />;
  }

  // line
  if (k === 'line') {
    return <SimpleLineIcons name={n} size={size} color={color} style={style} />;
  }

  // feather
  if (k === 'feather') {
    return <Feather name={n} size={size} color={color} style={style} />;
  }

  if (k === 'fa5') {
    return <FontAwesome5 name={n} size={size} color={color} solid={s} />;
  }

  // ion
  return <IonIcon name={n} size={size} color={color} style={style} />;
};
