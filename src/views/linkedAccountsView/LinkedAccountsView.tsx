/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { H1 } from '../../components/texts/Texts';
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader';

import useMyTheme from '../../hooks/useMyTheme';

import AccountList from './AccountList';

import { Account } from '../../store/types/accounts';

import InfoGeneralLayout from '../../layouts/infoGeneralLayout/InfoGeneralLayout';

import TrashCan from '../../assets/TrashCan';

interface LinkedAccountsViewInterface {
  linkedAccounts: Account[];
  deleteItemPressed: (id: string) => void;
  onDonePress: () => void;
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useMyTheme();

const LinkedAccountsView: React.FunctionComponent<LinkedAccountsViewInterface> = ({
  linkedAccounts,
  deleteItemPressed,
  onDonePress,
}) => {
  const accountsMap = [];

  if (linkedAccounts) {
    let linkedAccountsFilter: any = {};
    for (let index = 0; index < linkedAccounts.length; index++) {
      const account = linkedAccounts[index];
      const previousArr = linkedAccountsFilter[account.institution_name] || [];
      linkedAccountsFilter[account.institution_name] = [
        ...previousArr,
        account,
      ];
    }

    for (const institution_name in linkedAccountsFilter) {
      const accounts = linkedAccountsFilter[institution_name];

      accountsMap.push(
        <View
          style={{ marginTop: accountsMap.length ? 25 : 0 }}
          key={institution_name}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <DashboardHeader
              color={theme.palette.white}
              size="md"
              title={institution_name}
            />
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
              }}
            >
              <TouchableOpacity
                onPressOut={() =>
                  deleteItemPressed(
                    linkedAccountsFilter[institution_name][0].id
                  )
                }
              >
                <TrashCan factor={0.4} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ flex: 4 }}>
              <Text style={{ color: theme.palette.primary }}>ACCOUNT</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-start' }}>
              <Text style={{ color: theme.palette.primary }}>BALANCE</Text>
            </View>
          </View>
          <AccountList accounts={accounts} />
        </View>
      );
    }
  }
  return (
    <InfoGeneralLayout onPress={onDonePress} actionLabel="Done">
      <View style={{ flex: 1, ...styles.marginBottom20, marginTop: 10 }}>
        <H1>Linked accounts</H1>
      </View>
      <View style={{ flex: 9 }}>
        <ScrollView style={{ ...styles.marginTop30 }}>{accountsMap}</ScrollView>
      </View>
    </InfoGeneralLayout>
  );
};
const styles = StyleSheet.create({
  layout: theme.layout,
  marginBottom20: { marginBottom: 20 },
  paddingLayout: theme.paddingLayout,
  marginTop30: { marginTop: 10 },
  marginLeft10: { marginLeft: 10 },
  settingsLayout: { flexDirection: 'row', marginTop: 15 },
});

export default LinkedAccountsView;
