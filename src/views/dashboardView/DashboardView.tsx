/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../../theme/theme';
import { H2 } from '../../components/texts/Texts';
import ActionButton from '../../components/actionButton/ActionButton';
import MiniButton from '../../components/miniButton/MiniButton';
import TotalDebt from '../../components/totalDebt/TotalDebt';
import DashboardCarsTable from '../../components/dashboardCardsTable/DashboardCardsTable';
import DebtPlanCalculator, {
  DebtPlanCalculatorProps,
} from '../../components/debtPlanCalculator/DebtPlanCalculator';
import DashboardTabNavigator, {
  DashboardTabNavigatorProps,
} from '../../components/dashboardTabNavigator/DashboardTabNavigator';
import { Card } from '../../types/Card';
import PlaidBanksLinks from '../../components/plaidBanksLinks/PlaidBanksLinks';
import LottieAnimation from 'lottie-react-native';

interface DashboardViewProps
  extends DebtPlanCalculatorProps,
    DashboardTabNavigatorProps {
  onWalletMonitorDetails: () => void;
  onCreatePlan: () => void;
  onPlanDetails: () => void;
  onAddCardSuccess: (data: any) => void;
  goToSafeAccountConnect: () => void;
  isPlanSaved: boolean;
  totalDebt: string;
  cards?: Card[];
  tokenConfig: any;
  onAddCardExit: any;
  isLoading: boolean;
  dashboardLocalLoaderRef: any;
}

const styles = StyleSheet.create({
  layout: {
    ...theme.layout,
    backgroundColor: theme.background.color,
  },

  debtPlanLayout: {
    marginTop: 20,
  },
  actionBtnContainer: {
    marginTop: 16,
  },
  walletMonitorLayout: {
    marginTop: 30,
    marginBottom: 15,
  },
  walletMonitorTitleLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  cardsLayout: {
    marginTop: 10,
  },
});

const DashboardView: React.FunctionComponent<DashboardViewProps> = ({
  onAddCardSuccess,
  onCreatePlan,
  onPlanDetails,
  onCardDetailPress,
  onReviewPlanPress,
  onMonthlyInputChange,
  onDashboardIconPress,
  onWalletMonitorDetails,
  goToSafeAccountConnect,
  monthlyPayment,
  estimatedPayoffTime,
  estimatedPayoffDate,
  sliderControl,
  monthlyInput,
  iconColorArr,
  isPlanSaved,
  isEditable,
  estimatedSavings,
  totalDebt,
  cards,
  tokenConfig,
  onAddCardExit,
  isLoading,
  dashboardLocalLoaderRef,
}) => {
  const DashboardTabNavigatorProps_ = {
    onCardDetailPress,
    onDashboardIconPress,
    onReviewPlanPress,
    iconColorArr,
  };

  const DebtPlanCalculatorProps_ = {
    isEditable,
    sliderControl,
    monthlyPayment,
    monthlyInput,
    onMonthlyInputChange,
    estimatedPayoffTime,
    estimatedSavings,
    estimatedPayoffDate,
  };
  return (
    <View style={{ flex: 1, backgroundColor: theme.background.color }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',

          paddingTop: 14,
          paddingBottom: 5,
        }}
      >
        {isLoading && (
          <LottieAnimation
            ref={dashboardLocalLoaderRef}
            source={require('../../assets/json/fullLoader.json')}
            loop={true}
            speed={1}
            style={{ width: 40 }}
          />
        )}
      </View>
      <ScrollView style={styles.layout}>
        <TotalDebt totalDebt={totalDebt} />
        <View style={styles.debtPlanLayout}>
          <View style={styles.walletMonitorTitleLayout}>
            <H2>Debt Plan</H2>
            {isPlanSaved && (
              <MiniButton label="See details" onPress={onPlanDetails} />
            )}
          </View>

          {isPlanSaved && <DebtPlanCalculator {...DebtPlanCalculatorProps_} />}
          {!isPlanSaved && (
            <View style={styles.actionBtnContainer}>
              <ActionButton onPress={onCreatePlan} label="Create plan" />
            </View>
          )}
        </View>

        <View style={styles.walletMonitorLayout}>
          <View style={styles.walletMonitorTitleLayout}>
            <H2>Wallet monitor</H2>

            {cards && cards.length > 0 && (
              <MiniButton
                label="See details"
                onPress={onWalletMonitorDetails}
              />
            )}
          </View>
          {cards && cards.length > 0 && (
            <View style={styles.cardsLayout}>
              <DashboardCarsTable cards={cards} />
            </View>
          )}
          {cards && cards.length > 0 ? (
            <View style={styles.actionBtnContainer}>
              {tokenConfig.token === '' ? null : (
                <PlaidBanksLinks
                  onSuccess={onAddCardSuccess}
                  tokenConfig={tokenConfig}
                  onExit={onAddCardExit}
                >
                  <ActionButton label="Add card" />
                </PlaidBanksLinks>
              )}
            </View>
          ) : (
            <View style={styles.actionBtnContainer}>
              <ActionButton label="Add card" onPress={goToSafeAccountConnect} />
            </View>
          )}
        </View>
      </ScrollView>
      <DashboardTabNavigator {...DashboardTabNavigatorProps_} />
    </View>
  );
};

export default DashboardView;
