import * as React from 'react';
import renderer from 'react-test-renderer';
import CreditCardsView from './CreditCardsView';
import cards from '../../mocks/cards';
import { SafeAreaProvider } from 'react-native-safe-area-context';
it('CreditCardsView renders correctly', () => {
  const CreditCardsViewProps = {
    cards,
    onDonePress: () => {},
    totalBalance: 1234,
    creditUtilization: 12,
    isBottomSheetBack: false,
    onCloseBottomSheet: () => {},
    cardIndex: 0,
    onCardPress: () => {},
  };
  const Element = () => {
    return (
      <SafeAreaProvider>
        <CreditCardsView {...CreditCardsViewProps} />
      </SafeAreaProvider>
    );
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
