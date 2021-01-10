import { useNavigationState } from '@react-navigation/native';
import * as React from 'react';
import { NavigationSmashProps } from '../../../types/common/commonTypes';
import SecurityStep from './SecurityStep';
import onCarouselSignUp from '../../../helpers/onCarouselSignUp/onCarouselSignUp';

const SecurityStepWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const navigationState = useNavigationState((state) => state);

  return (
    <SecurityStep
      onSignUp={() => onCarouselSignUp(navigation, navigationState)}
    />
  );
};

export default SecurityStepWrapper;
