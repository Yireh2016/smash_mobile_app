import * as React from 'react';
import { Bar } from 'react-native-progress';
import { Dimensions } from 'react-native';
import theme from '../../theme/theme';

interface StepsProgressBarProps {
  progress: number;
}

const StepsProgressBar: React.FunctionComponent<StepsProgressBarProps> = ({
  progress,
}) => {
  const { width } = Dimensions.get('screen');
  return (
    <Bar
      progress={progress / 100}
      color={theme.palette.secondary}
      width={width - 30}
    />
  );
};

export default StepsProgressBar;
