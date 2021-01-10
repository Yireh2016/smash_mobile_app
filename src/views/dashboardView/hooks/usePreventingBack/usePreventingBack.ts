import React from 'react';
import routes from '../../../../constants/routes';

const usePreventingBack = (navigation: any) => {
  React.useEffect(() => {
    navigation?.addListener('beforeRemove', (event: any) => {
      if (event.data.action.source?.match(routes.MENU_SETTINGS)) {
        navigation.dispatch(event.data.action);
        return;
      }
      event.preventDefault();
      return;
    });
  }, [navigation]);
};

export default usePreventingBack;
