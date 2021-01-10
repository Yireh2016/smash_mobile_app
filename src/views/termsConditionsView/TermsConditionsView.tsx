import * as React from 'react';

import InfoLayout from '../../layouts/infoLayout/InfoLayout';

import TermsConditions from '../../components/termsConditions/TermsConditions';
import routes from '../../constants/routes';

import { NavigationSmashProps } from '../../types/common/commonTypes';
const SuccessView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const onSuccessPress = () => navigation?.navigate(routes.SIGN_UP);
  return (
    <InfoLayout title="" actionLabel="Done" onPress={onSuccessPress}>
      <TermsConditions />
    </InfoLayout>
  );
};

export default SuccessView;
