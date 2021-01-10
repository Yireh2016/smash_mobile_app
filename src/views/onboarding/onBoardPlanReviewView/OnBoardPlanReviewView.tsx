/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';

import { MainParagraph } from '../../../components/texts/Texts';

import StepsProgressBar from '../../../components/stepsProgressBar/StepsProgressBar';

import PlanReviewView, {
  PlanReviewProps,
} from '../../../views/planReviewView/PlanReviewView';

const OnBoardPlanReviewView: React.FunctionComponent<PlanReviewProps> = ({
  onDonePress,
  onRecommendApproach,
  onEditPlan,
  cards,
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
    <PlanReviewView
      {...{
        header,
        onDonePress,
        onRecommendApproach,
        onEditPlan,
        cards,
      }}
    />
  );
};

export default OnBoardPlanReviewView;
