import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { setIsLoading, setAccounts } from '../../store/actions/actions';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

import LinkedAccountsView from './LinkedAccountsView';
import { getLinkedAccounts } from '../../store/selectors/selectors';

import errorAlert from '../../helpers/errorAlert';

import deleteItemInterface from '../../interfaces/deleteItem/deleteItem';
import CustomErrorModal from '../../components/customErrorModal/CustomErrorModal';
import routes from '../../constants/routes';

interface LinkedAccountsWrapperInterface {
  navigation?: NavigationProp<ParamListBase>;
}

const LinkedAccountsWrapper: React.FunctionComponent<LinkedAccountsWrapperInterface> = ({
  navigation,
}) => {
  const linkedAccounts = useSelector(getLinkedAccounts);
  const [isModal, setIsModal] = useState(false);
  const [accountId, setAccountId] = useState('');

  const deleteItem = async () => {
    setIsLoading(true);
    try {
      await deleteItemInterface(accountId);
      const filteredLinkedAccounts = linkedAccounts.filter(
        (account) => account.id !== accountId
      );
      setAccounts(filteredLinkedAccounts);
      setIsModal(false);
      setIsLoading(false);
    } catch (error) {
      setIsModal(false);
      setIsLoading(false);
      errorAlert(error);
    }
  };

  const deleteItemPressed = (_accountId: string) => {
    setIsModal(true);
    setAccountId(_accountId);
  };

  const onDonePress = () => {
    setIsLoading(true);
    navigation?.navigate(routes.DASHBOARD);
  };
  return (
    <>
      <CustomErrorModal
        isModal={isModal}
        setIsModal={setIsModal}
        bodyMessage="Are you sure you want to unlink this account?"
        okPressed={deleteItem}
        errorTitle="Are you sure?"
      />
      <LinkedAccountsView
        linkedAccounts={linkedAccounts}
        deleteItemPressed={(id: string) => deleteItemPressed(id)}
        onDonePress={onDonePress}
      />
    </>
  );
};

export default LinkedAccountsWrapper;
