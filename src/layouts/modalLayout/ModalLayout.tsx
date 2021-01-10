import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { H3, P1 } from '../../components/texts/Texts';

import { getModal } from '../../store/selectors/selectors';
import { setModal } from '../../store/actions/actions';
import { ModalType } from '../../store/types/modal';
import SmashButton from '../../components/smashButton/SmashButton';
import SmashModal from '../../components/smashModal/SmashModal';
import Warning from '../../assets/Warning';
import Error from '../../assets/Error';
import SuccessIcon from '../../assets/Success';
interface ModalLayoutProps {
  children: Element;
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

const ModalLayout: React.FunctionComponent<ModalLayoutProps> = ({
  children,
}) => {
  const [title, setTitle] = useState('');
  const modal = useSelector(getModal);

  useEffect(() => {
    switch (modal.type) {
      case ModalType.ERROR:
        setTitle('Something went wrong');

        break;
      case ModalType.SUCCESS:
        setTitle('Success');

        break;
      case ModalType.INFO:
        setTitle('Information');

        break;

      default:
        break;
    }
  }, [modal]);

  const smashModalProps = {
    title: (
      <View style={styles.titleContainer}>
        <View style={styles.warningIconContainer}>
          {modal.type?.match(ModalType.ERROR) && <Error />}
          {modal.type?.match(ModalType.INFO) && <Warning />}
          {modal.type?.match(ModalType.SUCCESS) && <SuccessIcon />}
        </View>
        <H3>{title}</H3>
      </View>
    ),
    body: (
      <View style={styles.messageContainer}>
        <P1 style={styles.messageStyle}>{modal.message}</P1>
      </View>
    ),
    isModal: modal.show,
  };

  return (
    <>
      <SmashModal {...smashModalProps}>
        <View>
          <SmashButton
            onPress={() => {
              setModal({ show: false, message: '', type: modal.type });
            }}
            label="Ok"
          />
        </View>
      </SmashModal>

      {children}
    </>
  );
};

export default ModalLayout;
