import * as React from 'react';
import { NavigationSmashProps } from '../../../types/common/commonTypes';
import CreditCardStep from './CreditCardStep';
import { useNavigationState } from '@react-navigation/native';
import onCarouselSignUp from '../../../helpers/onCarouselSignUp/onCarouselSignUp';

const CreditCardStepWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const navigationState = useNavigationState((state) => state);

  return (
    <CreditCardStep
      onSignUp={() => onCarouselSignUp(navigation, navigationState)}
    />
  );
};

export default CreditCardStepWrapper;
