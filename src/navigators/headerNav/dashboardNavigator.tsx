/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import theme from '../../theme/theme';
import routes from '../../constants/routes';
import headerDefaultOptions from './headerDefaultOptions';
import SettingsButton from '../../components/settingsButton/SettingsButton';
import SmashIsotipo from '../../assets/Avocado';
import { ViewInterface } from '../../helpers/screenOptionsCreator';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export default (
  viewObj: ViewInterface,
  navigation: NavigationProp<ParamListBase>,
  insets: EdgeInsets
) => {
  return {
    ...headerDefaultOptions(insets, theme, viewObj),
    headerLeft: () => {
      const onSettingsPress = () => navigation?.navigate(routes.MENU_SETTINGS);
      return (
        <View>
          <TouchableOpacity
            onPress={onSettingsPress}
            style={{
              paddingLeft: 15,
              paddingRight: 50,
              paddingVertical: 15,
            }}
          >
            <SettingsButton />
          </TouchableOpacity>
        </View>
      );
    },
    headerTitle: () => <SmashIsotipo factor={0.15} dark={true} />,
    headerShown: true,
    gestureEnabled: false,
  };
};
