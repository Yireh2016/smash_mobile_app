import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';
import CardUsageChart from '../../../src/components/cardUsageChart/CardUsageChart';
import { View } from 'react-native';

const cardUsageFirstHalfMonth = [
  { x: 1, y: 10 },
  { x: 2, y: 30 },
  { x: 3, y: 40 },
  { x: 4, y: 53 },
  { x: 5, y: 70 },
  { x: 6, y: 70 },
  { x: 7, y: 80 },
  { x: 8, y: 85 },
  { x: 9, y: 94 },
  { x: 10, y: 130 },
  { x: 11, y: 210 },
  { x: 12, y: 530 },
  { x: 13, y: 540 },
  { x: 14, y: 553 },
  { x: 15, y: 570 },
];

const cardUsageSecondHalfMonth = [
  { x: 16, y: 570 },
  { x: 17, y: 580 },
  { x: 18, y: 585 },
  { x: 19, y: 694 },
  { x: 20, y: 700 },
  { x: 21, y: 710 },
  { x: 22, y: 730 },
  { x: 23, y: 940 },
  { x: 24, y: 953 },
  { x: 25, y: 970 },
  { x: 26, y: 970 },
  { x: 27, y: 980 },
  { x: 28, y: 985 },
  { x: 29, y: 1000 },
];
export default () =>
  storiesOf('CardUsageChart', module)
    .addDecorator((getStory) => <CenterLayout>{getStory()}</CenterLayout>)
    .add('Card usage over', () => (
      <CardUsageChart
        lastMonthNumberOfDays={30}
        cardUsageData={[
          ...cardUsageFirstHalfMonth,
          ...cardUsageSecondHalfMonth,
          { x: 30, y: 2000 },
        ]}
        lastMonthTotalUsage={1200}
        lastMonthActualUsage={1200}
      />
    ))
    .add('Card usage under', () => (
      <CardUsageChart
        lastMonthNumberOfDays={30}
        cardUsageData={[
          ...cardUsageFirstHalfMonth,
          ...cardUsageSecondHalfMonth,
          { x: 30, y: 1100 },
        ]}
        lastMonthTotalUsage={1200}
        lastMonthActualUsage={1200}
      />
    ))
    .add('Card usage incomplete under', () => (
      <CardUsageChart
        lastMonthNumberOfDays={30}
        cardUsageData={[...cardUsageFirstHalfMonth]}
        lastMonthTotalUsage={1200}
        lastMonthActualUsage={700}
      />
    ))
    .add('Card usage incomplete over', () => (
      <CardUsageChart
        lastMonthNumberOfDays={30}
        cardUsageData={[...cardUsageFirstHalfMonth, { x: 16, y: 800 }]}
        lastMonthTotalUsage={1200}
        lastMonthActualUsage={700}
      />
    ))
    .add('Card usage previuos month 28 days', () => (
      <CardUsageChart
        lastMonthNumberOfDays={28}
        cardUsageData={[
          ...cardUsageFirstHalfMonth,
          ...cardUsageSecondHalfMonth,
          { x: 30, y: 1500 },
        ]}
        lastMonthTotalUsage={1200}
        lastMonthActualUsage={1200}
      />
    ));
