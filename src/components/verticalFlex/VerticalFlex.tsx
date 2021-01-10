/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';

interface VerticalFlexProps {
  children: Element | string;
}

const VerticalFlex: React.FunctionComponent<VerticalFlexProps> = ({
  children,
}) => {
  return <View style={{ flex: 1 }}>{children}</View>;
};

export default VerticalFlex;
