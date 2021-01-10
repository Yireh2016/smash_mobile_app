import * as React from 'react';
import renderer from 'react-test-renderer';
import DashboardCardsTable from './DashboardCardsTable';
import cards from '../../mocks/cards';
it('DashboardCardsTable renders correctly', () => {
  const ComponentProps = {
    cards,
  };
  const Element = () => {
    return <DashboardCardsTable {...ComponentProps} />;
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
