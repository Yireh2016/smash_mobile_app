import logger from './src/helpers/logger/logger';

if (__DEV__) {
  import('./src/ReactotronConfig').then(
    () =>
      process.env.NODE_ENV === 'development' &&
      logger({
        str:
          'Reactotron Configured, remember to apply  adb reverse tcp:9090 tcp:9090 if using andriod emulator',
      })
  );
}

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
