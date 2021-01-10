import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigationState } from '@react-navigation/native';
import routes from '../../constants/routes';
import DashboardView from './DashboardView';
import {
  getUser,
  getCreditCards,
  getRoutesHistory,
  getIsUserAuthenticated,
  getPlan,
  getTotalDebt,
} from '../../store/selectors/selectors';
import {
  setCreditCards,
  setFutureData,
  setTotalDebt,
  setPlanOnStore,
  setIsLoading,
} from '../../store/actions/actions';
import ControlledFullLoaderLayout from '../../layouts/loaders/controlledFullLoaderLayout';
import useSetAppData from './hooks/useSetAppData/useSetAppData';
import useGetAllNeededData from './hooks/useGetAllNeededData/useGetAllNeededData';
import useResetTabNavigator from './hooks/useResetTabNavigator/useResetTabNavigator';
import useTriggerRoutingEvents from './hooks/useTriggerRoutingEvents/useTriggerRoutingEvents';
import usePreventingBack from './hooks/usePreventingBack/usePreventingBack';
import useSetDashboardLoader from './hooks/useSetDashboardLoader/useSetDashboardLoader';
import useGetPlaidLinkConfig from '../../hooks/useGetPlaidLinkConfig';
import theme from '../../theme/theme';
import daysWeeksMonthDateFormatter from '../../helpers/daysWeeksMonthDateFormatter/daysWeeksMonthDateFormatter';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import savePlaidInstitution from '../../requests/savePlaidInstitution/savePlaidInstitution';
import triggerEntityLinkFailed from '../../analytics/triggerEntityLinkFailed/triggerEntityLinkFailed';
import triggerEntityLinkStarted from '../../analytics/triggerEntityLinkStarted/triggerEntityLinkStarted';
import errorAlert from '../../helpers/errorAlert';
import LottieAnimation from 'lottie-react-native';
import { NavigationSmashProps } from '../../types/common/commonTypes';
import { useRef } from 'react';
import plaidLinkExitHandler from '../../helpers/plaidLinkExitHandler/plaidLinkExitHandler';

export type DashboardlocalLoaderType =
  | string
  | ((instance: LottieAnimation | null) => void)
  | React.RefObject<LottieAnimation>
  | null
  | undefined;

const DashboardViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const navigationStateRoutes = useNavigationState((state) => state.routes);

  const [tokenConfig, setTokenConfig] = React.useState({ token: '' });

  const [isLoadingClone, setIsLoadingClone] = useState(true);
  const [utilizacion, setUtilizacion] = useState('-');
  const [updateData, setUpdateData] = useState(0);
  const [iconColorArr, seticonColorArr] = useState([
    theme.palette.primaryContrast,
    theme.palette.secondary,
    theme.palette.primaryContrast,
  ]);
  const user = useSelector(getUser);
  const routesHistory = useSelector(getRoutesHistory);
  const plan = useSelector(getPlan);
  const totalDebt = useSelector(getTotalDebt);
  const creditCards = useSelector(getCreditCards);
  const isAuthenticated = useSelector(getIsUserAuthenticated);

  usePreventingBack(navigation);

  useGetPlaidLinkConfig(setTokenConfig);

  useGetAllNeededData({
    plan,
    setPlan: setPlanOnStore,
    setTotalDebt,
    setUtilizacion,
    setCreditCards,
    setFutureData,
    setIsLoadingClone,
    updateData,
  });
  useTriggerRoutingEvents(
    routesHistory,
    user,
    isAuthenticated,
    creditCards,
    totalDebt,
    utilizacion
  );
  useResetTabNavigator(routesHistory, seticonColorArr);

  useSetAppData(routesHistory, setUpdateData, updateData);

  const dashboardLocalLoaderRef: DashboardlocalLoaderType = useRef(null);

  useSetDashboardLoader(routesHistory, isLoadingClone, dashboardLocalLoaderRef);

  const onCreatePlan = () => {
    if (creditCards && creditCards.length) {
      navigation?.navigate(routes.PLAN_SETTINGS);
      return;
    }
    navigation?.navigate(routes.ADD_CARDS_MODAL);
  };

  const onWalletMonitorDetails = () => {
    navigation?.navigate(routes.CARD_BALANCES, {
      creditCards,
      totalBalances: totalDebt,
      utilizacion,
    });
  };

  const onPlanDetails = () => {
    navigation?.navigate(routes.PLAN_REVIEW_READONLY);
  };

  const onCardDetailPress = () => {
    if (creditCards && creditCards.length) {
      navigation?.navigate(routes.CARDS_DETAIL);
      return;
    }
    navigation?.navigate(routes.ADD_CARDS_MODAL);
  };

  const onDashboardIconPress = () => {};

  const onReviewPlanPress = () => {
    if (plan && plan.savedPlan) {
      navigation?.navigate(routes.PLAN_REVIEW_READONLY);
      return;
    }
    if (creditCards && creditCards.length) {
      navigation?.navigate(routes.PLAN_SETTINGS);
      return;
    }
    navigation?.navigate(routes.ADD_CARDS_MODAL);
  };

  const debtPlanCalculatorProps = {
    isEditable: false,
    sliderControl: 5,
    monthlyPayment:
      plan && plan.savedPlan
        ? formatMoneyValue(plan.savedPlan.monthly_payment_amount)
        : '',
    monthlyInput: '',
    onMonthlyInputChange: () => {},
    estimatedPayoffTime:
      plan && plan.savedPlan
        ? daysWeeksMonthDateFormatter(plan.savedPlan.estimated_payoff_time)
        : '',
    estimatedSavings:
      plan && plan.savedPlan
        ? `${formatMoneyValue(plan.savedPlan.estimated_savings)}/yr`
        : '',
    estimatedPayoffDate:
      plan && plan.savedPlan ? plan.savedPlan.estimated_payoff_date : '',
  };

  const dashboardNavigatorProps = {
    onCardDetailPress,
    onDashboardIconPress,
    onReviewPlanPress,
    iconColorArr,
  };

  const onAddCardSuccess = async (data: any) => {
    setIsLoading(true);
    await savePlaidInstitution(data, triggerEntityLinkFailed, user);
    setUpdateData((previousUpdateDataCounter) => previousUpdateDataCounter + 1);
  };

  const onAddCardExit = async (linkExit: any) => {
    triggerEntityLinkStarted(navigationStateRoutes, user);
    await plaidLinkExitHandler(linkExit);
    if (linkExit && linkExit.error && linkExit.error.error_message) {
      const errorMessage = linkExit.error.errorMessage;

      triggerEntityLinkFailed(errorMessage, user);

      errorAlert({
        message: errorMessage,
      });
    }
  };
  const goToSafeAccountConnect = () =>
    navigation?.navigate(routes.SAFE_CONNECT);

  return (
    <ControlledFullLoaderLayout isLoading={isLoadingClone}>
      <DashboardView
        isLoading={isLoadingClone}
        {...debtPlanCalculatorProps}
        {...dashboardNavigatorProps}
        isPlanSaved={plan && plan.savedPlan ? true : false}
        totalDebt={formatMoneyValue(totalDebt)}
        onCreatePlan={onCreatePlan}
        onWalletMonitorDetails={onWalletMonitorDetails}
        onPlanDetails={onPlanDetails}
        cards={creditCards}
        onAddCardSuccess={(onSuccessDataResponse: any) =>
          (async () => await onAddCardSuccess(onSuccessDataResponse))()
        }
        tokenConfig={tokenConfig}
        onAddCardExit={onAddCardExit}
        goToSafeAccountConnect={goToSafeAccountConnect}
        dashboardLocalLoaderRef={dashboardLocalLoaderRef}
      />
    </ControlledFullLoaderLayout>
  );
};

export default DashboardViewWrapper;
