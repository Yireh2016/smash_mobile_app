import * as React from 'react';
import renderer from 'react-test-renderer';
import CreditCardDataDetail from './CreditCardDataDetail';
import cards from '../../mocks/cards';
it('CreditCardDataDetail renders correctly', () => {
  const ComponentProps = {
    card: cards[0],
  };
  const Element = () => {
    return <CreditCardDataDetail {...ComponentProps} />;
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
