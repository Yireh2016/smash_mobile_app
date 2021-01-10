import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { SMASHBLUE } from '../../theme/theme';
import { ChildrenProp } from '../../types/common/commonTypes';

const BackgroundLayout: React.FunctionComponent<ChildrenProp> = ({
  children,
}) => {
  return (
    <>
      <View style={styles.background} />
      {children}
    </>
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({
  background: {
    backgroundColor: SMASHBLUE,
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
});
