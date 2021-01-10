/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';

import { MainParagraph } from '../../../components/texts/Texts';

import StepsProgressBar from '../../../components/stepsProgressBar/StepsProgressBar';

import PlanApproachView, {
  PlanApproachViewProps,
} from '../../../views/planApproachView/PlanApproachView';

const OnBoardPlanSettingView: React.FunctionComponent<PlanApproachViewProps> = ({
  onReviewPress,
  cards,
  highestAprCardIndex,
}) => {
  const header = (
    <>
      <MainParagraph style={{ marginBottom: 16 }}>Steps 3 of 3</MainParagraph>
      <View style={{ marginBottom: 16 }}>
        <StepsProgressBar progress={100} />
      </View>
    </>
  );
  return (
    <PlanApproachView
      {...{ onReviewPress, cards, header, highestAprCardIndex }}
    />
  );
};

export default OnBoardPlanSettingView;
