import { useEffect } from 'react';
import { GlobalAppConfig } from '../store/types/globalAppConfig';
import { Auth } from 'aws-amplify';

import login from '../helpers/login/login';
import { setIsUserAuthenticated } from '../store/actions/actions';

export default (globalAppConfig: GlobalAppConfig, navigation: any) => {
  useEffect(() => {
    const checkUserAuthentication = async (_navigation: any) => {
      try {
        const user = await Auth.currentUserInfo();
        if (user) {
          await login(user, _navigation);
          return;
        }
        setIsUserAuthenticated(false);
      } catch (error) {
        setIsUserAuthenticated(false);
      }
    };
    globalAppConfig && checkUserAuthentication(navigation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalAppConfig]);
};
