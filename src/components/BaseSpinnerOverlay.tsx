import React from 'react';
import { View, Modal } from 'react-native';
import { BaseSpinner, IBaseSpinnerProps } from './BaseSpinner';

interface IProps extends IBaseSpinnerProps {
  visible: boolean;
}

export const BaseSpinnerOverlay: React.FC<IProps> = props => (
  <Modal visible={props.visible} transparent={true}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    >
      <BaseSpinner {...props} />
    </View>
  </Modal>
);
