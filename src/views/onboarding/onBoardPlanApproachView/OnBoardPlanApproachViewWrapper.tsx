import * as React from 'react';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import {
  getPlan,
  getRoutesHistory,
  getUser,
} from '../../../store/selectors/selectors';
import routes from '../../../constants/routes';
import { NavigationSmashProps } from '../../../types/common/commonTypes';
import OnBoardPlanApproachView from './OnBoardPlanApproachView';
import { Plan } from '../../../types/Plan';
import savePlanPromise from '../../../requests/savePlan/savePlan';
import { User } from '../../../store/types/user';

const OnBoardPlanApproachViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const [planTouse, setplanTouse] = useState<Plan | null>(null);

  const routesHistory = useSelector(getRoutesHistory);
  const plan = useSelector(getPlan);
  const user: User = useSelector(getUser);

  useEffect(() => {
    setplanTouse(plan.unsavedPlan);
  }, [plan]);

  const onReviewPress = async () => {
    if (routesHistory.slice(-2)[0]?.match(routes.ONBOARD_PLAN_SETTINGS)) {
      await savePlan();
    }
    navigation?.navigate(routes.ONBOARD_REVIEW_PLAN);
  };

  const savePlan = async () => {
    await savePlanPromise(plan, user.attributes.given_name);
  };

  return (
    <>
      {planTouse ? (
        <OnBoardPlanApproachView
          {...{
            onReviewPress,
            cards:
              planTouse && planTouse?.credit_cards.length > 0
                ? planTouse?.credit_cards
                : [],
            highestAprCardIndex:
              planTouse && planTouse?.credit_cards.length > 0
                ? planTouse?.credit_cards.length - 1
                : -1,
          }}
        />
      ) : null}
    </>
  );
};

export default OnBoardPlanApproachViewWrapper;
