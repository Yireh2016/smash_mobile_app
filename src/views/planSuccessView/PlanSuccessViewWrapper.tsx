import * as React from 'react';
import { useSelector } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import routes from '../../constants/routes';
import { NavigationSmashProps } from '../../types/common/commonTypes';
import { getPlan } from '../../store/selectors/selectors';
import PlanSuccessView from './PlanSuccessView';
import daysWeeksMonthDateFormatter from '../../helpers/daysWeeksMonthDateFormatter/daysWeeksMonthDateFormatter';
import { setIsLoading } from '../../store/actions/actions';

const PlanSuccessViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const plan = useSelector(getPlan);

  const onDone = async () => {
    const AuthorizationStatus = await messaging().hasPermission();

    if (AuthorizationStatus > 0) {
      setIsLoading(true);
      navigation?.navigate(routes.DASHBOARD);
      return;
    }
    navigation?.navigate(routes.NOTIFICATIONS);
  };
  return (
    <PlanSuccessView
      payOffDate={daysWeeksMonthDateFormatter(
        plan.savedPlan?.estimated_payoff_time
      )}
      onDone={onDone}
    />
  );
};

export default PlanSuccessViewWrapper;
