/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';

import { MainParagraph } from '../../../components/texts/Texts';

import StepsProgressBar from '../../../components/stepsProgressBar/StepsProgressBar';

import PlanSettingsView from '../../../views/planSettingsView/PlanSettingsView';

interface OnBoardPlanSettingViewProps {
  onReviewPress: () => void;
}

const OnBoardPlanSettingView: React.FunctionComponent<OnBoardPlanSettingViewProps> = ({
  onReviewPress,
}) => {
  const header = (
    <>
      <MainParagraph style={{ marginBottom: 16 }}>Steps 3 of 3</MainParagraph>
      <View style={{ marginBottom: 16 }}>
        <StepsProgressBar progress={100} />
      </View>
      <MainParagraph>
        Define a monthly payment towards your cards.
      </MainParagraph>
    </>
  );
  return (
    <>
      <PlanSettingsView onReviewPress={onReviewPress} header={header} />
    </>
  );
};

export default OnBoardPlanSettingView;
