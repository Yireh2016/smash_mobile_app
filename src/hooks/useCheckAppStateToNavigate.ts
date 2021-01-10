import { NavigationProp } from '@react-navigation/native';
import { MutableRefObject, useEffect } from 'react';
import { AppStateStatus } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import routes from '../constants/routes';

/**
 * useCheckAppStateToNavigate
 * inputs:
 *  - appState Ref
 *  - appStateStatus
 *  - navigation
 *  - routesHistory
 * do:
 * This hook navigate to the Dashboard View when the app comes to foreground and the notification
 * permission is enable while the app is in the Notifications View
 */

interface useCheckAppStateToNavigateInterface {
  appState: MutableRefObject<string>;
  appStateStatus: AppStateStatus;
  navigation:
    | NavigationProp<
        Record<string, object | undefined>,
        string,
        Readonly<{
          key: string;
          index: number;
          routeNames: string[];
          history?: unknown[] | undefined;
          routes: NavigationRoute<Record<string, object | undefined>, string>[];
          type: string;
          stale: false;
        }>,
        {},
        {}
      >
    | undefined;
  routesHistory: string[];
}
const useCheckAppStateToNavigate: (
  arg0: useCheckAppStateToNavigateInterface
) => void = ({ appState, appStateStatus, navigation, routesHistory }) => {
  useEffect(() => {
    const checkAppstatus = async () => {
      appState.current = appStateStatus;
      if (appStateStatus.match(/inactive|background/)) {
        return;
      }
      //do if app is active
      const AuthorizationStatus = await messaging().hasPermission();
      const isLastRouteNotifications = routesHistory
        .slice(-1)[0]
        ?.match(routes.NOTIFICATIONS);

      if (AuthorizationStatus > 0 && isLastRouteNotifications) {
        navigation?.navigate(routes.DASHBOARD);
        return;
      }
    };
    checkAppstatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appStateStatus]);
};

export default useCheckAppStateToNavigate;
