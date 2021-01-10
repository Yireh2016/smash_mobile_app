import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

import DebtPlanCalculator from './DebtPlanCalculator';

import { setPlanOnStore } from '../../store/actions/actions';

import {
  getTotalDebt,
  getCreditCards,
  getFutureData,
  getPlan,
  getUser,
} from '../../store/selectors/selectors';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import {
  getMoneyFromSliderPosition,
  getSliderPosFromInputMoney,
} from '../../helpers/sliderPositionMapper/sliderPositionMapper';
import daysWeeksMonthDateFormatter from '../../helpers/daysWeeksMonthDateFormatter/daysWeeksMonthDateFormatter';
import paymentCalculator from '../../helpers/paymentCalculator/paymentCalculator';
import mappedCards from '../../helpers/mappedCards/mappedCards';

import useGetSavings from '../../hooks/useGetSavings';
import { Card } from '../../types/Card';
import trackPaymentPlanEvents from '../../analytics/trackPaymentPlanEvents/trackPaymentPlanEvents';
import { EVENTS } from '../../constants/events';

const DebtPlanCalculatorMgr: React.FunctionComponent = () => {
  const [sliderControl, setSliderControl] = useState(0);
  const [monthlyInput, setMonthlyInput] = useState('');
  const totalDebt = useSelector(getTotalDebt);
  const [totalMinPayment, setTotalMinPayment] = useState(0);
  const [estimatedPayoffTime, setEstimatedPayoffTime] = useState<string>('-');
  const [estimatedPayoffDate, setEstimatedPayoffDate] = useState<string>('');
  const [estimatedSavings, setEstimatedSavings] = useState(0);
  const [inputTimer, setInputTimer] = useState(0);
  const creditCards = useSelector(getCreditCards);
  const futureDateData = useSelector(getFutureData);
  const [calculatedDays, setCalculatedDays] = useState(0);
  const plan = useSelector(getPlan);
  const user = useSelector(getUser);
  useGetSavings(futureDateData, setEstimatedSavings, 0);

  useEffect(() => {
    const days = paymentCalculator(monthlyInput, futureDateData);

    if (days) {
      setCalculatedDays(days);
      const tomorrow = moment().add(days, 'days');

      const newEstimatedPayoffDate =
        days === Infinity ? '' : tomorrow.format('MMM DD, YYYY');
      setEstimatedPayoffDate(newEstimatedPayoffDate || '-');
      setEstimatedPayoffTime(daysWeeksMonthDateFormatter(days));
      let planCopy = plan;
      if (plan) {
        plan.unsavedPlan = {
          monthly_payment_amount: parseFloat(monthlyInput), // required, monthly_payment_amount >= sum(minimum_payment_amount de todas las tarjetas)
          estimated_payoff_time: days,
          estimated_savings: estimatedSavings,
          estimated_payoff_date: newEstimatedPayoffDate,
          credit_cards: mappedCards(creditCards),
        };
      } else {
        planCopy = {
          savedPlan: null,
          unsavedPlan: {
            monthly_payment_amount: parseFloat(monthlyInput), // required, monthly_payment_amount >= sum(minimum_payment_amount de todas las tarjetas)
            estimated_payoff_time: days,
            estimated_savings: estimatedSavings,
            estimated_payoff_date: newEstimatedPayoffDate,
            credit_cards: mappedCards(creditCards),
          },
        };
      }
      setPlanOnStore(planCopy);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyInput]);

  useEffect(() => {
    if (creditCards && creditCards.length) {
      setTotalMinPayment(
        creditCards
          .map((card: Card) => card.min_payment)
          .reduce(
            (previousPayment, currentPayment) =>
              previousPayment + parseFloat(`${currentPayment}`)
          )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    totalDebt &&
      setMonthlyInput(
        `${getMoneyFromSliderPosition(5, totalMinPayment, totalDebt)}`
      );
  }, [totalDebt, totalMinPayment, setMonthlyInput]);

  useEffect(() => {
    monthlyInput &&
      setSliderControl(
        getSliderPosFromInputMoney(
          parseInt(monthlyInput, 10),
          totalMinPayment,
          totalDebt
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyInput, totalMinPayment]);

  useEffect(() => {
    if (monthlyInput) {
      inputTimer !== 0 && clearTimeout(inputTimer);
      const timer = setTimeout(() => {
        //launch event
        trackPaymentPlanEvents(
          EVENTS.PLAN_AMOUNT_SELECTED,
          user,
          monthlyInput,
          calculatedDays,
          estimatedPayoffDate,
          estimatedSavings
        );
        setInputTimer(0);
      }, 3000);
      setInputTimer(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyInput]);
  const onMonthlyInputChange = (value: number) => {
    setMonthlyInput(
      `${getMoneyFromSliderPosition(value, totalMinPayment, totalDebt)}`
    );
  };

  const debtplanCalcProps = {
    isEditable: true,
    sliderControl: sliderControl,
    monthlyPayment: null,
    monthlyInput,
    onMonthlyInputChange,
    estimatedPayoffTime,
    estimatedSavings: `${formatMoneyValue(estimatedSavings)} /yr`,
    estimatedPayoffDate,
  };
  return <DebtPlanCalculator {...debtplanCalcProps} />;
};

export default DebtPlanCalculatorMgr;
