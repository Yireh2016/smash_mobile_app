import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlaidStorage } from '../../enums/plaid/plaid';

export const savePlaidLinkTokenOnAsyncStorage = async (token: string) =>
  await AsyncStorage.setItem(PlaidStorage.PLAID_LINK_TOKEN, token);

export const getPlaidLinkTokenFromAsyncStorage = async () =>
  await AsyncStorage.getItem(PlaidStorage.PLAID_LINK_TOKEN);
