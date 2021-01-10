import * as React from 'react';
import renderer from 'react-test-renderer';
import mappedCards from '../../helpers/mappedCards/mappedCards';
import cards from '../../mocks/cards';
import CardNameMaskPair from './CardNameMaskPair';

it('CardNameMaskPair renders correctly', () => {
  const Element = () => {
    return <CardNameMaskPair card={mappedCards([cards[0]])[0]} />;
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
