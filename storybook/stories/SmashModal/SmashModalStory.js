/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';
import SmashModal from '../../../src/components/smashModal/SmashModal';
import { H2, P1 } from '../../../src/components/texts/Texts';

import theme from '../../../src/theme/theme';

import Error from '../../../src/assets/Error';
import SmashButton from '../../../src/components/smashButton/SmashButton';

const CustomModal = ({ isModal, setIsModal }) => {
  const title = <Text>Title</Text>;
  const body = <Text>Body</Text>;
  return (
    <SmashModal title={title} body={body} isModal={isModal}>
      <Button title="ok" onPress={() => setIsModal(false)} />

      <Button title="calcel" onPress={() => setIsModal(false)} />
    </SmashModal>
  );
};

const ErrorModal = ({ isModal, setIsModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const title = (
    <View>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
        <Error color={theme.palette.error} />
        <View style={{ marginTop: 30 }}>
          <H2>Wait!</H2>
        </View>
      </View>
    </View>
  );
  const body = (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
      <P1>Are you sure you want to unlink this account?</P1>
    </View>
  );
  return (
    <View>
      <Button title="toogle" onPress={() => setIsVisible(!isVisible)} />

      <SmashModal title={title} body={body} isModal={isVisible}>
        <View
          style={{
            marginTop: 25,
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <SmashButton onPress={() => setIsVisible(false)} label="Ok" />
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 20,
            }}
          >
            <SmashButton
              type="secondary"
              onPress={() => setIsVisible(false)}
              label="Cancel"
            />
          </View>
        </View>
      </SmashModal>
    </View>
  );
};

const DefaultModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <Button title="toogle" onPress={() => setIsVisible(!isVisible)} />

      <CustomModal isModal={isVisible} setIsModal={setIsVisible} />
    </View>
  );
};
export default () =>
  storiesOf('Smash Modal', module)
    .addDecorator((getStory) => (
      <CenterLayout color={theme.palette.primary}>{getStory()}</CenterLayout>
    ))
    .add('Default', () => <DefaultModal />)
    .add('Error', () => <ErrorModal />);
