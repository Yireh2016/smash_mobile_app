/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { P1, P2, SmashLink } from '../texts/Texts';
import routes from '../../constants/routes';
import { NavigationSmashProps } from '../../types/common/commonTypes';

const Success: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => (
  <>
    <P1 style={{ marginTop: 21 }}>
      Your account is ready. Please check your email and click on the link to
      activate your account.
    </P1>
    <P1 style={{ marginTop: 30 }}>
      Let’s get started by linking your credit cards to Smash.
    </P1>
    <P1 style={{ marginTop: 30 }}>
      We keep your data safe and private. We have the same level of security
      banks do.
    </P1>
    <P2 style={{ marginTop: 30 }}>
      Learn more about{' '}
      <SmashLink onPress={() => navigation?.navigate(routes.SECURITY)}>
        Security
      </SmashLink>{' '}
      at Smash
    </P2>
  </>
);

export default Success;
