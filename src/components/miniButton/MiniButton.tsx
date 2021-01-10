import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme/theme';
import MiniArrow from '../../assets/MiniArrow';

import { P2 } from '../texts/Texts';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface MiniButtonProps {
  label: string;
  onPress: () => vooid;
}

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniArrowContainer: {
    marginLeft: 6,
  },
});

const MiniButton: React.FunctionComponent<MiniButtonProps> = ({
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity testID="MiniButton" onPress={onPress}>
      <View style={styles.layout}>
        <P2>{label}</P2>
        <View style={styles.miniArrowContainer}>
          <MiniArrow color={theme.palette.secondary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniButton;
