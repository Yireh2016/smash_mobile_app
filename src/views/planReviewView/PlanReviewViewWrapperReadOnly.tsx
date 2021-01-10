import * as React from 'react';
import { useSelector } from 'react-redux';

import routes from '../../constants/routes';
import PlanReviewView from './PlanReviewView';
import { NavigationSmashProps } from '../../types/common/commonTypes';
import {
  getFutureData,
  getPlan,
  getRoutesHistory,
  getTotalDebt,
  getUser,
} from '../../store/selectors/selectors';

import useReviewPlanEvents from '../../hooks/useReviewPlanEvents';

const PlanReviewWrapperReadOnly: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const plan = useSelector(getPlan);
  const futureDateData = useSelector(getFutureData);
  const totalDebt = useSelector(getTotalDebt);
  const user = useSelector(getUser);
  const routesHistory = useSelector(getRoutesHistory);

  useReviewPlanEvents(user, routesHistory, plan.savedPlan);

  const onDonePress = () => {
    navigation?.navigate(routes.DASHBOARD);
  };

  const onRecommendApproach = () =>
    navigation?.navigate(routes.PLAN_APPROACH_READONLY);

  const onEditPlan = () => {
    navigation?.navigate(routes.PLAN_SETTINGS, { futureDateData, totalDebt });
  };

  const reviewProps = {
    onDonePress,
    onRecommendApproach,
    onEditPlan,
    cards: plan?.savedPlan?.credit_cards || [],
  };

  return (
    <>
      {plan?.savedPlan?.credit_cards.length ? (
        <PlanReviewView {...reviewProps} />
      ) : null}
    </>
  );
};

export default PlanReviewWrapperReadOnly;
