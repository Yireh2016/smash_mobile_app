import * as React from 'react';

import InfoLayout from '../../layouts/infoLayout/InfoLayout';

import routes from '../../constants/routes';
import BetaDisclaimer from '../../components/betaDisclaimer/BetaDisclaimer';
import { NavigationSmashProps } from '../../types/common/commonTypes';

const BetaDisclaimerView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const onSuccessPress = () => navigation?.navigate(routes.SIGN_UP);
  return (
    <InfoLayout
      title="Disclaimer of liability and warranties"
      actionLabel="Done"
      onPress={onSuccessPress}
    >
      <BetaDisclaimer />
    </InfoLayout>
  );
};

export default BetaDisclaimerView;
