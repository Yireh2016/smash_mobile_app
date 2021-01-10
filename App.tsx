import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import analytics, { JsonMap } from '@segment/analytics-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Config from 'react-native-config';
import StorybookApp from './storybook/';
import store from './src/store/store';
import Routes from './src/routes/Routes';
import FullLoaderLayout from './src/layouts/loaders/fullLoaderLayout/fullLoaderLayout';
import ModalLayout from './src/layouts/modalLayout/ModalLayout';
import { GlobalAppConfig } from './src/store/types/globalAppConfig';
import { CONFIG_URL } from './src/constants/globalAppConfigUrl';
import setAmplifyConfig from './src/helpers/setAmplifyConfig/setAmplifyConfig';
import getGlobalAppConfig from './src/interfaces/getGlobalAppConfig/getGlobalAppConfig';
import logger from './src/helpers/logger/logger';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';

const environment: string = Config.SMASH_ENV;

async function updatePushToken(token: string) {
  analytics.middleware((payload) => {
    const { next, context } = payload;
    const device = context.device as JsonMap;
    const type = Platform.OS;
    context.device = { ...{ token, type }, ...device };
    next(context);
  });
}

const App: React.FC = () => {
  const [
    globalAppConfig,
    setGlobalAppConfig,
  ] = useState<GlobalAppConfig | null>(null);

  useEffect(() => {
    const getGlobalAppConfigController = async () => {
      let configURL;
      switch (environment) {
        case 'dev':
          configURL = CONFIG_URL.DEV;
          break;
        case 'qa':
          configURL = CONFIG_URL.QA;
          break;
        case 'prod':
          configURL = CONFIG_URL.PROD;
          break;
        default:
          configURL = CONFIG_URL.DEV;
          break;
      }

      try {
        const { data }: any = await getGlobalAppConfig(configURL);
        setGlobalAppConfig(data);
      } catch (error) {
        logger({ obj: error });
      }
    };

    getGlobalAppConfigController();
  }, []);

  useEffect(() => {
    const configSegment = async () => {
      if (globalAppConfig && globalAppConfig.data) {
        try {
          await analytics.setup(globalAppConfig.data.segment_write_key, {
            // Record screen views automatically!
            recordScreenViews: false,
            // Record certain application events automatically!
            trackAppLifecycleEvents: true,
          });
        } catch (error) {
          logger({ obj: error });
        }
      }
    };

    configSegment();
  }, [globalAppConfig]);

  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then((token) => {
        return updatePushToken(token);
      });

    // Listen to whether the token changes
    return messaging().onTokenRefresh((token) => {
      updatePushToken(token);
    });
  }, []);

  globalAppConfig && globalAppConfig.data && setAmplifyConfig(globalAppConfig);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ModalLayout>
          <FullLoaderLayout>
            <Routes globalAppConfig={globalAppConfig} />
          </FullLoaderLayout>
        </ModalLayout>
      </SafeAreaProvider>
    </Provider>
  );
};

const STORYBOOK_START = false;
export default STORYBOOK_START ? StorybookApp : App;
