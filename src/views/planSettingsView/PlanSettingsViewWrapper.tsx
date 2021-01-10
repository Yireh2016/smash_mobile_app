import * as React from 'react';

import { NavigationSmashProps } from '../../types/common/commonTypes';

import routes from '../../constants/routes';

import PlanSettingsView from './PlanSettingsView';

const PlanSettingsViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => (
  <PlanSettingsView
    onReviewPress={() => {
      navigation?.navigate(routes.PLAN_APPROACH);
    }}
  />
);

export default PlanSettingsViewWrapper;
