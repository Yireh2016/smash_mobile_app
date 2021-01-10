/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import theme from '../../theme/theme';
import Modal from 'react-native-modal';

interface SmashModalProps {
  body: Element;
  children: Element;
  title: Element;
  isModal: boolean;
}

const SmashModal: React.FunctionComponent<SmashModalProps> = ({
  title,
  body,
  children,
  isModal,
}) => {
  const deviceHeight = useWindowDimensions().height;
  return (
    <Modal isVisible={isModal} propagateSwipe={true}>
      <View
        style={{
          backgroundColor: theme.palette.primary,
          padding: 25,
          borderRadius: 10,
          maxHeight: deviceHeight * 0.75,
        }}
      >
        <ScrollView>
          <View>{title}</View>
          <View>{body}</View>
          <View>{children}</View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SmashModal;
