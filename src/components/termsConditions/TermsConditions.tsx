import * as React from 'react';
import WEB from '../../constants/webviews';
import OnePageWebview from '../onePageWebview/OnePageWebview';

const TermsConditions: React.FunctionComponent = () => {
  return <OnePageWebview url={WEB.TERMS} />;
};

export default TermsConditions;
