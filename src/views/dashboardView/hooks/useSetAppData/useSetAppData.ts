import { useEffect } from 'react';
import routes from '../../../../constants/routes';

export default (
  routesHistory: string[],
  setUpdateData: React.Dispatch<React.SetStateAction<number>>,
  updateData: number
) => {
  useEffect(() => {
    if (
      (routesHistory.length > 1 &&
        routesHistory.slice(-2)[0]?.match(routes.SAFE_CONNECT) &&
        routesHistory.slice(-1)[0]?.match(routes.DASHBOARD)) ||
      (routesHistory.length > 1 &&
        routesHistory.slice(-2)[0]?.match(routes.PLAN_SUCCESS) &&
        routesHistory.slice(-1)[0]?.match(routes.DASHBOARD)) ||
      (routesHistory.length > 1 &&
        routesHistory.slice(-2)[0]?.match(routes.CARD_BALANCES) &&
        routesHistory.slice(-1)[0]?.match(routes.DASHBOARD)) ||
      (routesHistory.length > 1 &&
        routesHistory.slice(-2)[0]?.match(routes.LINKED_ACCOUNTS) &&
        routesHistory.slice(-1)[0]?.match(routes.DASHBOARD)) ||
      (routesHistory.length > 2 &&
        routesHistory.slice(-3)[0]?.match(routes.LINKED_ACCOUNTS) &&
        routesHistory.slice(-2)[0]?.match(routes.MENU_SETTINGS) &&
        routesHistory.slice(-1)[0]?.match(routes.DASHBOARD))
    ) {
      setUpdateData(updateData + 1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routesHistory.length]);
};
