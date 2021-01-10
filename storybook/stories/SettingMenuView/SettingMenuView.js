import React from 'react';

import { storiesOf } from '@storybook/react-native';

import SettingsMenuView from '../../../src/views/settingsMenuView/SettingsMenuView';

export default () =>
  storiesOf('Settings', module).add('Settings', () => {
    return <SettingsMenuView date="May, 2020" fullname="Jhon Smith" />;
  });
