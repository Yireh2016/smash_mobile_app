import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import theme from '../../theme/theme';
import Component from './DashboardTabNavigator';

describe('DashboardTabNavigator Functionality', () => {
  it('DashboardTabNavigator pressing all icons', () => {
    const ComponentProps = {
      onCardDetailPress: jest.fn(),
      onDashboardIconPress: jest.fn(),
      onReviewPlanPress: jest.fn(),
      iconColorArr: [
        theme.palette.primaryContrast,
        theme.palette.secondary,
        theme.palette.primaryContrast,
      ],
    };
    const { getByTestId } = render(<Component {...ComponentProps} />);
    const cardDetailBtn = getByTestId('tabNavIcon0');
    const dashboardBtn = getByTestId('tabNavIcon1');
    const reviewPlanBtn = getByTestId('tabNavIcon2');

    fireEvent.press(cardDetailBtn);
    expect(ComponentProps.onCardDetailPress.mock.calls.length).toBe(1);
    fireEvent.press(dashboardBtn);
    expect(ComponentProps.onDashboardIconPress.mock.calls.length).toBe(1);
    fireEvent.press(reviewPlanBtn);
    expect(ComponentProps.onReviewPlanPress.mock.calls.length).toBe(1);
  });
});
