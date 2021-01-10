import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { ThemeProvider } from 'styled-components';

import theme from '../../../src/theme/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//To check this on story book, please uncomment the add methods below
//this component is a fullsize loader that overlaps onto storybook tab navigator control

export default () =>
  storiesOf('SmashAnimLoader', module)
    .addDecorator((getStory) => (
      <SafeAreaProvider>{getStory()}</SafeAreaProvider>
    ))
    .addDecorator((getStory) => (
      <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>
    ));
// .add('Custom loader', () => <SmashAnimLoader isLoading={true} />);
// .add('Custom loader', () => (
//   <SmashAnimLoader
//     isTest={true}
//     isLoading={true}
//     loader={{
//       enable: true,
//       message: 'Creating a personalized plan for Jainer...',
//       title: 'Working on your plan',
//     }}
//   />
// ));
