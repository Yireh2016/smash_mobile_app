import { EVENTS } from '../../constants/events';
import routes from '../../constants/routes';
import analytics from '@segment/analytics-react-native';
import { User } from '../../store/types/user';

export default (navigationStateRoutes: any, user: User) => {
  const lastRoute =
    navigationStateRoutes[navigationStateRoutes.length - 1].name;
  let location = '';

  switch (lastRoute) {
    case routes.DASHBOARD:
      location = 'dashboard';
      break;

    case routes.LINKED_ACCOUNTS:
      location = 'settings';
      break;

    case routes.CARD_BALANCES:
      location = 'card list';
      break;

    case routes.SIGN_IN:
    case routes.SIGN_UP:
      location = 'on boarding';
      break;

    default:
      break;
  }

  analytics.track(EVENTS.ENTITY_LINK_STARTED, {
    user_id: user.username,
    aggregator: 'Plaid',
    location,
  });
};
