import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';

import ActionButton from '../../../src/components/actionButton/ActionButton';
import useMyTheme from '../../../src/hooks/useMyTheme';
//

export default () =>
  storiesOf('Action Button', module)
    .addDecorator((getStory) => {
      const theme = useMyTheme();
      return (
        <CenterLayout color={theme.palette.primary}>{getStory()}</CenterLayout>
      );
    })
    .add('Smash Action Default', () => {
      return (
        <ActionButton
          label={'Add card'}
          onPress={() => console.log('Add Card Pressed')}
        />
      );
    })
    .add('Smash Action Disable', () => {
      return (
        <ActionButton
          label={'Add card'}
          onPress={() => console.log('Add Card Pressed')}
          disabled={true}
        />
      );
    });
