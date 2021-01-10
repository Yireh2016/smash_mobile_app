import { NavigationState } from '@react-navigation/native';
import { useEffect } from 'react';
import { setRoutesHistory } from '../store/actions/actions';

export default (routesHistory: string[], navigationState: NavigationState) => {
  useEffect(() => {
    const arr = [...routesHistory];
    arr.push(`${navigationState.routes.slice(-1)[0].name}`);
    setRoutesHistory(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigationState]);
};
