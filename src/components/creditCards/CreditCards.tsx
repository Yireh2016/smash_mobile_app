import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import DashboardHeader from '../dashboardHeader/DashboardHeader';
import DashboardContentPair from '../dashboardContentPair/DashboardContentPair';
import Arrow from '../../assets/Arrow';
import useMyTheme from '../../hooks/useMyTheme';
import routes from '../../constants/routes';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import formatPercentage from '../../helpers/formatPercentage/formatPercentage';

import { Card } from '../../types/Card';

interface CreditCardsProps {
  totalBalances: number;
  utilizacion: string;
  creditCards: Card[] | never[];
}

const CreditCards: React.FunctionComponent<CreditCardsProps> = ({
  totalBalances,
  utilizacion,
  creditCards,
}) => {
  const navigation = useNavigation();
  const contentArr = [
    { title: 'TOTAL BALANCES', content: formatMoneyValue(totalBalances) },
    { title: 'UTILIZATION', content: formatPercentage(utilizacion) },
  ];

  const theme = useMyTheme();

  const styles = StyleSheet.create({
    arrow: {
      position: 'absolute',
      right: 0,
      top: 14,
    },
    fullFlex: theme.fullFlex,
    horizontalContentContainer: theme.horizontalContentContainer,
  });
  const contentArrMap = contentArr.map(({ title, content }, i) => (
    <View key={i} style={styles.fullFlex}>
      <DashboardContentPair {...{ title, content }} />
    </View>
  ));

  const onPress = () => {
    navigation?.navigate(routes.CARD_BALANCES, {
      creditCards,
      totalBalances,
      utilizacion,
    });
  };

  return (
    <>
      <DashboardHeader title="Credit cards balance" />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.horizontalContentContainer}>
          {contentArrMap}
          <View style={styles.arrow}>
            <Arrow factor={1.5} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CreditCards;
