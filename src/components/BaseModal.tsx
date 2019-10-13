import React from 'react';
import { Modal, View, Text, TouchableHighlight, Platform } from 'react-native';
import { IStyles } from './types';

const colors = {
  rootBackground: '#00000090',
  background: '#fff',
  separator: '#efefef',
  hover: '#efefef',
  button: '#2f95dc',
  buttonDisabled: '#cecece',
  text: '#343434',
};

const s: IStyles = {
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.rootBackground,
  },
  content: {
    width: '90%',
    backgroundColor: colors.background,
    borderRadius: 15,
  },
  view: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  container: {},
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.separator,
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
    color: colors.text,
    fontSize: 22,
  },
  link: {
    marginVertical: 10,
    fontSize: 16,
    color: colors.button,
  },
  button: {
    fontSize: 16,
    color: colors.button,
  },
};

interface IButtonData {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

interface IProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  buttons?: IButtonData[];
  renderContent?: () => void;
  okDisabled?: boolean;
}

export const BaseModal: React.FC<IProps> = ({
  title,
  visible,
  onClose,
  buttons,
  renderContent,
  okDisabled,
}) => (
  <Modal visible={visible} onRequestClose={onClose} transparent={true}>
    <View style={s.root}>
      <View style={[s.content, Platform.OS === 'android' ? { borderRadius: 2 } : {}]}>
        <View style={s.view}>
          <View style={s.textView}>
            <Text style={s.title}>{title}</Text>
          </View>
          {renderContent && renderContent()}
          {buttons &&
            buttons.map(btn => (
              <TouchableHighlight
                key={btn.text}
                onPress={() => btn.onPress()}
                underlayColor={colors.hover}
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
        <TouchableHighlight
          onPress={onClose}
          style={Platform.select({ ios: s.touchIos, android: null })}
          underlayColor={Platform.select({ ios: colors.hover, android: undefined })}
          disabled={okDisabled}
        >
          <View
            style={Platform.select({
              ios: s.buttonViewIos,
              android: s.buttonViewAndroid,
            })}
          >
            <Text
              style={{ ...s.button, color: okDisabled ? colors.buttonDisabled : colors.button }}
            >
              OK
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  </Modal>
);
