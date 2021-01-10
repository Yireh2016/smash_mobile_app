/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useState } from 'react';

import { View } from 'react-native';

import SmashForm, { InputProps } from '../../components/smashForm/SmashForm';

import routes from '../../constants/routes';
import errorAlert from '../../helpers/errorAlert';
import resendConfirmationCode from '../../amplify/resendConfirmationCode';
import InfoLayout from '../../layouts/infoLayout/InfoLayout';
import { NavigationSmashProps } from '../../types/common/commonTypes';

const ConfirmEmailView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');

  const form: InputProps[] = [
    {
      type: 'email',
      label: 'Email',
      value: email,
      onChangeText: setEmail,
    },
  ];

  const onSendCodePress = async () => {
    await resendConfirmationCode(
      email,
      () => navigation?.navigate(routes.SIGN_IN),
      (err) => errorAlert(err)
    );
  };

  return (
    <InfoLayout
      onPress={onSendCodePress}
      actionLabel="Send Code"
      title="Send confirmation code"
    >
      <View style={{ marginTop: 32 }}>
        <SmashForm form={form} />
      </View>
    </InfoLayout>
  );
};

export default ConfirmEmailView;
