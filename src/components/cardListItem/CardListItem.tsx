import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ChildrenProp } from '../../types/common/commonTypes';
import theme from '../../theme/theme';

interface CardListProps extends ChildrenProp {
  isLight?: boolean;
}
const CardListItem: React.FunctionComponent<CardListProps> = ({
  children,
  isLight = false,
}) => {
  const styles = StyleSheet.create({
    cardListContainer: {
      backgroundColor: isLight
        ? theme.palette.tertiary
        : theme.palette.primaryLight,
      borderRadius: 12,
      width: '100%',
    },
  });
  return <View style={styles.cardListContainer}>{children}</View>;
};

export default CardListItem;
