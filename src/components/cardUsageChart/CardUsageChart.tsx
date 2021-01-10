/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import theme from '../../theme/theme';
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryScatter,
  VictoryLabel,
} from 'victory-native';
import { View } from 'react-native';
import { H2, P1, P2 } from '../texts/Texts';
import moment from 'moment';

interface CardUsageChartProps {
  cardUsageData: { x: number; y: number }[];
  lastMonthTotalUsage: number;
  lastMonthActualUsage: number;
  lastMonthNumberOfDays: number;
}

const CardUsageChart: React.FunctionComponent<CardUsageChartProps> = ({
  cardUsageData,
  lastMonthTotalUsage,
  lastMonthActualUsage,
  lastMonthNumberOfDays,
}) => {
  const { x, y } = cardUsageData.slice(-1)[0];
  const lastCardUsageDay = x;
  const lastCardUsageAmount = y;
  const CHART_DOMAIN_X = [-2, 32];
  const CHART_DOMAIN_Y = [
    0,
    Math.max(lastMonthTotalUsage, lastCardUsageAmount),
  ];
  const LAST_MONTH_DATA = [
    { x: 0, y: 0 },
    { x: lastMonthNumberOfDays, y: lastMonthTotalUsage },
  ];
  const LAST_MONTH_DOMAIN = { x: [0, 31] };

  return (
    <View
      style={{
        backgroundColor: theme.background.secondary,
        paddingVertical: 12,
        borderRadius: 10,
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <H2 color={theme.palette.secondary}>{`$${lastCardUsageAmount}`}</H2>
        <P1>{`Last month $${lastMonthActualUsage}`}</P1>
      </View>
      <VictoryChart
        domain={{
          x: CHART_DOMAIN_X,
          y: CHART_DOMAIN_Y,
        }}
      >
        <VictoryAxis
          dependentAxis={true}
          style={{
            grid: { stroke: '#323F49' },
            axis: {
              display: 'none',
            },
            tickLabels: {
              display: 'none',
            },
          }}
        />
        <VictoryAxis
          dependentAxis={false}
          style={{
            axis: {
              display: 'none',
            },
            tickLabels: {
              display: 'none',
            },
          }}
        />
        <VictoryLine
          style={{
            data: { stroke: '#6A7278', strokeDasharray: 12 },
          }}
          data={LAST_MONTH_DATA}
          domain={LAST_MONTH_DOMAIN}
          interpolation="natural"
        />
        <VictoryLine
          style={{
            data: { stroke: theme.palette.secondary },
          }}
          data={cardUsageData}
          interpolation="bundle"
        />
        <VictoryScatter
          data={[{ x: lastCardUsageDay, y: lastCardUsageAmount }]}
          labels={[
            `${
              lastCardUsageAmount > lastMonthActualUsage
                ? `${lastCardUsageAmount - lastMonthActualUsage}$ over`
                : `${lastMonthActualUsage - lastCardUsageAmount}$ under`
            }`,
          ]}
          labelComponent={<VictoryLabel angle={0} textAnchor="end" />}
          style={{
            data: {
              fill: theme.palette.secondary,
              width: 5,
              height: 5,
            },
            labels: { fill: theme.palette.secondary },
          }}
        />
      </VictoryChart>
      <View style={{ alignItems: 'center' }}>
        <P2 isBold={true}>{moment().format('MMMM YYYY')}</P2>
      </View>
    </View>
  );
};

export default CardUsageChart;
