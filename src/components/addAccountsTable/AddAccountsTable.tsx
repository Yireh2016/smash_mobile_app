/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import { Account } from '../../store/types/accounts';
import CardListItem from '../cardListItem/CardListItem';
import AccountNameMaskPair from '../accountNameMaskPair/AccountNameMaskPair';
import TableRow from '../tableRow/TableRow';
import { P1 } from '../texts/Texts';

interface AddCardsTableProps {
  accounts: Account[];
}

const styles = StyleSheet.create({
  cardsLayout: {
    marginTop: 16,
  },
  firstCardsLayout: {
    marginTop: 10,
  },
});
const AddAccountsTable: React.FunctionComponent<AddCardsTableProps> = ({
  accounts,
}) => {
  const accountsMap = accounts.map((account: Account, i: number) => {
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
                    <AccountNameMaskPair maxLentgh={25} account={account} />
                  ),
                  align: 'left',
                  width: 80,
                },
                {
                  component: (
                    <P1 isBold={true}>{`${formatMoneyValue(
                      account.current_balance
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

  return <View>{accountsMap}</View>;
};

export default AddAccountsTable;
