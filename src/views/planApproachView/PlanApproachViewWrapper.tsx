import * as React from 'react';
import { useSelector } from 'react-redux';

import routes from '../../constants/routes';

import {
  getPlan,
  getRoutesHistory,
  getUser,
} from '../../store/selectors/selectors';

import PlanApproachView from './PlanApproachView';

import { NavigationSmashProps } from '../../types/common/commonTypes';
import savePlanPromise from '../../requests/savePlan/savePlan';
import { User } from '../../store/types/user';

const PlanApproachViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const plan = useSelector(getPlan);
  const user: User = useSelector(getUser);
  const routesHistory = useSelector(getRoutesHistory);

  const onReviewPress = async () => {
    if (routesHistory.slice(-2)[0]?.match(routes.PLAN_SETTINGS)) {
      await savePlan();
    }
    navigation?.navigate(routes.PLAN_REVIEW);
  };

  const savePlan = async () => {
    await savePlanPromise(plan, user.attributes.given_name);
  };
  return (
    <>
      {plan.unsavedPlan ? (
        <PlanApproachView
          onReviewPress={onReviewPress}
          cards={plan.unsavedPlan ? plan.unsavedPlan?.credit_cards : null}
          highestAprCardIndex={
            plan.unsavedPlan ? plan.unsavedPlan?.credit_cards.length - 1 : 0
          }
        />
      ) : null}
    </>
  );
};

export default PlanApproachViewWrapper;
