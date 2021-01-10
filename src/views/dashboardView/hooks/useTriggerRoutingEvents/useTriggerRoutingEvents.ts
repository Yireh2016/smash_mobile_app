import analytics from '@segment/analytics-react-native';
import { useEffect } from 'react';
import { User } from '../../../../store/types/user';
import { Card } from '../../../../types/Card';
import { EVENTS } from '../../../../constants/events';
import routes from '../../../../constants/routes';

const useTriggerRoutingEvents = (
  routesHistory: string[],
  user: User,
  isAuthenticated: boolean,
  creditCards: Card[],
  totalDebt: number,
  utilizacion: string
) => {
  useEffect(() => {
    if (routesHistory.length > 0 && isAuthenticated) {
      const lastRoute = routesHistory.slice(-1)[0];
      const eventData = {
        user_id: user.username,
        number_cards_linked: creditCards ? creditCards.length : 0,
        total_balance: totalDebt,
        credit_utilization: utilizacion,
      };
      lastRoute === routes.DASHBOARD &&
        analytics.track(EVENTS.DASHBOARD_ACCESSED, eventData);

      lastRoute === routes.CARD_BALANCES &&
        analytics.track(EVENTS.WALLET_MONITOR_ACCESSED, eventData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routesHistory.length]);
};

export default useTriggerRoutingEvents;
