import {
  Account,
  AccountSubTypes,
  AccountTypes,
} from '../../store/types/accounts';

const filterCheckingsDepositaryAccounts = (accounts: Account[] | null) =>
  accounts && accounts.length > 0
    ? accounts.filter(
        (account: Account) =>
          account.type.match(new RegExp(AccountTypes.DEPOSITORY)) &&
          account.subtype.match(new RegExp(AccountSubTypes.CHECKINGS))
      )
    : null;
export default filterCheckingsDepositaryAccounts;
