import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';

import { H1, H2, P1, P2 } from '../../../src/components/texts/Texts';

export default () =>
  storiesOf('Texts', module)
    .addDecorator((getStory) => (
      <CenterLayout color="#fff">{getStory()}</CenterLayout>
    ))
    .add('Texts', () => {
      return (
        <>
          <H1>Important</H1>
          <H2>Less Important</H2>
          <P1>normal</P1>
          <P2>I did not exist</P2>
        </>
      );
    });
