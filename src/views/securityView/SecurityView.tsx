import * as React from 'react';
import InfoLayout from '../../layouts/infoLayout/InfoLayout';
import Security from '../../components/security/Security';
import { NavigationSmashProps } from '../../types/common/commonTypes';

const SecurityView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const onSuccessPress = () => navigation?.goBack();
  return (
    <InfoLayout actionLabel="Done" title="" onPress={onSuccessPress}>
      <Security />
    </InfoLayout>
  );
};

export default SecurityView;
