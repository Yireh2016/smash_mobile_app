import { AppState, AppStateStatus } from 'react-native';
import { useEffect } from 'react';
import logger from '../helpers/logger/logger';

const _handleAppStateChange = (
  nextAppState: AppStateStatus,
  onAppStateChange: (nextAppState: AppStateStatus) => Promise<void>
) => {
  if (nextAppState.match(/inactive|background/) && nextAppState === 'active') {
    logger({ str: 'App has come to the foreground!' });
  }

  logger({ str: 'AppState', obj: nextAppState });
  onAppStateChange(nextAppState);
};
export default (
  onAppStateChange: (nextAppState: AppStateStatus) => Promise<void>
) => {
  useEffect(() => {
    AppState.addEventListener('change', (nextState) =>
      _handleAppStateChange(nextState, onAppStateChange)
    );

    return () => {
      AppState.removeEventListener('change', (nextState) =>
        _handleAppStateChange(nextState, onAppStateChange)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
