import * as React from 'react';
import { useSelector } from 'react-redux';

import routes from '../../constants/routes';
import PlanReviewView from './PlanReviewView';
import { NavigationSmashProps } from '../../types/common/commonTypes';
import {
  getPlan,
  getRoutesHistory,
  getUser,
} from '../../store/selectors/selectors';
import useReviewPlanEvents from '../../hooks/useReviewPlanEvents';

const PlanReviewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const plan = useSelector(getPlan);
  const user = useSelector(getUser);
  const routesHistory = useSelector(getRoutesHistory);

  const onDonePress = () => {
    navigation?.navigate(routes.PLAN_SUCCESS);
  };

  useReviewPlanEvents(user, routesHistory, plan.unsavedPlan);
  const onRecommendApproach = () => navigation?.navigate(routes.PLAN_APPROACH);

  const onEditPlan = () => {
    navigation?.navigate(routes.PLAN_SETTINGS);
  };

  const reviewProps = {
    onDonePress,
    onRecommendApproach,
    onEditPlan,
    cards: plan?.savedPlan?.credit_cards || [],
  };

  return (
    <>
      {plan?.savedPlan?.credit_cards ? (
        <PlanReviewView {...reviewProps} />
      ) : null}
    </>
  );
};

export default PlanReviewWrapper;
