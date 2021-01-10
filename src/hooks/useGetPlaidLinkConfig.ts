import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlaidStorage } from '../enums/plaid/plaid';
import { savePlaidLinkTokenOnAsyncStorage } from '../storage/plaid/plaid';
import getPlaidLinkTokenFromService from '../requests/getPlaidLinkToken/getPlaiLinkTokenFromService';

const useGetPlaidLinkConfig = (
  setTokenConfig: React.Dispatch<React.SetStateAction<S>>
) => {
  useEffect(() => {
    const getPlaidLinkToken = async () => {
      try {
        const plaidLinkToken = await AsyncStorage.getItem(
          PlaidStorage.PLAID_LINK_TOKEN
        );

        if (plaidLinkToken) {
          setTokenConfig({ token: plaidLinkToken });
          return;
        }
        const token = await getPlaidLinkTokenFromService();

        savePlaidLinkTokenOnAsyncStorage(token);
        setTokenConfig({ token });
      } catch (error) {
        const token = await getPlaidLinkTokenFromService();
        savePlaidLinkTokenOnAsyncStorage(token);
        setTokenConfig({ token });
      }
    };

    getPlaidLinkToken();
  }, [setTokenConfig]);
};

export default useGetPlaidLinkConfig;
