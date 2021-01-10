import { PlaidErrors } from '../../enums/plaid/plaid';
import errorAlert from '../errorAlert';
import getAndSavePlaidLinkConfigHandler from '../getAndSavePlaidLinkToken/getAndSavePlaidLinkToken';

export default async (linkExit: any) => {
  if (linkExit.error.error_code === PlaidErrors.INVALID_LINK_TOKEN) {
    await getAndSavePlaidLinkConfigHandler();
    errorAlert({
      message: 'An error has occurred, please try again.',
    });
  }
};
