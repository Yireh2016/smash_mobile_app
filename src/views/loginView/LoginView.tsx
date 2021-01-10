/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { View, KeyboardAvoidingView } from 'react-native';
import { P2, SmashLink } from '../../components/texts/Texts';
import SmashForm, { InputProps } from '../../components/smashForm/SmashForm';
import routes from '../../constants/routes';
import errorAlert from '../../helpers/errorAlert';
import { setIsLoading } from '../../store/actions/actions';
import InfoLayout from '../../layouts/infoLayout/InfoLayout';
import login from '../../helpers/login/login';
import { NavigationSmashProps } from '../../types/common/commonTypes';

const LoginView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');

  const onLogin = async () => {
    if (email && passwd) {
      setIsLoading(true);
      try {
        await Auth.signIn(email, passwd);
        const user = await Auth.currentUserInfo();
        login(user, navigation);
      } catch (error) {
        setIsLoading(false);
        errorAlert(error);
      } finally {
        setPasswd('');
      }
    }
  };

  const form: InputProps[] = [
    {
      type: 'email',
      label: 'Email',
      value: email,
      onChangeText: setEmail,
      onSubmitEditing: () => {
        passwd && onLogin();
      },
    },
    {
      type: 'password',
      label: 'Password',
      value: passwd,
      onChangeText: setPasswd,
      onSubmitEditing: () => {
        email && onLogin();
      },
    },
  ];

  return (
    <InfoLayout
      title="Sign in to your account"
      onPress={onLogin}
      actionLabel="Sign In"
    >
      <KeyboardAvoidingView behavior="position" style={{ marginTop: 32 }}>
        <SmashForm form={form} />
      </KeyboardAvoidingView>
      <View style={{ justifyContent: 'center', marginTop: 32 }}>
        <P2>
          Forgot{' '}
          <SmashLink
            onPress={() => {
              navigation?.navigate(routes.FORGOT);
            }}
          >
            password
          </SmashLink>
          ?
        </P2>
        <P2 style={{ marginTop: 20 }}>
          Have you{' '}
          <SmashLink
            onPress={() => {
              navigation?.navigate(routes.CONFIRM);
            }}
          >
            confirmed{' '}
          </SmashLink>
          your account yet?
        </P2>
        <View style={{ marginTop: 20 }}>
          <SmashLink
            onPress={() => {
              navigation?.navigate(routes.SIGN_UP_CAROUSEL);
            }}
          >
            Create account.
          </SmashLink>
        </View>
      </View>
    </InfoLayout>
  );
};

export default LoginView;
