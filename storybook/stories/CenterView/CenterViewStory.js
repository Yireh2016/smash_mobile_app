import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';

export default () =>
  storiesOf('CenterLayout', module)
    .add('Default', () => <CenterLayout />)
    .add('White background', () => <CenterLayout color="#fff" />);
