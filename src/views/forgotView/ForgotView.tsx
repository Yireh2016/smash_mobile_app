/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { View } from 'react-native';

import SmashForm, { InputProps } from '../../components/smashForm/SmashForm';

import routes from '../../constants/routes';
import errorAlert from '../../helpers/errorAlert';
import InfoLayout from '../../layouts/infoLayout/InfoLayout';
import { setIsLoading } from '../../store/actions/actions';
import { NavigationSmashProps } from '../../types/common/commonTypes';

const ForgotView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');

  const onSendCodePress = async () => {
    setIsLoading(true);

    try {
      await Auth.forgotPassword(email);
      navigation?.navigate(routes.RECOVER_PASSWD, { email });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      errorAlert(error);
    }
  };

  const form: InputProps[] = [
    {
      type: 'email',
      label: 'Email',
      value: email,
      returnKeyType: 'next',
      returnKeyLabel: 'Submit',
      onChangeText: setEmail,
      onSubmitEditing: onSendCodePress,
    },
  ];

  return (
    <InfoLayout
      onPress={onSendCodePress}
      actionLabel="Send Code"
      title="Recover password"
    >
      <View style={{ marginTop: 32 }}>
        <SmashForm form={form} />
      </View>
    </InfoLayout>
  );
};

export default ForgotView;
