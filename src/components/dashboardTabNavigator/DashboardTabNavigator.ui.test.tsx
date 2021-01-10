import * as React from 'react';
import renderer from 'react-test-renderer';
import theme from '../../theme/theme';
import DashboardTabNavigator from './DashboardTabNavigator';

it('DashboardTabNavigator renders correctly', () => {
  const ComponentProps = {
    onCardDetailPress: () => {},
    onDashboardIconPress: () => {},
    onReviewPlanPress: () => {},
    iconColorArr: [
      theme.palette.primaryContrast,
      theme.palette.secondary,
      theme.palette.primaryContrast,
    ],
  };
  const Element = () => {
    return <DashboardTabNavigator {...ComponentProps} />;
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
