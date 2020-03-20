import React from 'react';
import { View, Text, TouchableHighlight, Platform, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { FontWeight } from './types';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  separator: {
    width: '100%',
    height: 1,
  },
  touch: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonView: {
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  textView: {
    marginBottom: 10,
  },
  link: {},
});

export interface IButtonData {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

export interface IBaseModalProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  onYes?: () => void;

  showCancelButton?: boolean;
  hideOkButton?: boolean;
  textCancel?: string;
  textOK?: string;

  links?: IButtonData[];
  okDisabled?: boolean;

  fontFamily?: string;
  fontFamilyLink?: string;
  fontSizeTitle?: number;
  fontSizeButton?: number;
  fontSizeLink?: number;
  fontWeightTitle?: FontWeight;

  colorRootBackground?: string;
  colorBackground?: string;
  colorSeparator?: string;
  colorHover?: string;
  colorButton?: string;
  colorButtonDisabled?: string;
  colorTitle?: string;

  width?: string;
  maxWidth?: number;
}

export const BaseModal: React.FC<IBaseModalProps> = ({
  title,
  visible,
  onClose,
  onYes,

  showCancelButton,
  hideOkButton,
  textCancel = 'CANCEL',
  textOK = 'OK',

  links,
  okDisabled,

  fontFamily,
  fontFamilyLink,
  fontSizeTitle = 20,
  fontSizeButton = 16,
  fontSizeLink = 16,
  fontWeightTitle,

  colorRootBackground = '#00000090',
  colorBackground = '#fff',
  colorSeparator = '#efefef',
  colorHover = '#efefef',
  colorButton = '#2f95dc',
  colorButtonDisabled = '#cecece',
  colorTitle = '#343434',

  width = '90%',
  maxWidth,

  children,
}) => {
  return (
    <Modal isVisible={visible}>
      <View style={styles.root}>
        <View
          style={[
            {
              width,
              maxWidth,
              backgroundColor: colorBackground,
              borderRadius: 15,
            },
            Platform.OS === 'android' ? { borderRadius: 2 } : {},
          ]}
        >
          <View style={styles.view}>
            <View style={styles.textView}>
              <Text
                style={{
                  color: colorTitle,
                  fontSize: fontSizeTitle,
                  fontWeight: fontWeightTitle,
                  fontFamily,
                }}
              >
                {title}
              </Text>
            </View>
            {children}
            {links &&
              links.map(btn => (
                <TouchableHighlight
                  key={btn.text}
                  onPress={() => btn.onPress()}
                  underlayColor={colorHover}
                  disabled={btn.disabled}
                >
                  <View>
                    <Text
                      key={btn.text}
                      style={{
                        fontFamily: fontFamilyLink,
                        fontSize: fontSizeLink,
                        color: colorButton,
                        marginVertical: 10,
                      }}
                    >
                      {btn.text}
                    </Text>
                  </View>
                </TouchableHighlight>
              ))}
          </View>

          {Platform.OS === 'ios' && (
            <View style={[styles.separator, { backgroundColor: colorSeparator }]} />
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: showCancelButton ? 'space-between' : 'flex-end',
            }}
          >
            {showCancelButton && (
              <TouchableHighlight
                onPress={onClose}
                underlayColor="transparent"
                disabled={okDisabled}
              >
                <View style={styles.buttonView}>
                  <Text
                    style={{
                      fontFamily,
                      fontSize: fontSizeButton,
                      color: okDisabled ? colorButtonDisabled : colorButton,
                    }}
                  >
                    {textCancel}
                  </Text>
                </View>
              </TouchableHighlight>
            )}

            {!hideOkButton && (
              <TouchableHighlight
                onPress={() => {
                  onClose();
                  if (onYes) {
                    onYes();
                  }
                }}
                underlayColor="transparent"
                disabled={okDisabled}
              >
                <View style={styles.buttonView}>
                  <Text
                    style={{
                      fontFamily,
                      fontSize: fontSizeButton,
                      color: okDisabled ? colorButtonDisabled : colorButton,
                    }}
                  >
                    {textOK}
                  </Text>
                </View>
              </TouchableHighlight>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};
