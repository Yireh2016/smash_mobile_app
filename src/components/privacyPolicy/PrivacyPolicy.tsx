import * as React from 'react';

import WEB from '../../constants/webviews';
import OnePageWebview from '../onePageWebview/OnePageWebview';

const PrivacyPolicy: React.FunctionComponent = () => (
  <OnePageWebview url={WEB.PRIVACY_POLICY} />
);

export default PrivacyPolicy;
