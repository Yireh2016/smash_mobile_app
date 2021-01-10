import * as React from 'react';
import { View } from 'react-native';

import DashboardHeader from '../dashboardHeader/DashboardHeader';
import DashboardContentPair from '../dashboardContentPair/DashboardContentPair';
import useMyTheme from '../../hooks/useMyTheme';

import { Card } from '../../types/Card';

interface CardDetailProps {
  card: Card;
}

const CreditCardDetail: React.FunctionComponent<CardDetailProps> = ({
  card,
}) => {
  const theme = useMyTheme();

  const cardArr = [
    [
      {
        title: 'CURRENT BALANCE',
        content: card.current_balance,
      },
      {
        title: 'CREDIT UTILIZATION',
        content: card.credit_utilization_percentage,
      },
    ],
    [
      {
        title: 'STATEMENT BALANCE',
        content: card.statement_balance,
      },
      {
        title: 'PURCHASE APR',
        content: card.purchase_apr_percentage,
      },
    ],
    [
      {
        title: 'MINIMUM PAYMENT',
        content: card.min_payment,
      },
      {
        title: 'PAYMENT DUE DATE',
        content: card.payment_due,
      },
    ],
  ];

  const cardArrMap = cardArr.map((pairParams, i) => {
    const contentMap = pairParams.map((param, j) => (
      <View key={j} style={theme.fullFlex}>
        <DashboardContentPair title={param.title} content={param.content} />
      </View>
    ));
    return (
      <View key={i} style={theme.horizontalContentContainer}>
        {contentMap}
      </View>
    );
  });

  return (
    <View>
      <DashboardHeader title={`${card.bank} *${card.number}`} />
      {cardArrMap}
    </View>
  );
};

export default CreditCardDetail;
