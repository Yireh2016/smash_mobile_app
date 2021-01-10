import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import TotalDebtMgr from '../../components/totalDebt/TotalDebtMgr';
import { H2 } from '../../components/texts/Texts';
import DebtPlanCalculatorMgr from '../../components/debtPlanCalculator/DebtPlanCalculatorMgr';

import theme from '../../theme/theme';

import InfoLayout from '../../layouts/infoLayout/InfoLayout';

interface PlanSettingsViewProps {
  onReviewPress: () => void;
  header?: Element | undefined;
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: theme.background.color,
  },
  paymentPlanLayout: {
    marginTop: 30,
  },
});
const PlanSettingsView: React.FunctionComponent<PlanSettingsViewProps> = ({
  onReviewPress,
  header,
}) => {
  return (
    <InfoLayout onPress={onReviewPress} actionLabel="Review">
      {header}
      <View style={styles.layout}>
        <TotalDebtMgr />
        <View style={styles.paymentPlanLayout}>
          <H2>Set payment plan</H2>
          <DebtPlanCalculatorMgr />
        </View>
      </View>
    </InfoLayout>
  );
};

export default PlanSettingsView;
