/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoLayout from '../../layouts/infoLayout/InfoLayout';
import theme from '../../theme/theme';

import { NewCard } from '../../types/Card';
import { P1, P2, H1, H2, MainParagraph } from '../../components/texts/Texts';
import TableRow from '../../components/tableRow/TableRow';
import CardListItem from '../../components/cardListItem/CardListItem';
import MiniButton from '../../components/miniButton/MiniButton';

import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import dateFormats from '../../helpers/dateFormats/dateFormats';
import CardNameMaskPair from '../../components/cardNameMaskPair/CardNameMaskPair';

export interface PlanReviewProps {
  onDonePress: () => void;
  onRecommendApproach: () => void;
  onEditPlan: () => void;
  cards: NewCard[];
  header?: Element;
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: theme.background.color,
  },
  cardListItemContainer: {
    marginTop: 16,
  },
  cardListItemContainer_: {
    marginTop: 10,
  },
  minimunPaymentsLayout: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerLayout: {
    marginTop: 10,
  },
  cardsLayout: {
    marginTop: 16,
  },
  firstCardsLayout: {
    marginTop: 10,
  },
  recommedLayout: {
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
});
const PlanReviewView: React.FunctionComponent<PlanReviewProps> = ({
  onDonePress,
  onRecommendApproach,
  onEditPlan,
  cards,
  header = null,
}) => {
  const cardsMap = cards.map((card: NewCard, i: number) => {
    return (
      <View
        key={i}
        style={i === 0 ? styles.firstCardsLayout : styles.cardsLayout}
      >
        <CardListItem>
          <View style={{ paddingHorizontal: 13, paddingVertical: 18 }}>
            <TableRow
              columns={[
                {
                  component: <CardNameMaskPair maxLentgh={15} card={card} />,
                  align: 'left',
                  width: 60,
                },
                {
                  component: (
                    <P1 isBold={true}>{`${formatMoneyValue(
                      card.suggested_payment_amount || 0
                    )}`}</P1>
                  ),
                  align: 'left',
                  width: 25,
                },
                {
                  component: (
                    <P1 isBold={true}>{`${dateFormats(
                      card.next_payment_due_date
                    )}`}</P1>
                  ),
                  align: 'left',
                  width: 15,
                },
              ]}
            />
          </View>
        </CardListItem>
      </View>
    );
  });

  return (
    <>
      <InfoLayout
        onPress={onDonePress}
        onSecondaryPress={onEditPlan}
        secondaryActionLabel="Edit plan"
        actionLabel="Done"
      >
        {header}
        <View style={styles.layout}>
          <View style={styles.headerLayout}>
            <H1>30-day plan</H1>
            <MainParagraph>
              Based on your plan settings, we recommend this schedule.
            </MainParagraph>
          </View>
          <View style={styles.minimunPaymentsLayout}>
            <H2>Debt plan</H2>
          </View>
          <View style={{ paddingRight: 32 }}>
            <TableRow
              columns={[
                { component: <P2>Card</P2>, align: 'left', width: 65 },
                { component: <P2>Payment</P2>, align: 'left', width: 25 },
                { component: <P2>Date</P2>, align: 'left', width: 10 },
              ]}
            />
          </View>
          <View>{cardsMap}</View>
          <View style={styles.recommedLayout}>
            <MiniButton
              label="Recommended approach"
              onPress={onRecommendApproach}
            />
          </View>
        </View>
      </InfoLayout>
    </>
  );
};

export default PlanReviewView;
