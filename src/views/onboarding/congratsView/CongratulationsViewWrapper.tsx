import React from 'react';
import { useEffect } from 'react';
import CongratulationsView from './CongratulationsView';
import { NavigationSmashProps } from '../../../types/common/commonTypes';
import { setIsLoading } from '../../../store/actions/actions';
import routes from '../../../constants/routes';

const CongratulationsViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const onStartPress = () => {
    navigation?.navigate(routes.ONBOARD_ADD_CARDS);
  };
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return <CongratulationsView onStartPress={onStartPress} />;
};

export default CongratulationsViewWrapper;
