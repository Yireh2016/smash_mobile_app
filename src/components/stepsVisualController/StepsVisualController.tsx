/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import theme from '../../theme/theme';
import { View } from 'react-native';

interface StepsVisualControlComponent {
  stepIndex: number;
  stepsQuantity: number;
}

const StepsVisualControl: React.FunctionComponent<StepsVisualControlComponent> = ({
  stepIndex,
  stepsQuantity,
}) => {
  const stepsControl = [];
  for (let index = 0; index < stepsQuantity; index++) {
    stepsControl.push(
      <View
        key={index}
        style={{
          width: 8,
          height: 8,
          borderRadius: 8,
          backgroundColor:
            index === stepIndex ? theme.palette.secondary : theme.palette.gray,
        }}
      />
    );
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          height: 10,
          width: 74,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15,
        }}
      >
        {stepsControl}
      </View>
    </View>
  );
};

export default StepsVisualControl;
