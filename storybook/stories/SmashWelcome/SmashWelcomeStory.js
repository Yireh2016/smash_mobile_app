import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';
import SmashWelcome from './SmashWelcome';

import theme from '../../../src/theme/theme';

export default () =>
  storiesOf('Smash Welcome', module)
    .addDecorator((getStory) => (
      <CenterLayout color={theme.palette.primary}>{getStory()}</CenterLayout>
    ))
    .add('Default', () => <SmashWelcome />);
