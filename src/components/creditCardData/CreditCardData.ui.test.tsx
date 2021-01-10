import * as React from 'react';
import renderer from 'react-test-renderer';
import CreditCardData from './CreditCardData';
import cards from '../../mocks/cards';
it('CreditCardData renders correctly', () => {
  const ComponentProps = {
    card: cards[0],
    onCardPress: () => {},
    index: 0,
  };
  const Element = () => {
    return <CreditCardData {...ComponentProps} />;
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
