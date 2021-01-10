/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { H1 } from '../../components/texts/Texts';
import SmashButton from '../../components/smashButton/SmashButton';
import AbosuluteButtonLayout from '../absoluteButtonLayout/AbsoluteButtonLayout';

import theme from '../../theme/theme';
import { InfoLayoutInterface } from '../infoLayout/InfoLayout';

const styles = StyleSheet.create({
  secondaryBtnContainer: {
    marginTop: 20,
  },
});
const InfoGeneralLayout: React.FunctionComponent<InfoLayoutInterface> = ({
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
      {actionLabel && (
        <SmashButton
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
        flex: 1,
        paddingBottom: insets.bottom,
        backgroundColor: theme.background.color,
        ...style,
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1, paddingLeft: 24, paddingRight: 24 }}
        behavior="height"
      >
        {titleComponent || titleComp}
        {children}
      </KeyboardAvoidingView>
      <View>{footer}</View>
      {absoluteBtn}
    </View>
  );
};

export default InfoGeneralLayout;
