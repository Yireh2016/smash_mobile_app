import * as React from 'react';
import { useSelector } from 'react-redux';
import { GlobalAppConfig } from '../../store/types/globalAppConfig';

import { getGlobalAppConfig } from '../../store/selectors/selectors';

import OnePageWebview from '../onePageWebview/OnePageWebview';

const Security: React.FunctionComponent = () => {
  const globalAppConfig: GlobalAppConfig = useSelector(getGlobalAppConfig);

  return (
    <>
      {globalAppConfig && globalAppConfig.data ? (
        <OnePageWebview url={`${globalAppConfig.data.security_page_url}`} />
      ) : null}
    </>
  );
};

export default Security;
