import { useEffect } from 'react';
import { AppStateStatus } from 'react-native';
import getAndSavePlaidLinkConfigHandler from '../../../../helpers/getAndSavePlaidLinkToken/getAndSavePlaidLinkToken';

const useGetAndSavePlaidLinkToken = (
  appStateVisible: AppStateStatus,
  isUserAuthenticated: boolean
) => {
  useEffect(() => {
    const getAndSavePlaidLinkConfigHandlerAsync = async () =>
      await getAndSavePlaidLinkConfigHandler();
    if (appStateVisible.match(/active/) && isUserAuthenticated) {
      getAndSavePlaidLinkConfigHandlerAsync();
      return;
    }
  }, [appStateVisible, isUserAuthenticated]);
};

export default useGetAndSavePlaidLinkToken;
