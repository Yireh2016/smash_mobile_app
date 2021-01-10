import React from 'react';
import { useState } from 'react';

import { storiesOf } from '@storybook/react-native';

import CustomErrorModal from '../../../src/components/customErrorModal/CustomErrorModal';
import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';
import theme from '../../../src/theme/theme';
import { Button } from 'react-native';

const CustomModal = () => {
  const [isModal, setIsModal] = useState(false);

  const props = {
    isModal,
    setIsModal,
    errorTitle: 'Error',
    bodyMessage: 'Mensaje',
    okPressed: () => setIsModal(false),
    cancelPressed: () => setIsModal(false),
  };

  return (
    <>
      <CustomErrorModal {...props} />
      <Button title="toogle" onPress={() => setIsModal(!isModal)} />
    </>
  );
};

export default () =>
  storiesOf('Custom Error Modal', module)
    .addDecorator((getStory) => (
      <CenterLayout color={theme.palette.primary}>{getStory()}</CenterLayout>
    ))
    .add('default', () => {
      return <CustomModal />;
    });
