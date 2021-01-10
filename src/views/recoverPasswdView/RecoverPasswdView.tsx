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

const RecoverPasswdView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
  route,
}) => {
  const [code, setCode] = useState('');
  const [newPasswd, setNewPasswd] = useState('');

  const { email } = route ? route?.params : '';

  const onPasswordChange = async () => {
    if (code && newPasswd) {
      setIsLoading(true);
      try {
        await Auth.forgotPasswordSubmit(email, code, newPasswd);
        navigation?.navigate(routes.HOME);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        errorAlert(error);
      }
    }
  };

  const form: InputProps[] = [
    {
      type: 'text',
      label: 'Verification Code',
      value: code,
      onChangeText: setCode,
      onSubmitEditing: onPasswordChange,
    },
    {
      type: 'password',
      label: 'New Password',
      value: newPasswd,
      onChangeText: setNewPasswd,
      onSubmitEditing: onPasswordChange,
    },
  ];

  return (
    <InfoLayout
      onPress={onPasswordChange}
      actionLabel="Change Password"
      title="Recover password"
    >
      <View style={{ marginTop: 32 }}>
        <SmashForm form={form} />
      </View>
    </InfoLayout>
  );
};

export default RecoverPasswdView;
