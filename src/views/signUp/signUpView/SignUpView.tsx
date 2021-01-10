/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { P1, SmashLink } from '../../../components/texts/Texts';
import Summary from '../../../components/summary/Summary';
import SmashForm, { InputProps } from '../../../components/smashForm/SmashForm';
import routes from '../../../constants/routes';
import errorAlert from '../../../helpers/errorAlert';
import InfoLayout from '../../../layouts/infoLayout/InfoLayout';
import { setIsLoading } from '../../../store/actions/actions';
import useGetUserCreatedAt from '../../../hooks/useGetUserCreatedAt';
import { getRoutesHistory, getUser } from '../../../store/selectors/selectors';
import { NavigationSmashProps } from '../../../types/common/commonTypes';

const HomeView: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const routesHistory = useSelector(getRoutesHistory);

  const user = useSelector(getUser);
  useGetUserCreatedAt(user, routesHistory.slice(-1)[0], routes);

  const onSignUp = async () => {
    setIsLoading(true);
    try {
      if (!name || !lastname) {
        throw new Error('Please complete all inputs');
      }
      await Auth.signUp({
        username: email,
        password: passwd,
        attributes: {
          given_name: name,
          family_name: lastname,
        },
      });

      navigation?.navigate(routes.SUCCESS);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      errorAlert(error);
    }
  };

  const form: InputProps[] = [
    { type: 'text', label: 'First Name', value: name, onChangeText: setName },
    {
      type: 'text',
      label: 'Last Name',
      value: lastname,
      onChangeText: setLastname,
    },
    {
      type: 'email',
      label: 'Email',
      value: email,
      onChangeText: setEmail,
    },
    {
      type: 'password',
      label: 'Password',
      value: passwd,
      onChangeText: setPasswd,
    },
  ];

  return (
    <InfoLayout
      title="Sign up with email"
      actionLabel="Create Account"
      onPress={onSignUp}
    >
      <Summary text="Open to everyone. No credit check required" />

      <View style={{ marginTop: 32 }}>
        <SmashForm form={form} />
      </View>
      <View style={{ justifyContent: 'center', marginTop: 32 }}>
        <P1>
          By signing up you accept our{' '}
          <SmashLink
            onPress={() => {
              navigation?.navigate(routes.TERMS_CONDITIONS);
            }}
          >
            Terms and Conditions.
          </SmashLink>
        </P1>
        <P1 style={{ marginTop: 15 }}>
          View our{' '}
          <SmashLink
            onPress={() => {
              navigation?.navigate(routes.PRIVACY);
            }}
          >
            Privacy Policy{' '}
          </SmashLink>
          and{' '}
          <SmashLink
            onPress={() => {
              navigation?.navigate(routes.DISCLAIMER);
            }}
          >
            Disclaimer.
          </SmashLink>
        </P1>
        <P1 style={{ marginTop: 15 }}>
          Have an account already?{' '}
          <SmashLink
            onPress={() => {
              navigation?.navigate(routes.SIGN_IN);
            }}
          >
            Sign in.
          </SmashLink>
        </P1>
      </View>
    </InfoLayout>
  );
};

export default HomeView;
