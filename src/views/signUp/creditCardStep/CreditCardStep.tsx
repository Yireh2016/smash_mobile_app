import * as React from 'react';
import SignUpCard from '../../../assets/SignUpCard';
import SignUpLayout from '../layout/SignUpLayout';
import { SignUpCarouselInterface } from '../types';

const CreditCardStep: React.FunctionComponent<SignUpCarouselInterface> = ({
  onSignUp,
}) => {
  const text =
    'Created a personalized and automated plan to pay off your cards without effort.';
  const title = 'Pay down your credit card faster';
  const icon = <SignUpCard />;
  return (
    <SignUpLayout
      onSignUp={onSignUp}
      stepIndex={0}
      text={text}
      title={title}
      icon={icon}
    />
  );
};

export default CreditCardStep;
