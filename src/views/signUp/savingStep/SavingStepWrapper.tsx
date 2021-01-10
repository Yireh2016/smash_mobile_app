import { useNavigationState } from '@react-navigation/native';
import * as React from 'react';
import { NavigationSmashProps } from '../../../types/common/commonTypes';
import SavingStep from './SavingStep';
import onCarouselSignUp from '../../../helpers/onCarouselSignUp/onCarouselSignUp';

const SavingStepWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const navigationState = useNavigationState((state) => state);
  return (
    <SavingStep
      onSignUp={() => onCarouselSignUp(navigation, navigationState)}
    />
  );
};

export default SavingStepWrapper;
