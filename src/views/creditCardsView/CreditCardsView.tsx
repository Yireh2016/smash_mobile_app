/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Card } from '../../types/Card';

import InfoLayout from '../../layouts/infoLayout/InfoLayout';

import { H3, H2, P1, P2 } from '../../components/texts/Texts';
import SmashButton from '../../components/smashButton/SmashButton';
import CardListItem from '../../components/cardListItem/CardListItem';
import TableRow, { Column } from '../../components/tableRow/TableRow';
import CreditCardData from '../../components/creditCardData/CreditCardData';
import CreditCardDataDetail from '../../components/creditCardData/CreditCardDataDetail';

import formatPercentage from '../../helpers/formatPercentage/formatPercentage';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import truncateText from '../../helpers/truncateText/truncateText';

import theme from '../../theme/theme';

import BottomSheetTip from '../../assets/BottomSheetTip';

const AnimatedView = Animated.View;

interface CreditCardsViewProps {
  cards: Card[];
  onDonePress: () => void;
  totalBalance: number;
  creditUtilization: number;
  isBottomSheetBack: boolean;
  onCloseBottomSheet: () => void;
  cardIndex: number;
  onCardPress: (arg0: number) => void;
}
const obj = {};
const styles = StyleSheet.create({
  bottomSheetHeaderContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.primaryLight,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 0.15,
    borderBottomColor: theme.palette.gray,
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerStyle: {
    backgroundColor: theme.palette.primaryLight,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.primaryLight,
  },
  bodyStyle: { backgroundColor: theme.palette.primaryLight },
  cardName: {
    textAlign: 'center',
    backgroundColor: theme.palette.primaryLight,
    marginTop: 10,
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  currentBalanceContainer: {
    marginBottom: 4,
  },
});

const CreditCardsView: React.FunctionComponent<CreditCardsViewProps> = ({
  cards,
  onDonePress,
  totalBalance,
  creditUtilization,
  isBottomSheetBack,
  onCloseBottomSheet,
  cardIndex,
  onCardPress,
}) => {
  const insets = useSafeAreaInsets();

  const _onCardPress = (index: number) => {
    onCardPress(index);
    obj[`ref${index}`].snapTo(0);
  };

  const _onCloseBottomSheet = () => {
    onCloseBottomSheet();
    obj[`ref${cardIndex}`].snapTo(1);
  };

  let fall = new Animated.Value(1);

  const CreditCardsTitleComp = () => {
    return (
      <View style={{ marginBottom: 15 }}>
        <P1>Smash pulls your data to build insights and recommendations.</P1>
      </View>
    );
  };

  const cardsSummaryBalanceMap = [
    {
      component: <P1>Total balance</P1>,
      align: 'left',
    },
    {
      component: <P1>{formatMoneyValue(totalBalance)}</P1>,
      align: 'right',
    },

    {
      component: <P1>Credit utilization</P1>,
      align: 'left',
    },
    {
      component: <P1>{formatPercentage(creditUtilization.toFixed(1))}</P1>,
      align: 'right',
    },
  ].map(
    (column: Column, index: number, arr) =>
      (index + 1) % 2 === 0 && (
        <View key={index} style={{ marginTop: 10 }}>
          <TableRow columns={[arr[index - 1], arr[index]]} />
        </View>
      )
  );

  const bottomSheetHeader = (card: Card) => (
    <View style={styles.bottomSheetHeaderContainer}>
      <BottomSheetTip />
      <H3 style={styles.cardName}>
        {`${truncateText(card.bank, 25)} `}
        <P2>({card.number})</P2>
      </H3>
    </View>
  );

  const cardDetailBottomSheet = (card: Card) => (
    <View style={{ backgroundColor: theme.palette.primaryLight }}>
      <CreditCardDataDetail card={card} />
      <View style={{ marginBottom: 15 + insets.bottom, paddingHorizontal: 10 }}>
        <SmashButton
          testID="cardDetailBottomSheetBtn"
          label="Done"
          onPress={_onCloseBottomSheet}
        />
      </View>
    </View>
  );

  const cardsListMap = cards.map((card: Card, index: number) => {
    return (
      <View key={index} style={{ marginTop: 16 }}>
        <CreditCardData
          index={index}
          card={card}
          onCardPress={() => _onCardPress(index)}
        />
      </View>
    );
  });

  const bottomSheetMap = cards.map((card: Card, index: number) => (
    <BottomSheet
      key={index}
      ref={(input) => {
        obj[`ref${index}`] = input;
      }}
      snapPoints={[400 + insets.bottom, 0]}
      renderContent={() => cardDetailBottomSheet(card)}
      renderHeader={() => bottomSheetHeader(card)}
      borderRadius={0}
      initialSnap={1}
      callbackNode={fall}
      onCloseEnd={() => onCloseBottomSheet()}
    />
  ));

  const animatedShadowOpacity = Animated.interpolate(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  const renderShadow = React.useMemo(
    () => () => {
      return (
        <AnimatedView
          pointerEvents={isBottomSheetBack ? 'auto' : 'none'}
          style={[
            styles.shadowContainer,
            {
              opacity: animatedShadowOpacity,
            },
          ]}
        >
          <TouchableWithoutFeedback
            style={{
              height: '100%',
            }}
            onPress={_onCloseBottomSheet}
          />
        </AnimatedView>
      );
    },
    [isBottomSheetBack, cardIndex]
  );

  return (
    <>
      <InfoLayout
        onPress={onDonePress}
        actionLabel="Done"
        titleComponent={<CreditCardsTitleComp />}
      >
        <View style={styles.currentBalanceContainer}>
          <CardListItem>
            <View style={{ paddingHorizontal: 13, paddingVertical: 20 }}>
              <H2>Current Balance</H2>
              {cardsSummaryBalanceMap}
            </View>
          </CardListItem>
        </View>
        {cardsListMap}
      </InfoLayout>
      {bottomSheetMap}
      {renderShadow()}
    </>
  );
};

export default CreditCardsView;
