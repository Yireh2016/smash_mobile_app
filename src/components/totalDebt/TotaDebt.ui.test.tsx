import * as React from 'react';
import renderer from 'react-test-renderer';
import TotalDebt from './TotalDebt';

it('TotalDebt renders correctly', () => {
  const Element = () => {
    return <TotalDebt totalDebt="$2,350.45" />;
  };

  const ElementRendered = renderer.create(<Element />).toJSON();
  expect(ElementRendered).toMatchSnapshot();
});
