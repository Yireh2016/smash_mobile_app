import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { H3, P1 } from '../texts/Texts';

import SmashModal from '../smashModal/SmashModal';
import SmashButton from '../smashButton/SmashButton';
import Delete from '../../assets/Delete';

interface ErrorModalProps {
  okPressed?(): any;
  cancelPressed?(): any;
  errorTitle?: string;
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<S>>;
  bodyMessage: string;
}

const styles = StyleSheet.create({
  cancelContainer: {
    marginTop: 25,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 7,
  },
  messageContainer: {
    marginBottom: 20,
  },
  messageStyle: {
    textAlign: 'center',
  },
  warningIconContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
});

const CustomErrorModal: React.FunctionComponent<ErrorModalProps> = ({
  isModal,
  setIsModal,
  errorTitle,
  bodyMessage,
  okPressed,
  cancelPressed,
}) => {
  const title = (
    <View style={styles.titleContainer}>
      <View style={styles.warningIconContainer}>
        <Delete />
      </View>
      <H3>{errorTitle || 'Error'} </H3>
    </View>
  );
  const body = (
    <View style={styles.messageContainer}>
      <P1 style={styles.messageStyle}>{bodyMessage}</P1>
    </View>
  );
  return (
    <SmashModal title={title} body={body} isModal={isModal}>
      <View>
        <SmashButton
          onPress={() => (okPressed ? okPressed() : setIsModal(false))}
          label="Ok"
        />
        <View style={styles.cancelContainer}>
          <SmashButton
            type="secondary"
            onPress={() =>
              cancelPressed ? cancelPressed() : setIsModal(false)
            }
            label="Cancel"
          />
        </View>
      </View>
    </SmashModal>
  );
};

export default CustomErrorModal;
