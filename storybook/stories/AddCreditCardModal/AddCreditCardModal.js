import React from 'react';
import { useState } from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterLayout from '../../../src/layouts/centerLayout/CenterLayout';

import theme from '../../../src/theme/theme';

import AddCardModal from '../../../src/components/addCardModal/AddCardModal';
import SmashButton from '../../../src/components/smashButton/SmashButton';
import { Button } from 'react-native';

const AddCreditCardModal = () => {
  const [toogle, setToogle] = useState(false);

  const toogleModal = () => {
    setToogle(!toogle);
  };

  const modalProps = {
    addCardPress: () => {
      console.log('add card pressed');
    },
    isModal: toogle,
    onCancel: () => toogleModal(),
  };
  return (
    <>
      <AddCardModal {...modalProps} />
      <Button title="toogle" onPress={() => toogleModal()} />
      <SmashButton onPress={() => toogleModal()} label="Toogle modal" />
    </>
  );
};

export default () =>
  storiesOf('Add Card Modal', module)
    .addDecorator((getStory) => (
      <CenterLayout color={theme.palette.primary}>{getStory()}</CenterLayout>
    ))
    .add('Default', () => <AddCreditCardModal />);
