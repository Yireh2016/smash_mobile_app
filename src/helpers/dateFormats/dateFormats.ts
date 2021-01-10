import moment from 'moment';

export default (date: string | Date, format = 'MM/DD') => {
  return moment(date).format(format);
};
