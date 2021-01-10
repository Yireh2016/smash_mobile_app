import { useEffect } from 'react';
import { AppStateStatic, AppStateStatus } from 'react-native';

const useAppStateUpdate = (
  AppState: AppStateStatic,
  appState: React.MutableRefObject<AppStateStatus>,
  setappStateVisible: React.Dispatch<React.SetStateAction<AppStateStatus>>
) => {
  useEffect(() => {
    const handleAppStateChange = async (nextAppState: AppStateStatus) => {
      appState.current = nextAppState;
      setappStateVisible(appState.current);
    };
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAppStateUpdate;
