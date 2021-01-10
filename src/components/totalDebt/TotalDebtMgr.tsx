import * as React from 'react';
import { useSelector } from 'react-redux';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import { getTotalDebt } from '../../store/selectors/selectors';
import TotalDebt from './TotalDebt';

const TotalDebtMgr: React.FunctionComponent = () => {
  const totalDebt = useSelector(getTotalDebt);

  return <TotalDebt totalDebt={formatMoneyValue(totalDebt, 2)} />;
};

export default TotalDebtMgr;
