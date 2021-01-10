import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import cards from '../../../mocks/cards';
import OnboardingAddCardView from './OnboardingAddCardView';
const AddCardViewProps = {
  onNextPress: () => {},
  onAddCardSuccess: () => {},
  onSecurityPress: () => {},
  cards,
  totalDebt: 1232,
};

describe('', () => {
  it('AddCard onboarding view with cards renders correctly', () => {
    const Element = () => {
      return (
        <SafeAreaProvider>
          <OnboardingAddCardView {...AddCardViewProps} />
        </SafeAreaProvider>
      );
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('AddCard onboarding view without cards renders correctly', () => {
    const AddCardViewProps2 = JSON.parse(JSON.stringify(AddCardViewProps));
    AddCardViewProps2.cards = null;
    AddCardViewProps2.totalDebt = 0;
    const Element = () => {
      return (
        <SafeAreaProvider>
          <OnboardingAddCardView {...AddCardViewProps2} />
        </SafeAreaProvider>
      );
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
