import * as React from 'react';
import { useSelector } from 'react-redux';

import routes from '../../constants/routes';

import { getPlan } from '../../store/selectors/selectors';

import PlanApproachView from './PlanApproachView';

import { NavigationSmashProps } from '../../types/common/commonTypes';

const PlanApproachViewWrapperReadOnly: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const plan = useSelector(getPlan);

  const onReviewPress = async () => {
    navigation?.navigate(routes.PLAN_REVIEW_READONLY);
  };

  return (
    <>
      <PlanApproachView
        onReviewPress={onReviewPress}
        cards={plan.savedPlan ? plan.savedPlan.credit_cards : null}
        highestAprCardIndex={
          plan.savedPlan ? plan.savedPlan.credit_cards.length - 1 : 0
        }
      />
    </>
  );
};

export default PlanApproachViewWrapperReadOnly;
