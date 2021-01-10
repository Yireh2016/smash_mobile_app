import moment from 'moment';

export default (days = -1) => {
  if (days < 0) {
    return '';
  }
  const today = moment();
  const tomorrow = moment().add(days, 'days');

  if (days <= 60) {
    return `${Math.ceil(days)} days`;
  } else if (days > 60 && days <= 360) {
    const weeks = tomorrow.diff(today, 'weeks');
    return `${weeks} weeks`;
  } else if (days === Infinity) {
    return '-';
  } else {
    const months = tomorrow.diff(today, 'months');
    return `${months} months`;
  }
};
