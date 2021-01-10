import { useEffect } from 'react';
import routes from '../constants/routes';
import { GlobalAppConfig } from '../store/types/globalAppConfig';

const authRouteChecking = (isUserAuthenticated: boolean, navigation: any) => {
  if (isUserAuthenticated) {
    return;
  }
  navigation?.navigate(routes.HOME);
};

const noAuthenticationNeededRoutes = [
  routes.HOME,
  routes.DISCLAIMER,
  routes.FORGOT,
  routes.CONFIRM,
  routes.PRIVACY,
  routes.RECOVER_PASSWD,
  routes.SECURITY,
  routes.SIGN_IN,
  routes.SIGN_UP,
  routes.TERMS_CONDITIONS,
  routes.SUCCESS,
  routes.CAROUSEL_CARD,
];
const noAuthNeededRoutes = new RegExp(noAuthenticationNeededRoutes.join('|'));

export default (
  isUserAuthenticated: boolean,
  navigation: any,
  routesHistory: string[],
  globalAppConfig: GlobalAppConfig
) => {
  useEffect(() => {
    if (globalAppConfig) {
      if (
        routesHistory.length &&
        routesHistory.slice(-1)[0]?.match(noAuthNeededRoutes)
      ) {
        return;
      }
      authRouteChecking(isUserAuthenticated, navigation);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routesHistory.length]);
};
