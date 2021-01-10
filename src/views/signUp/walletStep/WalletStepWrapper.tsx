import { useNavigationState } from '@react-navigation/native';
import * as React from 'react';
import { NavigationSmashProps } from '../../../types/common/commonTypes';
import WalletStep from './WalletStep';
import onCarouselSignUp from '../../../helpers/onCarouselSignUp/onCarouselSignUp';

const WalletStepWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const navigationState = useNavigationState((state) => state);

  return (
    <WalletStep
      onSignUp={() => onCarouselSignUp(navigation, navigationState)}
    />
  );
};

export default WalletStepWrapper;
