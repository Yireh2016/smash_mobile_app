import * as React from 'react';
import SignUpWallet from '../../../assets/SignUpWallet';
import SignUpLayout from '../layout/SignUpLayout';
import { SignUpCarouselInterface } from '../types';

const CreditCardStep: React.FunctionComponent<SignUpCarouselInterface> = ({
  onSignUp,
}) => {
  const text = 'Manage all your cards in one place and control your spending.';
  const title = 'Regain control over your wallet';
  const icon = <SignUpWallet />;
  return (
    <SignUpLayout
      onSignUp={onSignUp}
      stepIndex={2}
      text={text}
      title={title}
      icon={icon}
    />
  );
};

export default CreditCardStep;
