/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { H1, P1 } from '../../components/texts/Texts';
import SimpleLine from '../../assets/SimpleLine';
import { View } from 'react-native';
import CenterLayout from '../../layouts/centerLayout/CenterLayout';
import InfoGeneralLayout from '../../layouts/infoGeneralLayout/InfoGeneralLayout';
import SmashExplosion from '../../assets/SmashExplosion';

export interface NotificationsViewProps {
  onDone: () => void;
  payOffDate?: string;
}

const NotificationsView: React.FunctionComponent<NotificationsViewProps> = ({
  onDone,
  payOffDate,
}) => {
  return (
    <InfoGeneralLayout actionLabel="Done" onPress={onDone}>
      <CenterLayout>
        <View style={{ marginBottom: 20 }}>
          <SmashExplosion />
        </View>
        <View style={{ marginBottom: 20 }}>
          <SimpleLine />
        </View>
        <H1 style={{ width: 220, textAlign: 'center' }}>
          Congratulations! your plan is ready
        </H1>
        <View style={{ marginTop: 60, width: 166 }}>
          <P1 style={{ textAlign: 'center' }}>
            {`You are on track to be out of debt in ${payOffDate}`}
          </P1>
        </View>
      </CenterLayout>
    </InfoGeneralLayout>
  );
};

export default NotificationsView;
