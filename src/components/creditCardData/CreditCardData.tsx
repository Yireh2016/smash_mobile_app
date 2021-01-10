/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card } from '../../types/Card';
import { H3, P2 } from '../texts/Texts';
import TableRow from '../tableRow/TableRow';
import CreditCardGlass from '../../assets/CreditCardGlass';
import theme from '../../theme/theme';
import CardListItem from '../cardListItem/CardListItem';
import truncateText from '../../helpers/truncateText/truncateText';

interface CreditCardDataProps {
  card: Card;
  onCardPress: (arg0: Card) => void;
  index: number;
}

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
});
const CreditCardData: React.FunctionComponent<CreditCardDataProps> = ({
  card,
  onCardPress,
  index,
}) => {
  const { bank, number } = card;

  const onPress = () => {
    onCardPress(card);
  };

  return (
    <>
      <TouchableOpacity testID={`CreditCardData${index}`} onPress={onPress}>
        <CardListItem isLight={true}>
          <View style={styles.padding}>
            <TableRow
              columns={[
                {
                  component: (
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <H3>{`${truncateText(bank, 22)}`}</H3>
                      <P2>{` (${number})`}</P2>
                    </View>
                  ),
                  align: 'left',
                  width: 90,
                },
                {
                  component: (
                    <CreditCardGlass
                      color={theme.palette.secondary}
                      factor={1}
                    />
                  ),
                  align: 'right',
                  width: 10,
                },
              ]}
            />
          </View>
        </CardListItem>
      </TouchableOpacity>
    </>
  );
};

export default CreditCardData;
