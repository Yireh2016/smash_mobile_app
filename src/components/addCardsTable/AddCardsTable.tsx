/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import mappedCards from '../../helpers/mappedCards/mappedCards';
import { Card } from '../../types/Card';
import CardListItem from '../cardListItem/CardListItem';
import CardNameMaskPair from '../cardNameMaskPair/CardNameMaskPair';
import TableRow from '../tableRow/TableRow';
import { P1 } from '../texts/Texts';

interface AddCardsTableProps {
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
const AddCardsTable: React.FunctionComponent<AddCardsTableProps> = ({
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
                      maxLentgh={25}
                      card={mappedCards([card])[0]}
                    />
                  ),
                  align: 'left',
                  width: 80,
                },
                {
                  component: (
                    <P1 isBold={true}>{`${formatMoneyValue(
                      card.current_balance
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

  return <View>{cardsMap}</View>;
};

export default AddCardsTable;
