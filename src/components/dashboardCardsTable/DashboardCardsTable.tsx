/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from '../../types/Card';

import CardListItem from '../cardListItem/CardListItem';

import TableRow from '../tableRow/TableRow';

import { P1, P2 } from '../texts/Texts';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import formatPercentage from '../../helpers/formatPercentage/formatPercentage';
import CardNameMaskPair from '../cardNameMaskPair/CardNameMaskPair';
import mappedCards from '../../helpers/mappedCards/mappedCards';

interface DashboardCardsTableProps {
  cards: Card[];
}

const styles = StyleSheet.create({
  cardsLayout: {
    marginTop: 16,
  },
  firstCardsLayout: {
    marginTop: 10,
  },
});
const DashboardCardsTable: React.FunctionComponent<DashboardCardsTableProps> = ({
  cards,
}) => {
  const cardsMap = cards.map((card: Card, i: number) => {
    return (
      <View
        key={i}
        style={i === 0 ? styles.firstCardsLayout : styles.cardsLayout}
      >
        <CardListItem>
          <View
            style={{
              paddingHorizontal: 13,
              paddingVertical: 18,
            }}
          >
            <TableRow
              columns={[
                {
                  component: (
                    <CardNameMaskPair
                      maxLentgh={15}
                      card={mappedCards([card])[0]}
                    />
                  ),
                  align: 'left',
                  width: 60,
                },
                {
                  component: (
                    <P1 isBold={true}>{`${formatMoneyValue(
                      card.current_balance
                    )}`}</P1>
                  ),
                  align: 'left',
                  width: 20,
                },
                {
                  component: (
                    <P1 isBold={true}>{`${formatPercentage(
                      card.credit_utilization_percentage
                    )}`}</P1>
                  ),
                  align: 'right',
                  width: 20,
                },
              ]}
            />
          </View>
        </CardListItem>
      </View>
    );
  });
  return (
    <>
      <View style={{ paddingRight: 16 }}>
        <TableRow
          columns={[
            { component: <P2>Card</P2>, align: 'left', width: 60 },
            { component: <P2>Balance</P2>, align: 'left', width: 20 },
            { component: <P2>Utilization</P2>, align: 'right', width: 20 },
          ]}
        />
      </View>
      {cardsMap}
    </>
  );
};

export default DashboardCardsTable;
