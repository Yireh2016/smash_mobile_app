import accounting from 'accounting-js';

const formatMoneyValue = (money: number, precision = 0): string => {
  let newMoney = money;

  if (newMoney < 0) {
    return `${0}`;
  }

  newMoney = accounting.formatMoney(newMoney, {
    symbol: '$',
    format: '%s%v',
    thousand: ',',
    precision,
  });
  return `${newMoney}`;
};

export default formatMoneyValue;
