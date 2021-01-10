import getPlaidLinkTokenFromService from '../../requests/getPlaidLinkToken/getPlaiLinkTokenFromService';
import { savePlaidLinkTokenOnAsyncStorage } from '../../storage/plaid/plaid';

const getAndSavePlaidLinkConfig = async () => {
  const token = await getPlaidLinkTokenFromService();
  await savePlaidLinkTokenOnAsyncStorage(token);
};

export default getAndSavePlaidLinkConfig;
