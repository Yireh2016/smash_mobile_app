import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../hooks/useMyTheme';
import { SMASHWHITE } from '../../theme/theme';

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useTheme();
interface AbosuluteButtonInterface {
  children: Element;
}
const AbosuluteButtonLayout: React.FunctionComponent<AbosuluteButtonInterface> = ({
  children,
}) => {
  return (
    <View
      style={{
        ...styles.paddingLayout,
        ...styles.paddingTop15,
        ...styles.paddingBottom15,
      }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  whiteBackground: { backgroundColor: SMASHWHITE },
  paddingLayout: theme.paddingLayout,
  paddingTop15: { paddingTop: 15 },
  paddingBottom15: { paddingBottom: 15 },
  settingsLayout: { flexDirection: 'row', marginTop: 15 },
});

export default AbosuluteButtonLayout;
