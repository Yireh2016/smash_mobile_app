import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SmashAnimLoader from '../../../layouts/loaders/smashAnimLoader/SmashAnimLoader';
import routes from '../../../constants/routes';
import {
  getCreditCards,
  getPlan,
  getTotalDebt,
  getUser,
} from '../../../store/selectors/selectors';
import { NavigationSmashProps } from '../../../types/common/commonTypes';
import OnboardingAddCardView from './OnboardingAddCardView';

import updateAllAppData from '../../../requests/updateAllAppData/updateAllAppData';
import { PlaidLinkOnSuccessCallbackType } from '../../plaidBanksLinksView/PlaidBanksLinksViewWrapper';

const AddCardViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const plan = useSelector(getPlan);
  const [isLoadingClone, setIsLoadingClone] = useState(false);
  const cards = useSelector(getCreditCards);
  const totalDebt = useSelector(getTotalDebt);
  const user = useSelector(getUser);

  const onAddCardSuccess: PlaidLinkOnSuccessCallbackType = (
    data,
    triggerEntityLinkFailed
  ) => {
    updateAllAppData(
      data,
      plan,
      triggerEntityLinkFailed,
      user,
      setIsLoadingClone
    );
  };

  const props = {
    onNextPress: () => navigation?.navigate(routes.ONBOARD_ADD_ACCOUNTS),
    onSecurityPress: () => navigation?.navigate(routes.SECURITY),
    onAddCardSuccess: onAddCardSuccess,
    goToSafeAccountConnect: () => navigation?.navigate(routes.SAFE_CONNECT),
    cards,
    totalDebt,
  };

  return (
    <>
      <SmashAnimLoader loader={isLoadingClone} />
      <OnboardingAddCardView {...props} />
    </>
  );
};

export default AddCardViewWrapper;
