import * as React from 'react';
import renderer from 'react-test-renderer';
import { P1, H3 } from '../texts/Texts';
import TableRow from './TableRow';

it('TableRow primary renders correctly', () => {
  const ComponentProps = {
    columns: [
      {
        component: <P1>Est. pay off time</P1>,
        align: 'left',
      },
      {
        component: <H3>test</H3>,
        align: 'right',
      },
    ],
  };
  const Element = () => {
    return <TableRow {...ComponentProps} />;
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
