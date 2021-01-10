import React, { useState } from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';
import DashboardTabNavigator from '../../../src/components/dashboardTabNavigator/DashboardTabNavigator';

import theme from '../../../src/theme/theme';

const ThisComponent = () => {
  const [iconColorArr, seticonColorArr] = useState([
    theme.palette.primaryContrast,
    theme.palette.secondary,
    theme.palette.primaryContrast,
  ]);

  const thisProps = {
    onCardDetailPress: () => {
      console.log('onCardDetailPress');
      seticonColorArr([
        theme.palette.secondary,
        theme.palette.primaryContrast,
        theme.palette.primaryContrast,
      ]);
    },
    onDashboardIconPress: () =>
      seticonColorArr([
        theme.palette.primaryContrast,
        theme.palette.secondary,
        theme.palette.primaryContrast,
      ]),
    onReviewPlanPress: () =>
      seticonColorArr([
        theme.palette.primaryContrast,
        theme.palette.primaryContrast,
        theme.palette.secondary,
      ]),
    iconColorArr,
  };

  return <DashboardTabNavigator {...thisProps} />;
};
export default () =>
  storiesOf('DashboardTabNavigator', module)
    .addDecorator((getStory) => (
      <CenterLayout color={theme.palette.primary}>{getStory()}</CenterLayout>
    ))
    .add('Default', () => <ThisComponent />);
