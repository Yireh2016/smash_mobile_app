import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import TableRow from '../tableRow/TableRow';
import { Card } from '../../types/Card';
import { P1, H3 } from '../texts/Texts';
import CardListItem from '../cardListItem/CardListItem';
import dateFormats from '../../helpers/dateFormats/dateFormats';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import formatPercentage from '../../helpers/formatPercentage/formatPercentage';

interface CreditCardDataDetailProps {
  card: Card;
}

const styles = StyleSheet.create({
  tableRowCont: {
    marginTop: 17,
  },
  cardPropContainer: {
    padding: 18,
  },
});
const CreditCardDataDetail: React.FunctionComponent<CreditCardDataDetailProps> = ({
  card,
}) => {
  const {
    current_balance,
    credit_utilization_percentage,
    statement_balance,
    purchase_apr_percentage,
    min_payment,
    payment_due,
  } = card;

  const cardPropertiesArr = [
    `Current balance:${formatMoneyValue(current_balance)}`,
    `Credit utilization:${formatPercentage(credit_utilization_percentage)}`,
    `Statement balance:${formatMoneyValue(statement_balance)}`,
    `Purchase APR:${formatPercentage(purchase_apr_percentage)}`,
    `Minimum payment:${formatMoneyValue(min_payment)}`,
    `Payment due date:${dateFormats(payment_due)}`,
  ];

  const cardPropertiesArrMap = cardPropertiesArr.map(
    (cardProperties: string, index) => {
      const [key, value] = cardProperties.split(':');
      return (
        <View key={index} style={index ? styles.tableRowCont : {}}>
          <TableRow
            columns={[
              {
                component: <P1>{key}</P1>,
                align: 'left',
              },
              {
                component: <H3>{value}</H3>,
                align: 'right',
              },
            ]}
          />
        </View>
      );
    }
  );
  return (
    <CardListItem>
      <View style={styles.cardPropContainer}>{cardPropertiesArrMap}</View>
    </CardListItem>
  );
};

export default CreditCardDataDetail;
