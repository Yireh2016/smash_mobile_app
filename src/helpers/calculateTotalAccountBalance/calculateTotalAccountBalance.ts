import { Account } from '../../store/types/accounts';

const calculateTotalAccountBalance = (accounts: Account[] | null) =>
  accounts && accounts.length > 0
    ? accounts
        .map((account: Account) => account.current_balance)
        .reduce(
          (previousAccountTotal: number, currentAccountBalance: number) =>
            previousAccountTotal + currentAccountBalance
        )
    : 0;

export default calculateTotalAccountBalance;
