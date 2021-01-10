import analytics from '@segment/analytics-react-native';
import { FINANCIAL_SUPPLIER } from '../../constants/financialSuppliers';
import { EVENTS } from '../../constants/events';
import { User } from '../../store/types/user';

export type triggerEntityLinkFailedType = (
  error: any,
  user: User
) => Promise<void>;
export default (error: any, user: User) =>
  analytics.track(EVENTS.ENTITY_LINK_FAILED, {
    user_id: user.username,
    aggregator: FINANCIAL_SUPPLIER.PLAID,
    failure_source: FINANCIAL_SUPPLIER.PLAID,
    failure_response: `${error}`,
  });
