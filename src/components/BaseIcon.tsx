import React from 'react';
import { Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import { IStyle } from './types';

export type IconKind = 'ion' | 'mat' | 'line' | 'feather';

export interface IBaseIconProps {
  name: string;
  style?: IStyle;
  color?: string;
  size?: number;
  kind?: IconKind;
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
}) => {
  // aliases
  let n = name;
  let k = kind;
  let fixed = false;
  switch (name) {
    case 'tux':
      n = 'logo-tux';
      k = 'ion';
      fixed = true;
      break;

    case 'game':
      n = kind === 'line' || kind === 'feather' ? 'game-controller' : 'logo-game-controller-b';
      k = kind === 'feather' ? 'line' : kind === 'mat' ? 'ion' : kind;
      fixed = true;
      break;

    case 'pencil':
      n = kind === 'feather' ? 'edit-2' : name;
      k = kind === 'mat' || kind === 'ion' ? 'line' : kind;
      break;

    case 'eye-off':
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
    case 'rocket':
    case 'trophy':
      k = kind === 'feather' ? 'line' : kind === 'mat' ? 'ion' : kind;
      break;

    case 'more':
    case 'ellipsis':
    case 'ellipsis-v':
      n = kind === 'mat' ? 'more-vert' : 'more';
      k = kind === 'line' || kind === 'feather' ? 'ion' : kind;
      break;

    case 'cloud':
      k = kind === 'line' ? 'feather' : kind;
      break;

    case 'chart':
      n =
        kind === 'ion' || kind === 'mat' ? 'insert-chart' : kind === 'feather' ? 'bar-chart' : name;
      k = kind === 'ion' ? 'mat' : kind;
      break;

    case 'bubbles':
      n = kind === 'ion' ? 'chatbubbles' : kind === 'mat' ? 'chat-bubble' : name;
      k = kind === 'feather' ? 'line' : kind;
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

  // ion
  return <IonIcon name={n} size={size} color={color} style={style} />;
};
