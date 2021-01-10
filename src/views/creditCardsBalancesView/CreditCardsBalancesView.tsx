/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import CreditCardDetail from '../../components/cardDetail/CardDetail';
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader';
import DashboardContentPair from '../../components/dashboardContentPair/DashboardContentPair';

import useMyTheme from '../../hooks/useMyTheme';

import dateFormats from '../../helpers/dateFormats/dateFormats';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import formatPercentage from '../../helpers/formatPercentage/formatPercentage';

import { Card } from '../../types/Card';

import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

import InfoGeneralLayout from '../../layouts/infoGeneralLayout/InfoGeneralLayout';

export interface CreditCardsBalancesViewProps {
  label?: string;
  route?: RouteProp<Record<string, object | undefined>, string>;

  navigation?: NavigationProp<ParamListBase>;
}

const CreditCardsBalancesView: React.FunctionComponent<CreditCardsBalancesViewProps> = ({
  route,
  navigation,
}) => {
  const theme = useMyTheme();
  const styles = StyleSheet.create({
    layout: theme.layout,
    viewMarginTop: {
      marginTop: 30,
    },
  });

  const params: any = route?.params;
  const { creditCards, totalBalances, utilizacion } = params;

  const formatCreditCard = (card: Card) => {
    const {
      bank,
      number,
      current_balance,
      credit_utilization_percentage,
      statement_balance,
      purchase_apr_percentage,
      min_payment,
      payment_due,
    } = card;
    return {
      bank,
      number,
      current_balance: formatMoneyValue(current_balance),
      credit_utilization_percentage: formatPercentage(
        credit_utilization_percentage
      ),
      statement_balance: formatMoneyValue(statement_balance),
      purchase_apr_percentage: formatPercentage(purchase_apr_percentage),
      min_payment: formatMoneyValue(min_payment),
      payment_due: dateFormats(payment_due),
    };
  };

  const cardsArr =
    creditCards && creditCards.length
      ? creditCards.map((card: Card) => formatCreditCard(card))
      : null;

  const cardsMap = cardsArr
    ? cardsArr.map((card: Card, i: number) => {
        return (
          <View key={i}>
            {i ? (
              <View style={styles.viewMarginTop}>
                <CreditCardDetail card={card} />
              </View>
            ) : (
              <View>
                <CreditCardDetail card={card} />
              </View>
            )}
          </View>
        );
      })
    : null;

  const creditCardSummaryArr = [
    {
      title: 'TOTAL BALANCE',
      content: formatMoneyValue(totalBalances),
    },
    {
      title: 'CREDIT UTILIZATION',
      content: formatPercentage(`${utilizacion}`),
    },
  ];
  const creditCardSummarymap = creditCardSummaryArr.map((summary, i) => {
    return (
      <View key={i} style={theme.fullFlex}>
        <DashboardContentPair
          contentColor={theme.palette.secondary}
          title={summary.title}
          content={summary.content}
        />
      </View>
    );
  });

  return (
    <InfoGeneralLayout onPress={() => navigation?.goBack()} actionLabel="Done">
      <DashboardHeader size="lg" title="Credit cards balance" />
      <View style={{ ...theme.horizontalContentContainer, marginTop: 30 }}>
        {creditCardSummarymap}
      </View>
      <ScrollView style={{ marginBottom: 25, marginTop: 15 }}>
        {cardsMap}
      </ScrollView>
    </InfoGeneralLayout>
  );
};

export default CreditCardsBalancesView;
