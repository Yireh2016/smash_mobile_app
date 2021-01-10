/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Text } from 'react-native';
import theme from '../../theme/theme';
import { ChildrenProp } from '../../types/common/commonTypes';

interface TextsProps extends ChildrenProp {
  rest?: any;
  style?: {};
  color?: string;
  isBold?: boolean;
  onPress?(): void;
}

const openSans = {
  bold: { fontFamily: theme.font.bold },
  regular: { fontFamily: theme.font.regular },
};

export const MainTitle: React.FunctionComponent<TextsProps> = ({
  children,
  style,
  color = theme.palette.primaryContrast,
  onPress,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      onPress={onPress}
      style={{
        ...style,
        ...openSans.bold,
        fontSize: 28,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export const H1: React.FunctionComponent<TextsProps> = ({
  children,
  style,
  color = theme.palette.primaryContrast,
  onPress,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      onPress={onPress}
      style={{
        ...style,
        ...openSans.bold,
        fontSize: 24,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export const H2: React.FunctionComponent<TextsProps> = ({
  children,
  style,
  color = theme.palette.primaryContrast,
  onPress,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      onPress={onPress}
      style={{
        ...style,
        ...openSans.bold,
        fontSize: 20,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export const H3: React.FunctionComponent<TextsProps> = ({
  children,
  style,
  color = theme.palette.primaryContrast,
  onPress,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      onPress={onPress}
      style={{
        ...style,
        ...openSans.bold,
        fontSize: 18,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export const MainParagraph: React.FunctionComponent<TextsProps> = ({
  children,
  style,
  onPress,
  color = theme.palette.primaryContrast,
  isBold = false,
  ...rest
}) => {
  const fontFamily = isBold ? openSans.bold : openSans.regular;
  return (
    <Text
      {...rest}
      onPress={onPress}
      style={{
        ...style,
        ...fontFamily,
        fontSize: 18,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export const P1: React.FunctionComponent<TextsProps> = ({
  children,
  style,
  onPress,
  color = theme.palette.primaryContrast,
  isBold = false,
  ...rest
}) => {
  const fontFamily = isBold ? openSans.bold : openSans.regular;
  return (
    <Text
      {...rest}
      onPress={onPress}
      style={{
        ...style,
        ...fontFamily,
        fontSize: 16,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export const P2: React.FunctionComponent<TextsProps> = ({
  children,
  style,
  color = theme.palette.primaryContrast,
  onPress,
  isBold = false,
  ...rest
}) => {
  const fontFamily = isBold ? openSans.bold : openSans.regular;
  return (
    <Text
      {...rest}
      onPress={onPress}
      style={{
        ...style,
        ...fontFamily,
        fontSize: 14,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export const P3: React.FunctionComponent<TextsProps> = ({
  children,
  style,
  color = theme.palette.primaryContrast,
  onPress,
  isBold = false,
  ...rest
}) => {
  const fontFamily = isBold ? openSans.bold : openSans.regular;
  return (
    <Text
      {...rest}
      onPress={onPress}
      style={{
        ...style,
        ...fontFamily,
        fontSize: 12,
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

export const SmashLink: React.FunctionComponent<TextsProps> = ({
  children,
  style,
  color = theme.palette.secondary,
  onPress,
  ...rest
}) => {
  return (
    <P1
      {...rest}
      color={color}
      isBold={true}
      style={{ ...style }}
      onPress={onPress}
    >
      {children}
    </P1>
  );
};
