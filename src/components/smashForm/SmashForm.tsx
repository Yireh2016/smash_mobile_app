import React from 'react';

import { View } from 'react-native';
import styled from 'styled-components';

import SmashInputText, {
  SmashInputTextProps,
} from '../smashInputText/SmashInputText';

interface SmashFormProps {
  form: InputProps[];
}

export interface InputProps extends SmashInputTextProps {
  type: string;
  label: string;
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
}
const SmashForm: React.FunctionComponent<SmashFormProps> = ({ form }) => {
  const inputsMap: (Element | null)[] = form.map(
    (input: InputProps, i: number) => {
      switch (input.type) {
        case 'text':
          return (
            <SmashInputText
              returnKeyType={input.returnKeyType}
              key={i}
              ref={input.ref}
              label={input.label}
              value={input.value}
              onChangeText={input.onChangeText}
              onSubmitEditing={input.onSubmitEditing}
            />
          );

        case 'email':
          return (
            <SmashInputText
              keyboardType="email-address"
              key={i}
              ref={input.ref}
              label={input.label}
              value={input.value}
              onChangeText={input.onChangeText}
              onSubmitEditing={input.onSubmitEditing}
            />
          );

        case 'password':
          return (
            <SmashInputText
              secureTextEntry={true}
              key={i}
              ref={input.ref}
              label={input.label}
              value={input.value}
              onChangeText={input.onChangeText}
              onSubmitEditing={input.onSubmitEditing}
            />
          );

        default:
          return null;
      }
    }
  );
  return <StyledView>{inputsMap}</StyledView>;
};

const StyledView = styled(View)``;

export default SmashForm;
