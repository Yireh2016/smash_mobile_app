import * as React from 'react';
import SignUpSafe from '../../../assets/SignUpSafe';
import SignUpLayout from '../layout/SignUpLayout';
import { SignUpCarouselInterface } from '../types';

const CreditCardStep: React.FunctionComponent<SignUpCarouselInterface> = ({
  onSignUp,
}) => {
  const text =
    'We never store your bank credentials and you can manage your data rights at any moment.';
  const title = 'Keep your data safe';
  const icon = <SignUpSafe />;
  return (
    <SignUpLayout
      onSignUp={onSignUp}
      stepIndex={1}
      text={text}
      title={title}
      icon={icon}
    />
  );
};

export default CreditCardStep;
