/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PlusButtonProps } from '../../types/common/commonTypes';
import Plus from '../../assets/Plus';

import theme from '../../theme/theme';

const PlusButton = (props: PlusButtonProps) => (
  <TouchableOpacity
    style={{
      paddingLeft: 50,
      paddingRight: 15,
      paddingVertical: 15,
    }}
    onPress={props.onPress}
  >
    <View style={{ width: 30 }}>
      <Plus isRound={true} color={theme.palette.secondary} factor={1} />
    </View>
  </TouchableOpacity>
);

export default PlusButton;
