import * as React from 'react';

import InfoLayout from '../../layouts/infoLayout/InfoLayout';

import PrivacyPolicy from '../../components/privacyPolicy/PrivacyPolicy';
import routes from '../../constants/routes';

const PrivacyView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const onSuccessPress = () => navigation?.navigate(routes.SIGN_UP);
  return (
    <InfoLayout actionLabel="Done" title="" onPress={onSuccessPress}>
      <PrivacyPolicy />
    </InfoLayout>
  );
};

export default PrivacyView;
