import * as React from 'react';
import { P2, P1 } from '../../components/texts/Texts';

import { ACCOUNT_TYPES } from '../../constants/accountTypes';

import { Account } from '../../store/types/accounts';

import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import TwoColumnsLayout from '../../layouts/twoColumnsLayout/TwoColumnsLayout';

interface AccountListInterface {
  accounts: Account[];
}
const AccountList: React.FunctionComponent<AccountListInterface> = ({
  accounts,
}) => {
  const AccountsMap = accounts.map((account: Account, i: number) => {
    const { name, current_balance, type, number } = account;
    return (
      <TwoColumnsLayout
        key={i}
        left={
          <>
            <P1>{name}</P1>
            <P2>{`*(${number})`}</P2>
          </>
        }
        right={
          <>
            {type?.match(ACCOUNT_TYPES.credit) ? (
              <P1>{`(${formatMoneyValue(current_balance)})`}</P1>
            ) : (
              <P1>{formatMoneyValue(current_balance)}</P1>
            )}
          </>
        }
      />
    );
  });
  return <>{AccountsMap}</>;
};

export default AccountList;
