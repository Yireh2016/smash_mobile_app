/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import styled from 'styled-components';
import { TextInput } from 'react-native-gesture-handler';
import moment from 'moment';

import useMyTheme from '../../hooks/useMyTheme';

import DashboardHeader from '../dashboardHeader/DashboardHeader';

import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';

import paymentCalculator from '../../helpers/paymentCalculator/paymentCalculator';
import { EVENTS } from '../../constants/events';
import { Card } from '../../types/Card';

export interface CardBalance {
  apr_percentage: number;
  balance_subject_to_apr: number;
}
interface WeeklyPaymentsInterface {
  totalBalances: number;
  setEstDebtPaymentDay: React.Dispatch<React.SetStateAction<S>>;
  setPayOffDate: React.Dispatch<React.SetStateAction<S>>;
  futureDateData: CardBalance[];
  inputMoney: string;
  setInputMoney: React.Dispatch<React.SetStateAction<S>>;
  setEstimatedDays: React.Dispatch<React.SetStateAction<S>>;
  trackPaymentPlanEvents(event: string): void;
  inputTimer: NodeJS.Timeout | undefined;
  setInputTimer: React.Dispatch<React.SetStateAction<S>>;
  setInputChanges: React.Dispatch<React.SetStateAction<S>>;
  inputChanges: number;
  payOffDate: string;
  creditCards: Card[];
  deviceW: number;
}

const getSliderPosFromInputMoney = (
  money: number,
  minValue: number,
  maxValue: number
) => {
  if (minValue) {
    return money && maxValue
      ? 10 * (Math.log(money / minValue) / Math.log(maxValue / minValue))
      : 0;
  }

  return (10 * Math.log(money)) / Math.log(maxValue);
};

const getMoneyFromSliderPosition = (
  position: number,
  minValue: number,
  maxValue: number
) => {
  if (minValue) {
    return minValue * Math.pow(maxValue / minValue, position / 10);
  }

  return position ? Math.pow(maxValue, position / 10) : 0;
};

const WeeklyPayments: React.FunctionComponent<WeeklyPaymentsInterface> = ({
  totalBalances,
  setEstDebtPaymentDay,
  setPayOffDate,
  futureDateData,
  inputMoney,
  setInputMoney,
  setEstimatedDays,
  trackPaymentPlanEvents,
  inputTimer,
  setInputTimer,
  setInputChanges,
  inputChanges,
  payOffDate,
  creditCards,
  deviceW,
}) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [totalMinPayment, setTotalMinPayment] = useState(0);
  const isDeviceSmall = deviceW <= 350;

  useEffect(() => {
    if (creditCards && creditCards.length) {
      let _totalMinPayment = 0;

      for (let index = 0; index < creditCards.length; index++) {
        const card = creditCards[index];
        _totalMinPayment = _totalMinPayment + parseFloat(`${card.min_payment}`);
      }
      setTotalMinPayment(_totalMinPayment);
    }
  }, [creditCards]);
  useEffect(() => {
    if (inputChanges) {
      inputTimer && clearTimeout(inputTimer);
      const timer = setTimeout(() => {
        //launch event
        trackPaymentPlanEvents(EVENTS.PAYMENT_PLAN_BUILDER);
        setInputTimer(undefined);
      }, 3000);
      setInputTimer(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputChanges]);
  useEffect(() => {
    totalBalances &&
      setInputMoney(
        `${getMoneyFromSliderPosition(5, totalMinPayment, totalBalances)}`
      );
  }, [totalBalances, totalMinPayment, setInputMoney]);

  useEffect(() => {
    inputMoney &&
      setSliderPosition(
        getSliderPosFromInputMoney(
          parseInt(inputMoney, 10),
          totalMinPayment,
          totalBalances
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputMoney, totalMinPayment]);
  useEffect(() => {
    const days = paymentCalculator(inputMoney, futureDateData);

    if (days) {
      const today = moment();
      const tomorrow = moment().add(days, 'days');
      setEstimatedDays(days);
      setPayOffDate(days === Infinity ? '-' : tomorrow.format('MMM DD, YYYY'));
      if (days <= 30) {
        setEstDebtPaymentDay(`${Math.ceil(days)} days`);
      } else if (days > 30 && days <= 100) {
        const weeks = tomorrow.diff(today, 'weeks');

        setEstDebtPaymentDay(`${weeks} weeks`);
      } else if (days === Infinity) {
        setEstDebtPaymentDay('-');
      } else {
        const months = tomorrow.diff(today, 'months');

        setEstDebtPaymentDay(`${months} months`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputMoney, futureDateData, setEstDebtPaymentDay, setPayOffDate]);

  const theme = useMyTheme();
  const styles = StyleSheet.create({
    tata: {
      paddingTop: 10,
    },
  });

  const onMoneyInputChange = (value: string | number) => {
    setInputChanges(inputChanges + 1);
    if (typeof value === 'string') {
      value = value.replace('$', '');
    }
    setInputMoney(`${value || 0}`);
  };

  const onInputBlur = () => {
    if (parseFloat(inputMoney) < totalMinPayment) {
      setInputMoney(totalMinPayment);
    } else if (parseFloat(inputMoney) > totalBalances) {
      setInputMoney(totalBalances);
    }
  };
  const onSliderChange = (value: number) => {
    setInputChanges(inputChanges + 1);
    setInputMoney(
      getMoneyFromSliderPosition(value, totalMinPayment, totalBalances)
    );
  };
  const sliderComp = totalBalances ? (
    <Slider
      value={sliderPosition}
      onSlidingComplete={(value) => onSliderChange(value)}
      style={{ width: 200, height: 40 }}
      minimumValue={0}
      maximumValue={10}
      minimumTrackTintColor={theme.palette.secondary}
      maximumTrackTintColor={theme.palette.secondary}
    />
  ) : null;
  return (
    <>
      <View style={styles.tata}>
        <DashboardHeader title="Payment plan" />
      </View>

      <View
        style={{
          flexDirection: isDeviceSmall ? 'column' : 'row',
          paddingTop: 5,
          alignItems: 'center',
        }}
      >
        {isDeviceSmall ? (
          <>
            <View
              style={{
                paddingTop: 20,
                width: '50%',
                alignItems: 'center',
              }}
            >
              {sliderComp}
            </View>

            <View
              style={{
                flex: 1,
                width: '50%',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: theme.palette.primary, paddingTop: 5 }}>
                WEEKLY PAYMENT
              </Text>
              <View
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                  flexDirection: 'row',
                }}
              >
                <StyledWeeklyPaymentInput
                  keyboardType={'numeric'}
                  color={
                    payOffDate?.match('-') ||
                    parseFloat(inputMoney) < totalMinPayment ||
                    parseFloat(inputMoney) > totalBalances
                      ? theme.palette.red
                      : theme.palette.secondary
                  }
                  onBlur={onInputBlur}
                  defaultValue="0"
                  onChangeText={(text) => onMoneyInputChange(text)}
                  value={formatMoneyValue(
                    inputMoney ? parseInt(inputMoney, 10) : 0
                  )}
                />
              </View>
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                flex: 1,
                width: '50%',
              }}
            >
              <Text style={{ color: theme.palette.primary, paddingTop: 5 }}>
                WEEKLY PAYMENT
              </Text>
              <View
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                  flexDirection: 'row',
                }}
              >
                <StyledWeeklyPaymentInput
                  keyboardType={'numeric'}
                  color={
                    payOffDate?.match('-') ||
                    parseFloat(inputMoney) < totalMinPayment ||
                    parseFloat(inputMoney) > totalBalances
                      ? theme.palette.red
                      : theme.palette.secondary
                  }
                  onBlur={onInputBlur}
                  defaultValue="0"
                  onChangeText={(text) => onMoneyInputChange(text)}
                  value={formatMoneyValue(
                    inputMoney ? parseInt(inputMoney, 10) : 0
                  )}
                />
              </View>
            </View>

            <View
              style={{
                paddingTop: 20,
                width: '50%',
                alignItems: 'center',
              }}
            >
              {sliderComp}
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default WeeklyPayments;

const StyledWeeklyPaymentInput = styled(TextInput)`
  color: ${({ color }) => color};
  min-width: 120px;
  padding: 5px 0;
  font-weight: bold;
  font-size: 20px;
  border: ${({ color }) => `2px solid ${color}`};
  border-radius: 12px;
  text-align: center;
`;
