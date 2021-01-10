import React from 'react';

import { storiesOf } from '@storybook/react-native';

import SmashButton from '../../../src/components/smashButton/SmashButton';
import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';
import { ThemeProvider } from 'styled-components';

import theme from '../../../src/theme/theme';

export default () =>
  storiesOf('SmashButton', module)
    .addDecorator((getStory) => <CenterLayout>{getStory()}</CenterLayout>)
    .addDecorator((getStory) => (
      <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>
    ))
    .add('with no action', () => (
      <SmashButton
        label="Sign up"
        onPress={() => console.log('smash pressed')}
      />
    ));
