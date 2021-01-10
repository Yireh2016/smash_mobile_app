/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import InfoLayout from '../../layouts/infoLayout/InfoLayout';
import theme from '../../theme/theme';

import { NewCard } from '../../types/Card';
import { H1, H2, H3, MainParagraph } from '../../components/texts/Texts';
import TableRow from '../../components/tableRow/TableRow';
import CardListItem from '../../components/cardListItem/CardListItem';
import CardNamePair from '../../components/cardNameMaskPair/CardNameMaskPair';

import formatPercentage from '../../helpers/formatPercentage/formatPercentage';

export interface PlanApproachViewProps {
  onReviewPress: () => void;
  cards: NewCard[] | null;
  highestAprCardIndex: number;
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
  },
  headerLayout: {
    marginTop: 10,
  },
});
const PlanApproachView: React.FunctionComponent<PlanApproachViewProps> = ({
  onReviewPress,
  cards,
  highestAprCardIndex,
  header,
}) => {
  const cardsMap = cards
    ? cards.map((card: NewCard, i: number) => {
        return (
          <View
            key={i}
            style={
              i ? styles.cardListItemContainer : styles.cardListItemContainer_
            }
          >
            <CardListItem>
              <View style={{ paddingHorizontal: 13, paddingVertical: 18 }}>
                <TableRow
                  columns={[
                    {
                      component: <CardNamePair maxLentgh={23} card={card} />,
                      align: 'left',
                      width: 80,
                    },
                    {
                      component: (
                        <H3>{`${formatPercentage(
                          card.purchase_apr_percentage
                        )} `}</H3>
                      ),
                      align: 'right',
                      width: 20,
                    },
                  ]}
                />
              </View>
            </CardListItem>
          </View>
        );
      })
    : null;

  const highestAprCardMap = cards
    ? [cards[highestAprCardIndex]].map((card: NewCard, i: number) => {
        return (
          <View
            key={i}
            style={
              i ? styles.cardListItemContainer : styles.cardListItemContainer_
            }
          >
            <CardListItem>
              <View style={{ paddingHorizontal: 13, paddingVertical: 18 }}>
                <TableRow
                  columns={[
                    {
                      component: <CardNamePair maxLentgh={23} card={card} />,
                      align: 'left',
                      width: 80,
                    },
                    {
                      component: (
                        <H3>{`${formatPercentage(
                          card.purchase_apr_percentage
                        )} `}</H3>
                      ),
                      align: 'right',
                      width: 20,
                    },
                  ]}
                />
              </View>
            </CardListItem>
          </View>
        );
      })
    : null;
  return (
    <InfoLayout onPress={onReviewPress} actionLabel="Review">
      {header}
      <View style={styles.layout}>
        <View style={styles.headerLayout}>
          <H1>Recommended approach</H1>
          <MainParagraph>
            Follow these instructions to optimize your progress
          </MainParagraph>
        </View>
        <View style={styles.minimunPaymentsLayout}>
          <H2>Make minimum payments on time</H2>
          <View>{cardsMap}</View>
        </View>
        <View style={styles.minimunPaymentsLayout}>
          <H2>Pay down your highest APR balance</H2>
          <View>{highestAprCardMap}</View>
        </View>
      </View>
    </InfoLayout>
  );
};

export default PlanApproachView;
