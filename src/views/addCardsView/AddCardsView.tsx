/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { P1, H3 } from '../../components/texts/Texts';
import SmashButton from '../../components/smashButton/SmashButton';
import CenterLayout from '../../layouts/centerLayout/CenterLayout';
import InfoGeneralLayout from '../../layouts/infoGeneralLayout/InfoGeneralLayout';
import PlaidBanksLinks from '../../components/plaidBanksLinks/PlaidBanksLinks';
import {
  LinkExitListener,
  LinkTokenConfiguration,
} from 'react-native-plaid-link-sdk';
import { Card } from '../../types/Card';

import CardsIlustration from '../../assets/CardsIlustration';

interface AddCardsViewProps {
  onAddCardSuccess: (arg0: any) => void;
  onAddCardExit: LinkExitListener;
  onCancel: () => void;
  tokenConfig: LinkTokenConfiguration;
  cards: Card[];
  goToSafeConnect: () => void;
}

const styles = StyleSheet.create({
  cancelContainer: {
    marginTop: 25,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  messageContainer: {
    marginBottom: 20,
  },
  messageStyle: {
    width: 250,
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 54,
  },
});

const AddCardsView: React.FunctionComponent<AddCardsViewProps> = ({
  tokenConfig,
  onAddCardSuccess,
  onAddCardExit,
  onCancel,
  goToSafeConnect,
  cards,
}) => {
  const controls = (
    <View style={{ paddingHorizontal: 24 }}>
      {cards && cards.length > 0 ? (
        <>
          {tokenConfig.token === '' ? null : (
            <PlaidBanksLinks
              onSuccess={onAddCardSuccess}
              tokenConfig={tokenConfig}
              onExit={onAddCardExit}
            >
              <SmashButton
                type="no-action"
                testID="SmashModalAddCard"
                label="Add credit card"
              />
            </PlaidBanksLinks>
          )}
        </>
      ) : (
        <SmashButton
          testID="SmashModalAddCard2"
          onPress={goToSafeConnect}
          label="Add credit card"
        />
      )}

      <View style={styles.cancelContainer}>
        <SmashButton
          testID="SmashModalCancel"
          type="secondary"
          onPress={onCancel}
          label="Cancel"
        />
      </View>
    </View>
  );
  return (
    <InfoGeneralLayout footer={controls}>
      <View style={{ flex: 1 }}>
        <CenterLayout>
          <View style={styles.titleContainer}>
            <View style={styles.iconContainer}>
              <CardsIlustration factor={0.2} />
            </View>
            <H3>You do not have </H3>
            <H3>associated cards</H3>
          </View>
          <View style={styles.messageContainer}>
            <P1 style={styles.messageStyle}>
              Add a credit card to create your first payment plan
            </P1>
          </View>
        </CenterLayout>
      </View>
    </InfoGeneralLayout>
  );
};

export default AddCardsView;
