import * as React from 'react';
import { useRef, useState } from 'react';
import { Linking, AppState, AppStateStatus } from 'react-native';
import NotificationsView from './NotificationsView';
import messaging from '@react-native-firebase/messaging';
import logger from '../../helpers/logger/logger';
import { NavigationSmashProps } from '../../types/common/commonTypes';
import routes from '../../constants/routes';
import useGetAppState from '../../hooks/useGetAppState';
import { getRoutesHistory } from '../../store/selectors/selectors';
import { useSelector } from 'react-redux';
import useCheckAppStateToNavigate from '../../hooks/useCheckAppStateToNavigate';
import { setIsLoading } from '../../store/actions/actions';
const NotificationsViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const [appStateStatus, setAppSateStatus] = useState<AppStateStatus>('active');
  const appState = useRef(AppState.currentState);
  const routesHistory = useSelector(getRoutesHistory);

  useCheckAppStateToNavigate({
    appState,
    appStateStatus,
    navigation,
    routesHistory,
  });
  //

  const checkingNotificationsAuthState = async (
    nextAppState: AppStateStatus
  ) => {
    setAppSateStatus(() => nextAppState);
  };

  useGetAppState(checkingNotificationsAuthState);

  const notificationEnabler = async () => {
    try {
      const authStatus = await messaging().requestPermission();

      return (
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL
      );
    } catch (error) {
      logger({ obj: error, type: 'error' });
      return false;
    }
  };
  const onAllow = async () => {
    const AuthorizationStatus = await messaging().hasPermission();

    switch (AuthorizationStatus) {
      case messaging.AuthorizationStatus.NOT_DETERMINED: {
        await notificationEnabler();
        setIsLoading(true);
        navigation?.navigate(routes.DASHBOARD);
        break;
      }

      case messaging.AuthorizationStatus.DENIED:
        Linking.openSettings();
        break;

      default:
        navigation?.navigate(routes.DASHBOARD);
        break;
    }
  };
  const onNotNow = () => {
    navigation?.navigate(routes.DASHBOARD);
  };

  return <NotificationsView {...{ onNotNow, onAllow }} />;
};

export default NotificationsViewWrapper;
