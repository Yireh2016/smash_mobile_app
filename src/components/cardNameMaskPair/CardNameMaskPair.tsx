import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NewCard } from '../../types/Card';
import { P1 } from '../texts/Texts';
import truncateText from '../../helpers/truncateText/truncateText';

interface CardNameMaskPairProps {
  card: NewCard;
  maxLentgh?: number;
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
const CardNameMaskPair: React.FunctionComponent<CardNameMaskPairProps> = ({
  card,
  maxLentgh = 16,
}) => {
  return (
    <View style={styles.container}>
      <P1 isBold={true}>{`${truncateText(card.bank_name, maxLentgh)}`}</P1>
      <P1>{` (${card.mask})`}</P1>
    </View>
  );
};

export default CardNameMaskPair;
