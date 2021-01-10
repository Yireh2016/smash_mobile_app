/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { H1 } from '../../components/texts/Texts';

import SmashButton from '../../components/smashButton/SmashButton';
import AbosuluteButtonLayout from '../absoluteButtonLayout/AbsoluteButtonLayout';
import theme from '../../theme/theme';

export interface InfoLayoutInterface {
  children: Element;
  onPress?(): void;
  onSecondaryPress?: () => void;
  actionLabel?: string;
  secondaryActionLabel?: string;
  disabledSecondaryAction?: boolean;
  title?: string;
  titleComponent?: Element;
  disabledAction?: boolean;
  footer?: Element | JSX.Element;
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  secondaryBtnContainer: {
    marginTop: 20,
  },
});
const InfoLayout: React.FunctionComponent<InfoLayoutInterface> = ({
  children,
  disabledAction = false,
  onPress,
  onSecondaryPress,
  actionLabel,
  secondaryActionLabel,
  title,
  titleComponent,
  footer,
  style,
  disabledSecondaryAction = false,
}) => {
  const insets = useSafeAreaInsets();
  const titleComp = title ? <H1>{title}</H1> : null;

  const absoluteBtn = (
    <AbosuluteButtonLayout>
      {actionLabel && onPress && (
        <SmashButton
          testID="InfoLayoutPrimaryBtn"
          disabled={disabledAction}
          label={actionLabel}
          onPress={onPress}
        />
      )}
      {onSecondaryPress && secondaryActionLabel && (
        <View style={styles.secondaryBtnContainer}>
          <SmashButton
            testID="InfoLayoutSecondaryBtn"
            disabled={disabledSecondaryAction}
            label={secondaryActionLabel}
            onPress={onSecondaryPress}
            type="secondary"
          />
        </View>
      )}
    </AbosuluteButtonLayout>
  );
  return (
    <View
      style={{
        ...{
          flex: 1,
          paddingBottom: insets?.bottom,
          backgroundColor: theme.background.color,
        },
        ...style,
      }}
    >
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <ScrollView>
          <View
            style={{
              paddingLeft: 16.5,
              paddingRight: 16.5,
              marginTop: 10,
            }}
          >
            {titleComponent || titleComp}
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View>{footer}</View>
      {absoluteBtn}
    </View>
  );
};

export default InfoLayout;
