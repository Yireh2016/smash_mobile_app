/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import InfoLayout from '../../../layouts/infoLayout/InfoLayout';

import { MainParagraph, P1 } from '../../../components/texts/Texts';

import StepsProgressBar from '../../../components/stepsProgressBar/StepsProgressBar';

import ActionButton from '../../../components/actionButton/ActionButton';
import TotalDebt from '../../../components/totalDebt/TotalDebt';
import AddAccountsTable from '../../../components/addAccountsTable/AddAccountsTable';
import formatMoneyValue from '../../../helpers/formatMoneyValue/formatMoneyValue';
import theme from '../../../theme/theme';
import { Account } from '../../../store/types/accounts';
import PlaidBanksLinksViewWrapper, {
  PlaidLinkOnSuccessCallbackType,
} from '../../../views/plaidBanksLinksView/PlaidBanksLinksViewWrapper';

interface AddBankAccountProps {
  onNextPress: () => void;
  onAddAccountSuccess: PlaidLinkOnSuccessCallbackType;
  onSecurityPress: () => void;
  accounts: Account[] | null;
  totalDebt: number;
  goToSafeAccountConnect: () => void;
}

const AddBankAccount: React.FunctionComponent<AddBankAccountProps> = ({
  onNextPress,
  onAddAccountSuccess,
  onSecurityPress,
  goToSafeAccountConnect,
  accounts = [],
  totalDebt,
}) => {
  const footer = (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <P1>Learn more about our </P1>
      <TouchableOpacity onPress={onSecurityPress}>
        <P1 isBold={true} color={theme.palette.secondary}>
          Security
        </P1>
      </TouchableOpacity>
    </View>
  );

  return (
    <InfoLayout onPress={onNextPress} actionLabel={'Next'} footer={footer}>
      <MainParagraph style={{ marginBottom: 16 }}>Steps 2 of 3</MainParagraph>
      <View style={{ marginBottom: 16 }}>
        <StepsProgressBar progress={200 / 3} />
      </View>
      <MainParagraph>
        Add all your bank accounts to recommend a recurring payment toward your
        cards.
      </MainParagraph>
      {totalDebt > 0 && (
        <View style={{ marginBottom: 20 }}>
          <TotalDebt
            title="Total bank accounts"
            totalDebt={formatMoneyValue(totalDebt)}
          />
        </View>
      )}
      {accounts && accounts.length > 0 && (
        <View>
          <AddAccountsTable accounts={accounts} />
        </View>
      )}
      <View style={{ marginTop: accounts && accounts.length > 0 ? 16 : 20 }}>
        {accounts && accounts.length > 0 ? (
          <PlaidBanksLinksViewWrapper onSuccessCallback={onAddAccountSuccess}>
            <ActionButton label="Add bank account" />
          </PlaidBanksLinksViewWrapper>
        ) : (
          <ActionButton
            label="Add bank account"
            onPress={goToSafeAccountConnect}
          />
        )}
      </View>
    </InfoLayout>
  );
};

export default AddBankAccount;
