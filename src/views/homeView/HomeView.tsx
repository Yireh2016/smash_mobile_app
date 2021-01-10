/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useRef, useState } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  AppState,
  AppStateStatus,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigationState } from '@react-navigation/native';
import AvocadoSmash from '../../assets/Avocado';
import theme from '../../theme/theme';
import CenterLayout from '../../layouts/centerLayout/CenterLayout';
import SmashButton from '../../components/smashButton/SmashButton';
import routes from '../../constants/routes';
import {
  getGlobalAppConfig,
  getIsUserAuthenticated,
  getRoutesHistory,
  getStatusBar,
} from '../../store/selectors/selectors';

import useAuthRouteValidation from '../../hooks/useAuthRouteValidation';
import useCreateRouteHistory from '../../hooks/useCreateRouteHistory';
import useGetIsAuthenticated from '../../hooks/useGetIsAuthenticated';
import { NavigationSmashProps } from '../../types/common/commonTypes';
import useGetIsHomeBtnController from '../../hooks/useGetIsHomeBtnController';
import { GlobalAppConfig } from '../../store/types/globalAppConfig';
import useGetAndSavePlaidLinkToken from './hooks/useGetAndSavePlaidLinkToken/useGetAndSavePlaidLinkToken';
import useAppStateUpdate from './hooks/useGetAndSavePlaidLinkToken/useAppStateUpdate/useAppStateUpdate';

const HomeView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const globalAppConfig: GlobalAppConfig = useSelector(getGlobalAppConfig);
  const routesHistory = useSelector(getRoutesHistory);
  const isUserAuthenticated = useSelector(getIsUserAuthenticated);
  const navigationState = useNavigationState((state) => state);
  const statusBar = useSelector(getStatusBar);
  const [isHomeBtnController, setisHomeBtnController] = useState(false);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setappStateVisible] = useState<AppStateStatus>(
    appState.current
  );

  useAppStateUpdate(AppState, appState, setappStateVisible);
  useGetAndSavePlaidLinkToken(appStateVisible, isUserAuthenticated);
  useAuthRouteValidation(
    isUserAuthenticated,
    navigation,
    routesHistory,
    globalAppConfig
  );
  useCreateRouteHistory(routesHistory, navigationState);
  useGetIsAuthenticated(globalAppConfig, navigation);
  useGetIsHomeBtnController(isUserAuthenticated, setisHomeBtnController);

  const styles = StyleSheet.create({
    homeContainer: {
      position: 'absolute',
      bottom: 15,
      width: '90%',
      paddingBottom: insets.bottom,
    },
  });
  return (
    <>
      <StatusBar
        backgroundColor={statusBar.background}
        barStyle={statusBar.style}
        translucent
      />

      <CenterLayout color={theme.palette.primary}>
        <AvocadoSmash />
        <View style={styles.homeContainer}>
          {isHomeBtnController && (
            <>
              <SmashButton
                label="Get started!"
                onPress={() => {
                  navigation?.navigate(routes.SIGN_UP_CAROUSEL);
                }}
                type="secondary"
              />
              <View style={{ marginTop: 15 }}>
                <SmashButton
                  label="Sign In"
                  onPress={() => {
                    navigation?.navigate(routes.SIGN_IN);
                  }}
                />
              </View>
            </>
          )}
        </View>
      </CenterLayout>
    </>
  );
};

export default HomeView;
