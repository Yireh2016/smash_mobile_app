import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCreditCards, getTotalDebt } from '../../store/selectors/selectors';
import CreditCardsView from './CreditCardsView';
import routes from '../../constants/routes';
import creditUtilizationCalculator from '../../helpers/creditUtilizationCalculator/creditUtilizationCalculator';
import { setIsLoading } from '../../store/actions/actions';

interface CreditaCardsWrapperProps {}

const CreditaCardsViewWrapper: React.FunctionComponent<CreditaCardsWrapperProps> = () => {
  const [isBottomSheetBack, setisBottomSheetBack] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const cards = useSelector(getCreditCards);
  const totalBalance = useSelector(getTotalDebt);
  const navigation = useNavigation();
  const [creditUtilization, setCreditUtilization] = useState(0);

  useEffect(() => {
    setCreditUtilization(creditUtilizationCalculator(cards));
  }, [cards]);

  const onDonePress = () => {
    setIsLoading(true);
    navigation?.navigate(routes.DASHBOARD);
  };

  const onCardPress = (index: number) => {
    setCardIndex(index);
    setisBottomSheetBack(true);
  };
  const onCloseBottomSheet = () => {
    setisBottomSheetBack(false);
  };
  return (
    <CreditCardsView
      {...{
        isBottomSheetBack,
        cardIndex,
        onCardPress,
        onCloseBottomSheet,
      }}
      cards={cards}
      totalBalance={totalBalance}
      creditUtilization={creditUtilization}
      onDonePress={onDonePress}
    />
  );
};

export default CreditaCardsViewWrapper;
