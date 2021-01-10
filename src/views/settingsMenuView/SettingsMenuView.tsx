import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { P1 } from '../../components/texts/Texts';
import Summary from '../../components/summary/Summary';

import useMyTheme from '../../hooks/useMyTheme';

import Settings from '../../assets/Settings';
import Send from '../../assets/Send';
import Help from '../../assets/Help';

import dateFormats from '../../helpers/dateFormats/dateFormats';

import { TouchableOpacity } from 'react-native-gesture-handler';

import InfoLayout from '../../layouts/infoLayout/InfoLayout';

import TrashCan from '../../assets/TrashCan';

interface SettingsMenuViewInterface {
  fullname: string;
  date: string;
  signOut(): void;
  deleteSmashAccount(): void;
  goToLinkedAccounts: () => void;
  goToURL: () => void;
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useMyTheme();

const SettingsMenuView: React.FunctionComponent<SettingsMenuViewInterface> = ({
  fullname,
  date,
  signOut,
  deleteSmashAccount,
  goToLinkedAccounts,
  goToURL,
}) => {
  const menuArr = [
    {
      icon: <Send />,
      text: 'Send feedback',
      onPress: goToURL,
    },
    {
      icon: <Help />,
      text: 'Help',
      onPress: goToURL,
    },
  ];

  interface Menu {
    icon: Element;
    text: string;
    onPress(): void;
  }

  const SettingLayout = (props: any) => (
    <View style={styles.settingsLayout}>{props.children}</View>
  );

  const BlockMenuLayout = (props: any) => (
    <View style={styles.marginTop20}>{props.children}</View>
  );
  const menuMap = menuArr.map((menu: Menu, i: number) => {
    return (
      <TouchableOpacity key={i} onPress={menu.onPress}>
        <SettingLayout>
          {menu.icon}
          <P1 style={styles.marginLeft10}>{menu.text}</P1>
        </SettingLayout>
      </TouchableOpacity>
    );
  });

  return (
    <InfoLayout title={fullname} onPress={signOut} actionLabel="Log out">
      <Summary text={`Member since ${dateFormats(date)}`} />
      <BlockMenuLayout>
        <Text style={{ color: theme.palette.primary }}>SETTINGS</Text>
        <TouchableOpacity onPress={goToLinkedAccounts}>
          <SettingLayout>
            <Settings />
            <P1 style={styles.marginLeft10}>Linked accounts</P1>
          </SettingLayout>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteSmashAccount}>
          <SettingLayout>
            <TrashCan factor={0.4} />
            <P1 style={styles.marginLeft10}>Delete account</P1>
          </SettingLayout>
        </TouchableOpacity>
      </BlockMenuLayout>
      <BlockMenuLayout>
        <Text style={{ color: theme.palette.primary }}>SUPPORT</Text>

        {menuMap}
      </BlockMenuLayout>
    </InfoLayout>
  );
};
const styles = StyleSheet.create({
  layout: theme.layout,
  marginTop20: { marginTop: 50 },
  marginLeft10: { marginLeft: 10 },
  settingsLayout: { flexDirection: 'row', marginTop: 15 },
});

export default SettingsMenuView;
