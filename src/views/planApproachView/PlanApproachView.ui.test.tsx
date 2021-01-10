import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import mappedCards from '../../helpers/mappedCards/mappedCards';
import cards from '../../mocks/cards';
import PlanApproachView from './PlanApproachView';

it('PlanApproachView renders correctly', () => {
  const PlanApproachViewProps = {
    onReviewPress: () => {},
    cards: mappedCards(cards),
    highestAprCardIndex: 0,
    header: <View />,
  };
  const Element = () => {
    return (
      <SafeAreaProvider>
        <PlanApproachView {...PlanApproachViewProps} />
      </SafeAreaProvider>
    );
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
