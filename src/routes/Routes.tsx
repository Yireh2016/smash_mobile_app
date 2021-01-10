/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import theme from '../theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import routes from '../constants/routes';
import { GlobalAppConfig } from '../store/types/globalAppConfig';
import { setGlobalAppConfig } from '../store/actions/actions';
import { DEEP_LINK } from '../constants/endpoints';
import viewsArr from '../constants/views';
import options from '../helpers/screenOptionsCreator';
import branchInit from '../branch/branch';
import CreditCardStepWrapper from '../views/signUp/creditCardStep/CreditCardStepWrapper';
import SecurityStepWrapper from '../views/signUp/securityStep/SecurityStepWrapper';
import WalletStepWrapper from '../views/signUp/walletStep/WalletStepWrapper';
import SavingStepWrapper from '../views/signUp/savingStep/SavingStepWrapper';
import defaultNav from '../navigators/headerNav/defaultNav';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: theme.palette.navigation,
    text: theme.palette.white,
  },
};

interface RoutesInterface {
  globalAppConfig: GlobalAppConfig | null;
}

const Routes: React.FunctionComponent<RoutesInterface> = ({
  globalAppConfig,
}) => {
  const navigationRef = React.useRef(null);
  const [isBranchInit, setisBranchInit] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (navigationRef.current && !isBranchInit) {
      branchInit(navigationRef);
      setisBranchInit(true);
    }
  }, [navigationRef.current, isBranchInit]);

  setGlobalAppConfig(globalAppConfig);

  const screensArr = [
    { view: routes.HOME, headerShown: false },
    { view: routes.LINKED_ACCOUNTS, headerShown: true, type: 'addEntity' },
    { view: routes.CARDS_DETAIL, headerShown: true, type: 'addEntity' },
    {
      view: routes.MENU_SETTINGS,
      headerShown: true,
    },
    { view: routes.DASHBOARD, headerShown: true, type: 'dashboard' },
    { view: routes.RECOVER_PASSWD, headerShown: true },
    { view: routes.TERMS_CONDITIONS, headerShown: true },
    { view: routes.SECURITY, headerShown: true },
    { view: routes.SUCCESS, headerShown: true },
    { view: routes.SIGN_UP, headerShown: true },
    { view: routes.SIGN_IN, headerShown: true },
    { view: routes.PRIVACY, headerShown: true },
    { view: routes.FORGOT, headerShown: true },
    {
      view: routes.ADD_CARDS_MODAL,
      headerShown: false,
    },
    { view: routes.CONFIRM, headerShown: true },
    { view: routes.DISCLAIMER, headerShown: true },
    { view: routes.PLAN_SETTINGS, headerShown: true },
    { view: routes.PLAN_APPROACH, headerShown: true },
    { view: routes.PLAN_APPROACH_READONLY, headerShown: true },
    { view: routes.PLAN_REVIEW, headerShown: true },
    { view: routes.PLAN_REVIEW_READONLY, headerShown: true },
    { view: routes.ONBOARD_CONGRATS, headerShown: false },
    { view: routes.ONBOARD_ADD_CARDS, headerShown: true, type: 'skip' },
    { view: routes.ONBOARD_ADD_ACCOUNTS, headerShown: true, type: 'skip' },
    { view: routes.ONBOARD_PLAN_SETTINGS, headerShown: true, type: 'skip' },
    { view: routes.ONBOARD_PLAN_APPROACH, headerShown: true, type: 'skip' },
    { view: routes.ONBOARD_REVIEW_PLAN, headerShown: true },
    { view: routes.ONBOARD_PLAN_SUCCESS, headerShown: true, type: 'titleOnly' },
    { view: routes.NOTIFICATIONS, headerShown: false },
    { view: routes.PLAN_SUCCESS, headerShown: true, type: 'titleOnly' },
    { view: routes.SAFE_CONNECT, headerShown: false },
  ];

  const screensMaps = screensArr.map((viewObj, i) => (
    <Stack.Screen
      key={i}
      options={({ navigation }) => options(viewObj, navigation, insets)}
      name={viewObj.view}
      component={viewsArr[i]}
    />
  ));

  const linking = {
    prefixes: [DEEP_LINK.uri],
    config: {
      screens: {
        SignIn: 'signin',
      },
    },
  };
  const Tab = createMaterialTopTabNavigator();

  const SignUpCarousel = () => (
    <Tab.Navigator tabBar={() => null}>
      <Tab.Screen
        name={routes.CAROUSEL_CARD}
        component={CreditCardStepWrapper}
      />
      <Tab.Screen
        name={routes.CAROUSEL_SECURITY}
        component={SecurityStepWrapper}
      />
      <Tab.Screen name={routes.CAROUSEL_WALLET} component={WalletStepWrapper} />
      <Tab.Screen name={routes.CAROUSEL_SAVE} component={SavingStepWrapper} />
    </Tab.Navigator>
  );

  const MainNavigator = () => (
    <Stack.Navigator mode="modal" initialRouteName={routes.HOME}>
      {screensMaps}
      <Stack.Screen
        name={routes.SIGN_UP_CAROUSEL}
        component={SignUpCarousel}
        options={({ navigation }) =>
          defaultNav(
            {
              view: routes.SIGN_UP_CAROUSEL,
              headerShown: false,
            },
            navigation,
            insets
          )
        }
      />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer ref={navigationRef} linking={linking} theme={MyTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Routes;
