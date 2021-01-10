import * as React from 'react';
import renderer from 'react-test-renderer';
import PlanReviewView from './PlanReviewView';

import cards from '../../mocks/cards';
import mappedCards from '../../helpers/mappedCards/mappedCards';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

it('PlanReviewView renders correctly', () => {
  const PlanReviewViewProps = {
    onDonePress: () => {},
    onRecommendApproach: () => {},
    onEditPlan: () => {},
    cards: mappedCards(cards),
    header: <View />,
  };
  const Element = () => {
    return (
      <SafeAreaProvider>
        <PlanReviewView {...PlanReviewViewProps} />
      </SafeAreaProvider>
    );
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
