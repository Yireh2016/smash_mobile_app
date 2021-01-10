import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';

import theme from '../../../src/theme/theme';
import SmashInputText from '../../../src/components/smashInputText/SmashInputText';

const SmashInput = ({ type = 'default' }) => {
  const [text, setText] = React.useState('');
  const myProps = {
    placeholder: 'placeholder',
    text,
    onChange: setText,
    label: 'Default',
    textColor: theme.palette.primary,
  };
  switch (type) {
    case 'default':
      return <SmashInputText {...myProps} />;
    case 'password':
      const passwdProps = {
        ...myProps,
        label: 'Password',
        secureTextEntry: true,
      };
      return <SmashInputText {...passwdProps} />;
    case 'email':
      const emailProps = {
        ...myProps,
        label: 'Email',
        keyboardType: 'email-address',
      };
      return <SmashInputText {...emailProps} />;

    default:
      break;
  }
};

export default () =>
  storiesOf('Smash Input Text', module)
    .addDecorator((getStory) => (
      <CenterLayout color="white">{getStory()}</CenterLayout>
    ))
    .add('Default', () => {
      return <SmashInput />;
    })
    .add('Password', () => {
      return <SmashInput type="password" />;
    })
    .add('Email', () => {
      return <SmashInput type="email" />;
    });
