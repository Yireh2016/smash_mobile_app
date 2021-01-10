import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { MainTitle, P2 } from '../../components/texts/Texts';

interface TotalDebtProps {
  totalDebt: string;
  title?: string;
}
const styles = StyleSheet.create({
  debtLayout: {
    marginTop: 34,
    alignItems: 'center',
  },
});
const TotalDebt: React.FunctionComponent<TotalDebtProps> = ({
  totalDebt,
  title = 'Total credit card debt',
}) => {
  return (
    <View style={styles.debtLayout}>
      <P2>{title}</P2>
      <MainTitle>{totalDebt}</MainTitle>
    </View>
  );
};

export default TotalDebt;
