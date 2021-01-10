import analytics from '@segment/analytics-react-native';
import { User } from '../../store/types/user';

export default (
  event: string,
  user: User,
  inputMoney: string,
  estimatedDays: number,
  payOffDate: string,
  savings: number
) => {
  analytics.track(event, {
    user_id: user.username,
    payment_amount: `${inputMoney}`,
    payment_period: 'monthly',
    pay_off_time: `${estimatedDays}`,
    pay_off_date: payOffDate === '' ? 'Infinity' : `${payOffDate}`,
    yearly_savings: `${savings}`,
  });
};
