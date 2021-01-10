/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import theme from '../../theme/theme';
import NotificationBell from '../../assets/NotificationBell';
import { H1, P1 } from '../../components/texts/Texts';
import SimpleLine from '../../assets/SimpleLine';
import { View } from 'react-native';
import CenterLayout from '../../layouts/centerLayout/CenterLayout';
import InfoGeneralLayout from '../../layouts/infoGeneralLayout/InfoGeneralLayout';

export interface NotificationsViewProps {
  onNotNow: () => void;
  onAllow: () => void;
}

const NotificationsView: React.FunctionComponent<NotificationsViewProps> = ({
  onNotNow,
  onAllow,
}) => {
  return (
    <InfoGeneralLayout
      actionLabel="Allow"
      secondaryActionLabel="Not now"
      onPress={onAllow}
      onSecondaryPress={onNotNow}
    >
      <CenterLayout>
        <View style={{ marginBottom: 49 }}>
          <NotificationBell />
        </View>
        <View style={{ marginBottom: 30 }}>
          <SimpleLine />
        </View>
        <H1
          style={{ width: 220, textAlign: 'center' }}
          color={theme.palette.secondary}
        >
          Stay on top of your credit cards
        </H1>
        <View style={{ marginTop: 10, width: 300 }}>
          <P1 style={{ textAlign: 'center' }}>
            We will send you notifications and reminders to pay off your cards
            on time and control your wallet
          </P1>
        </View>
      </CenterLayout>
    </InfoGeneralLayout>
  );
};

export default NotificationsView;
