import { useEffect } from 'react';

import { CardBalance } from '../components/weeklyPayments/WeeklyPayments';

export default (
  futureDateData: CardBalance[],
  setSavings: React.Dispatch<React.SetStateAction<S>>,
  updateData: number
) => {
  useEffect(() => {
    const mySavings =
      futureDateData && futureDateData.length > 0
        ? futureDateData.reduce((previous, value) => {
            const { apr_percentage, balance_subject_to_apr } = value;
            return previous + (apr_percentage * balance_subject_to_apr) / 100;
          }, 0)
        : 0;
    setSavings(mySavings);
  }, [futureDateData, setSavings, updateData]);
};
