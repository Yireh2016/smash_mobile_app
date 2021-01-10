import * as React from 'react';
import { useEffect } from 'react';
import InfoLayout from '../../layouts/infoLayout/InfoLayout';

import { setIsLoading } from '../../store/actions/actions';

import Success from '../../components/success/Success';
import routes from '../../constants/routes';

import { NavigationSmashProps } from '../../types/common/commonTypes';

const SuccessView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const onSuccessPress = () => navigation?.navigate(routes.SIGN_IN);
  return (
    <InfoLayout
      title="Let's get started!"
      actionLabel="Done"
      onPress={onSuccessPress}
    >
      <Success navigation={navigation} />
    </InfoLayout>
  );
};

export default SuccessView;
