import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

import theme from '../../theme/theme';
import { P1, H1, H3 } from '../texts/Texts';
import TableRow from '../../components/tableRow/TableRow';
import formatMoneyValue from '../../helpers/formatMoneyValue/formatMoneyValue';
import isEstimatedSavings from '../../helpers/isEstimatedSavings/isEstimatedSavings';

export interface DebtPlanCalculatorProps {
  isEditable: boolean;
  sliderControl: number;
  monthlyPayment: string | null;
  monthlyInput: string;
  onMonthlyInputChange: (arg0: number) => void;
  estimatedPayoffTime: string;
  estimatedSavings: string;
  estimatedPayoffDate: string | number;
}

const styles = StyleSheet.create({
  debtPlanLayout: {
    backgroundColor: theme.palette.primaryLight,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: 10,
    borderRadius: 10,
  },
  sliderContainer: {
    width: '100%',
  },
  sliderStyle: { width: '100%', height: 40 },
  monthlyPaymentLayout: {
    alignItems: 'center',
  },
  estimatedResultsTableContainer: {
    marginTop: 18,
    width: '100%',
  },
  tableRowContainer: {
    marginTop: 14,
  },
});

const DebtPlanCalculator: React.FunctionComponent<DebtPlanCalculatorProps> = ({
  isEditable,
  sliderControl,
  monthlyPayment,
  monthlyInput,
  onMonthlyInputChange,
  estimatedPayoffTime,
  estimatedSavings,
  estimatedPayoffDate,
}) => {
  return (
    <View style={styles.debtPlanLayout}>
      <View style={styles.monthlyPaymentLayout}>
        <View>
          <P1>Monthly payment</P1>
        </View>
        <View testID="monthlyPaymentContainer">
          <H1 color={theme.palette.secondary}>
            {isEditable
              ? formatMoneyValue(parseFloat(monthlyInput))
              : monthlyPayment || ''}
          </H1>
        </View>
        {isEditable && (
          <View style={styles.sliderContainer}>
            <Slider
              testID="Slider"
              value={sliderControl}
              onSlidingComplete={(value) => onMonthlyInputChange(value)}
              style={styles.sliderStyle}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor={theme.palette.secondary}
              maximumTrackTintColor={theme.palette.secondary}
            />
          </View>
        )}
        <View style={styles.estimatedResultsTableContainer}>
          <View style={styles.tableRowContainer}>
            <TableRow
              columns={[
                {
                  component: <P1>Est. pay off time</P1>,
                  align: 'left',
                },
                {
                  component: <H3>{estimatedPayoffTime}</H3>,
                  align: 'right',
                },
              ]}
            />
          </View>
          {isEstimatedSavings(estimatedSavings) && (
            <View style={styles.tableRowContainer}>
              <TableRow
                columns={[
                  {
                    component: <P1>Est. savings</P1>,
                    align: 'left',
                  },
                  {
                    component: <H3>{estimatedSavings}</H3>,
                    align: 'right',
                  },
                ]}
              />
            </View>
          )}
          <View style={styles.tableRowContainer}>
            <TableRow
              columns={[
                {
                  component: <P1>Est. pay off date</P1>,
                  align: 'left',
                },
                {
                  component: <H3>{estimatedPayoffDate}</H3>,
                  align: 'right',
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DebtPlanCalculator;
