import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { P1 } from '../texts/Texts';
import truncateText from '../../helpers/truncateText/truncateText';
import { Account } from '../../store/types/accounts';

interface AccountNamePairProps {
  account: Account;
  maxLentgh?: number;
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
const AccountNamePair: React.FunctionComponent<AccountNamePairProps> = ({
  account,
  maxLentgh = 16,
}) => {
  return (
    <View style={styles.container}>
      <P1 isBold={true}>{`${truncateText(
        account.institution_name,
        maxLentgh
      )}`}</P1>
      <P1>{` (${account.number})`}</P1>
    </View>
  );
};

export default AccountNamePair;
