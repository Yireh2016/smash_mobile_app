import * as React from 'react';
import LowInterest from '../../../assets/LowInterest';
import SignUpLayout from '../layout/SignUpLayout';
import { SignUpCarouselInterface } from '../types';

const SavingStep: React.FunctionComponent<SignUpCarouselInterface> = ({
  onSignUp,
}) => {
  const text =
    'Forget about penalties and late fees. We do the hard work for you.';
  const title = 'Save 100s on interest and fees';
  const icon = <LowInterest />;
  return (
    <SignUpLayout
      onSignUp={onSignUp}
      stepIndex={3}
      text={text}
      title={title}
      icon={icon}
    />
  );
};

export default SavingStep;
