import React from 'react';
import { View, Text } from 'react-native';
import { BaseModal } from './BaseModal';
import { BaseSpinner } from './BaseSpinner';
import { ProgressBar } from './ProgressBar';
import { FontWeight } from './types';

export interface IPopupProps {
  title: string;
  visible: boolean;
  onClose?: () => void;

  message?: string;
  isError?: boolean;
  isLoading?: boolean;
  progress?: number;

  colorTitle?: string;
  colorTitleError?: string;
  colorTitleLoading?: string;
  fontSizeTitle?: number;
  fontSizeMessage?: number;
  fontWeightTitle?: FontWeight;

  vspaceTop?: number;
  vspaceBottom?: number;
  vspaceBottomProgress?: number;
  vspaceBottomSpinner?: number;

  colorSpinner?: string;

  width?: string;
  maxWidth?: number;
}

export const Popup: React.FC<IPopupProps> = ({
  title,
  visible,
  onClose,

  message,
  isError,
  isLoading,
  progress,

  fontSizeTitle = 16,
  fontSizeMessage = 16,
  fontWeightTitle,

  colorTitle = '#343434',
  colorTitleError = '#c01626',
  colorTitleLoading = '#236cd2',
  vspaceTop = 20,
  vspaceBottom = 20,
  vspaceBottomProgress = 50,
  vspaceBottomSpinner = 40,

  colorSpinner = '#236cd2',

  width,
  maxWidth,

  children,
}) => {
  return (
    <BaseModal
      title={title}
      visible={visible}
      onClose={onClose ? onClose : () => {}}
      hideOkButton={onClose ? false : true}
      colorTitle={isError ? colorTitleError : isLoading ? colorTitleLoading : colorTitle}
      fontSizeTitle={fontSizeTitle}
      fontWeightTitle={fontWeightTitle}
      width={width}
      maxWidth={maxWidth}
    >
      <View
        style={{
          marginTop: vspaceTop,
          marginBottom: progress
            ? vspaceBottomProgress
            : isLoading
            ? vspaceBottomSpinner
            : vspaceBottom,
        }}
      >
        {message && <Text style={{ fontSize: fontSizeMessage }}>{message}</Text>}
        {children}
        {progress && <ProgressBar progress={progress} />}
        {isLoading && <BaseSpinner darkColor={colorSpinner} />}
      </View>
    </BaseModal>
  );
};
