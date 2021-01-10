import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme/theme';

interface CenterLayoutProps {
  children: Element;
  color?: string;
  flex?: number;
}

const CenterLayout: React.FC<CenterLayoutProps> = ({
  children,
  color = theme.background.color,
  flex = 1,
}) => {
  // const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    main: {
      flex: flex,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
    },
  });

  return <SafeAreaView style={styles.main}>{children}</SafeAreaView>;
};

export default CenterLayout;
