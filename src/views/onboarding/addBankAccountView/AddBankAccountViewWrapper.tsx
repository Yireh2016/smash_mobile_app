import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SmashAnimLoader from '../../../layouts/loaders/smashAnimLoader/SmashAnimLoader';
import routes from '../../../constants/routes';
import {
  getPlan,
  getAccounts,
  getCreditCards,
  getUser,
} from '../../../store/selectors/selectors';
import { NavigationSmashProps } from '../../../types/common/commonTypes';

import AddBankAccountView from './AddBankAccountView';
import updateAllAppData from '../../../requests/updateAllAppData/updateAllAppData';
import filterCheckingsDepositaryAccounts from '../../../helpers/filterCheckingsDepositaryAccounts/filterCheckingsDepositaryAccounts';
import calculateTotalAccountBalance from '../../../helpers/calculateTotalAccountBalance/calculateTotalAccountBalance';
import { PlaidLinkOnSuccessCallbackType } from '../../../views/plaidBanksLinksView/PlaidBanksLinksViewWrapper';

const AddCardViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const plan = useSelector(getPlan);
  const [isLoadingClone, setIsLoadingClone] = useState(false);
  const accounts = useSelector(getAccounts);
  const user = useSelector(getUser);

  const filteredAccounts = filterCheckingsDepositaryAccounts(accounts);

  const totalAccount = calculateTotalAccountBalance(filteredAccounts);

  const cards = useSelector(getCreditCards);

  const onNextPress = () => {
    if (cards?.length > 0) {
      navigation?.navigate(routes.ONBOARD_PLAN_SETTINGS);
      return;
    }
    navigation?.navigate(routes.DASHBOARD);
  };

  const onAddAccountSuccess: PlaidLinkOnSuccessCallbackType = (
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

  const addBankAccountViewProps = {
    onNextPress,
    onAddAccountSuccess: onAddAccountSuccess,
    onSecurityPress: () => navigation?.navigate(routes.SECURITY),
    goToSafeAccountConnect: () => navigation?.navigate(routes.SAFE_CONNECT),
    accounts,
    totalDebt: totalAccount,
  };

  return (
    <>
      <SmashAnimLoader loader={isLoadingClone} />
      <AddBankAccountView {...addBankAccountViewProps} />
    </>
  );
};

export default AddCardViewWrapper;
