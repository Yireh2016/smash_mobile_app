/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';
import MenuIcon from '../../assets/MenuIcon';

import theme from '../../theme/theme';

const PlusButton = () => (
  <View
    style={{
      width: 25,
    }}
  >
    <MenuIcon color={theme.palette.primaryContrast} />
  </View>
);

export default PlusButton;
