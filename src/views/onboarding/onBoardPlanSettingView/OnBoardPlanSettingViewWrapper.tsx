import * as React from 'react';
import routes from '../../../constants/routes';
import { NavigationSmashProps } from '../../../types/common/commonTypes';
import OnBoardPlanSettingView from './OnBoardPlanSettingView';

const OnBoardPlanSettingViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const onReviewPress = () => {
    navigation?.navigate(routes.ONBOARD_PLAN_APPROACH);
  };
  return <OnBoardPlanSettingView onReviewPress={onReviewPress} />;
};

export default OnBoardPlanSettingViewWrapper;
