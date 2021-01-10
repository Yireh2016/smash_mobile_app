/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import CardListItem from '../../../src/components/cardListItem/CardListItem';
import TableRow from '../../../src/components/tableRow/TableRow';
import { H2, H3, P1, P2 } from '../../../src/components/texts/Texts';
import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';
import theme from '../../../src/theme/theme';

export default () =>
  storiesOf('Card List Item', module)
    .addDecorator((getStory) => (
      <CenterLayout color={theme.palette.primary}>
        {
          <View style={{ width: '100%', paddingLeft: 17, paddingRight: 17 }}>
            {getStory()}
          </View>
        }
      </CenterLayout>
    ))
    .add('Default', () => (
      <CardListItem>
        <H2>Default</H2>
      </CardListItem>
    ))
    .add('Three words', () => (
      <>
        <View
          style={{
            widht: '100%',
            paddingLeft: 13,
            paddingRight: 13,
            marginBottom: 10,
          }}
        >
          <TableRow
            columns={[
              { component: <P2>Card</P2>, align: 'left' },
              { component: <P2>Balance</P2>, align: 'right' },
              { component: <P2>Utilization</P2>, align: 'right' },
            ]}
          />
        </View>
        <CardListItem>
          <TableRow
            columns={[
              { component: <P1>Macy's (5859)</P1>, align: 'left' },
              { component: <H3>$6,500,34</H3>, align: 'center' },
              { component: <H3>10%</H3>, align: 'center' },
            ]}
          />
        </CardListItem>
      </>
    ));
