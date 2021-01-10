/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import InfoLayout from '../../../layouts/infoLayout/InfoLayout';

import { MainParagraph, P1 } from '../../../components/texts/Texts';

import StepsProgressBar from '../../../components/stepsProgressBar/StepsProgressBar';

import ActionButton from '../../../components/actionButton/ActionButton';
import { Card } from '../../../types/Card';
import TotalDebt from '../../../components/totalDebt/TotalDebt';
import AddCardsTable from '../../../components/addCardsTable/AddCardsTable';
import formatMoneyValue from '../../../helpers/formatMoneyValue/formatMoneyValue';
import theme from '../../../theme/theme';
import PlaidBanksLinksViewWrapper, {
  PlaidLinkOnSuccessCallbackType,
} from '../../plaidBanksLinksView/PlaidBanksLinksViewWrapper';

interface AddCardProps {
  onNextPress: () => void;
  onSecurityPress: () => void;
  goToSafeAccountConnect: () => void;
  cards: Card[] | null;
  totalDebt: number;
  onAddCardSuccess: PlaidLinkOnSuccessCallbackType;
}

const AddCardView: React.FunctionComponent<AddCardProps> = ({
  onNextPress,
  onSecurityPress,
  goToSafeAccountConnect,
  cards,
  totalDebt,
  onAddCardSuccess,
}) => {
  const footer = (
    <View
      style={{
        marginTop: 16,
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
      <MainParagraph style={{ marginBottom: 16 }}>Steps 1 of 3</MainParagraph>
      <View style={{ marginBottom: 16 }}>
        <StepsProgressBar progress={100 / 3} />
      </View>
      <MainParagraph>
        Add all your credit cards to create your personalized plan
      </MainParagraph>
      {totalDebt > 0 && (
        <View style={{ marginBottom: 20 }}>
          <TotalDebt totalDebt={formatMoneyValue(totalDebt)} />
        </View>
      )}
      {cards && cards.length > 0 && (
        <View>
          <AddCardsTable cards={cards} />
        </View>
      )}
      <View style={{ marginTop: cards && cards?.length > 0 ? 16 : 20 }}>
        {cards && cards.length > 0 ? (
          <PlaidBanksLinksViewWrapper onSuccessCallback={onAddCardSuccess}>
            <ActionButton label="Add card" />
          </PlaidBanksLinksViewWrapper>
        ) : (
          <ActionButton label="Add card" onPress={goToSafeAccountConnect} />
        )}
      </View>
    </InfoLayout>
  );
};

export default AddCardView;
