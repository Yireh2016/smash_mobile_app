import React from 'react';

import { storiesOf } from '@storybook/react-native';

import InfoLayout from '../../../src/layouts/infoLayout/InfoLayout';
import Security from '../../../src/components/security/Security';
import PrivacyPolicy from '../../../src/components/privacyPolicy/PrivacyPolicy';
import Success from '../../../src/components/success/Success';
import TermsConditions from '../../../src/components/termsConditions/TermsConditions';

export default () =>
  storiesOf('InfoLayout', module)
    .add('Security', () => {
      return (
        <InfoLayout title="Security" actionLabel="Done">
          <Security />
        </InfoLayout>
      );
    })
    .add('Success', () => (
      <InfoLayout title="Success" actionLabel="Let's get started">
        <Success />
      </InfoLayout>
    ))
    .add('PrivacyPolicy', () => (
      <InfoLayout title="Privacy policy" actionLabel="Done">
        <PrivacyPolicy />
      </InfoLayout>
    ))
    .add('TermsConditions', () => (
      <InfoLayout>
        <TermsConditions />
      </InfoLayout>
    ));
