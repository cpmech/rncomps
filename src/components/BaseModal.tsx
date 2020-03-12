import React from 'react';
import { Modal, View, Text, TouchableHighlight, Platform } from 'react-native';
import { IStyles, FontWeight } from './types';

interface IButtonData {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

interface IProps {
  title: string;
  visible: boolean;
  onClose?: () => void;
  buttons?: IButtonData[];
  okDisabled?: boolean;

  fontSizeTitle?: number;
  fontWeightTitle?: FontWeight;

  colorRootBackground?: string;
  colorBackground?: string;
  colorSeparator?: string;
  colorHover?: string;
  colorButton?: string;
  colorButtonDisabled?: string;
  colorTitle?: string;

  width?: string;
}

export const BaseModal: React.FC<IProps> = ({
  title,
  visible,
  onClose,
  buttons,
  okDisabled,

  fontSizeTitle = 20,
  fontWeightTitle,

  colorRootBackground = '#00000090',
  colorBackground = '#fff',
  colorSeparator = '#efefef',
  colorHover = '#efefef',
  colorButton = '#2f95dc',
  colorButtonDisabled = '#cecece',
  colorTitle = '#343434',

  width = '90%',

  children,
}) => {
  const s: IStyles = {
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colorRootBackground,
    },
    view: {
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    separator: {
      width: '100%',
      height: 1,
      backgroundColor: colorSeparator,
    },
    touch: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    buttonViewIos: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonViewAndroid: {
      height: 50,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 40,
    },
    textView: {
      marginBottom: 10,
    },
    title: {
      color: colorTitle,
      fontSize: fontSizeTitle,
      fontWeight: fontWeightTitle,
    },
    link: {
      marginVertical: 10,
      fontSize: 16,
      color: colorButton,
    },
    button: {
      fontSize: 16,
      color: colorButton,
    },
  };

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent={true}>
      <View style={s.root}>
        <View
          style={[
            {
              width,
              backgroundColor: colorBackground,
              borderRadius: 15,
            },
            Platform.OS === 'android' ? { borderRadius: 2 } : {},
          ]}
        >
          <View style={s.view}>
            <View style={s.textView}>
              <Text style={s.title}>{title}</Text>
            </View>
            {children}
            {buttons &&
              buttons.map(btn => (
                <TouchableHighlight
                  key={btn.text}
                  onPress={() => btn.onPress()}
                  underlayColor={colorHover}
                  disabled={btn.disabled}
                >
                  <View>
                    <Text style={s.link} key={btn.text}>
                      {btn.text}
                    </Text>
                  </View>
                </TouchableHighlight>
              ))}
          </View>
          <View style={Platform.select({ ios: s.separator, android: null })} />
          {onClose && (
            <TouchableHighlight
              onPress={onClose}
              style={Platform.select({ ios: s.touchIos, android: null })}
              underlayColor={Platform.select({ ios: colorHover, android: undefined })}
              disabled={okDisabled}
            >
              <View
                style={Platform.select({
                  ios: s.buttonViewIos,
                  android: s.buttonViewAndroid,
                })}
              >
                <Text
                  style={{ ...s.button, color: okDisabled ? colorButtonDisabled : colorButton }}
                >
                  OK
                </Text>
              </View>
            </TouchableHighlight>
          )}
        </View>
      </View>
    </Modal>
  );
};
