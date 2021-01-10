import moment from 'moment';

export default (plan: any) => {
  const {
    weekly_payment,
    estimated_savings,
    created_at,
    estimated_days,
  } = plan;
  const mappedCards = plan.cards.map((card: any) => {
    const {
      bank,
      number,
      minimum_payment_amount,
      next_payment_due_date,
      payment_amount,
    } = card;
    return {
      bank_name: bank,
      mask: number,
      minimum_payment_amount,
      next_payment_due_date: next_payment_due_date.split('T')[0],
      payment_amount,
    };
  });

  let estimatedPayoffTime;
  const days = estimated_days;
  const today = moment(created_at);
  const tomorrow = moment().add(days, 'days');
  const estimatedPayoffDate =
    days === Infinity ? '-' : tomorrow.format('MMM DD, YYYY');
  if (days <= 30) {
    estimatedPayoffTime = `${Math.ceil(days)} days`;
  } else if (days > 30 && days <= 100) {
    const weeks = tomorrow.diff(today, 'weeks');

    estimatedPayoffTime = `${weeks} weeks`;
  } else if (days === Infinity) {
    estimatedPayoffTime = '-';
  } else {
    const months = tomorrow.diff(today, 'months');

    estimatedPayoffTime = `${months} months`;
  }

  return {
    monthlyInput: weekly_payment,
    estimatedPayoffTime,
    estimatedSavings: estimated_savings,
    estimatedPayoffDate,
    cards: mappedCards,
  };
};
