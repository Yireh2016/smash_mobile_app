/* eslint-disable react-native/no-inline-styles */
import { ViewInterface } from '../../helpers/screenOptionsCreator';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import theme from '../../theme/theme';
import GoBackNavArrow from '../../assets/GoBackNavArrow';
import headerDefaultOptions from './headerDefaultOptions';

export default (
  viewObj: ViewInterface,
  navigation: any,
  insets: EdgeInsets
) => {
  return {
    ...headerDefaultOptions(insets, theme, viewObj),
    headerLeft: () => {
      return (
        <View>
          <TouchableOpacity
            style={{
              paddingLeft: 15,
              paddingRight: 50,
              paddingVertical: 15,
            }}
            onPress={() => navigation?.goBack()}
          >
            <GoBackNavArrow />
          </TouchableOpacity>
        </View>
      );
    },
    headerTitleAlign: 'center',
    headerMode: 'float',
  };
};
