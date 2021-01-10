/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import theme from '../../../theme/theme';
import InfoGeneralLayout from '../../../layouts/infoGeneralLayout/InfoGeneralLayout';
import { View } from 'react-native';
import { P1, H2 } from '../../../components/texts/Texts';
import StepsVisualControl from '../../../components/stepsVisualController/StepsVisualController';

interface SignUpLayoutProps {
  stepIndex: number;
  icon: Element;
  text: string;
  title: string;
  onSignUp: () => void;
}

const SignUpLayout: React.FunctionComponent<SignUpLayoutProps> = ({
  stepIndex,
  icon,
  text,
  title,
  onSignUp,
}) => {
  const footer = <StepsVisualControl stepIndex={stepIndex} stepsQuantity={4} />;

  return (
    <InfoGeneralLayout footer={footer} actionLabel="Sign up" onPress={onSignUp}>
      <View style={{ marginTop: 57, alignItems: 'center' }}>{icon}</View>
      <View style={{ marginTop: 35, alignItems: 'center' }}>
        <H2
          style={{ textAlign: 'center', width: '60%' }}
          color={theme.palette.secondary}
        >
          {title}
        </H2>
        <P1 style={{ textAlign: 'center', width: '90%' }}>{text}</P1>
      </View>
    </InfoGeneralLayout>
  );
};

export default SignUpLayout;
