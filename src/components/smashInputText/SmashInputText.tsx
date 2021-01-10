/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  TextInputProps,
  StyleProp,
  TextStyle,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components';
import { TextInput, LegacyRef } from 'react-native';
import { P1 } from '../texts/Texts';
import theme from '../../theme/theme';

export interface SmashInputTextProps extends TextInputProps {
  label?: string;
  value: string;
  color?: string;
  ref?: LegacyRef;
  style?: StyleProp<TextStyle>;
  returnKeyType?:
    | 'done'
    | 'default'
    | 'go'
    | 'next'
    | 'search'
    | 'send'
    | 'none'
    | 'previous'
    | 'google'
    | 'join'
    | 'route'
    | 'yahoo'
    | 'emergency-call'
    | undefined;
}

const SmashInputText: React.FunctionComponent<SmashInputTextProps> = (
  props
) => {
  const {
    ref,
    returnKeyType = 'done',
    returnKeyLabel,
    onSubmitEditing,
    placeholder,
    onChangeText,
    defaultValue,
    value,
    secureTextEntry,
    keyboardType,
    label,
    color,
    style,
  } = props;
  const commonStyles = {
    height: 40,
    color: color ? color : theme.palette.white,
    fontSize: 17,
    borderBottomColor: theme.palette.white,
    borderBottomWidth: 1,
    fontFamily: theme.font.regular,
  };
  const inputStyle = style
    ? {
        ...commonStyles,
        style,
      }
    : commonStyles;
  const styles = StyleSheet.create({
    input: inputStyle,
  });

  return (
    <StyledView>
      {label && <P1 style={{ marginTop: 21 }}>{label}</P1>}
      <TextInput
        ref={ref}
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
        onSubmitEditing={onSubmitEditing}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </StyledView>
  );
};

const StyledView = styled(View)`
  border-bottom-width: 0.5px;
  border-bottom-color: #000;
`;

export default SmashInputText;
