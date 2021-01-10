import * as React from 'react';
import { StyleProp, ViewStyle, View, StyleSheet } from 'react-native';
import { H2 } from '../texts/Texts';
import {
  TouchableOpacity,
  ContainedTouchableProperties,
} from 'react-native-gesture-handler';

import useMyTheme from '../../hooks/useMyTheme';

import Plus from '../../assets/Plus';

interface ActionButtonProps {
  label: string;
  onPress?: () => void;
  props?: ContainedTouchableProperties;
  style?: StyleProp<ViewStyle>;
  ref?: any;
  disabled?: boolean;
}

const ActionButton: React.FunctionComponent<ActionButtonProps> = ({
  onPress,
  label,
  style,
  props,
  disabled = false,
}) => {
  const theme = useMyTheme();
  const styles = StyleSheet.create({
    btnContainer: {
      backgroundColor: disabled ? theme.palette.gray : theme.palette.tertiary,
      borderRadius: 12,
      width: '100%',
    },
    btnLabel: {
      color: disabled ? theme.palette.black : theme.palette.white,
      textAlign: 'left',
    },
    btnLayout: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 20,
      paddingBottom: 20,
    },
    btnLabelContainer: {
      flexGrow: 90,
    },
    btnPlusContainer: {
      flexGrow: 10,
      alignItems: 'flex-end',
    },
  });

  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        testID="ActionButton"
        disabled={disabled}
        style={style}
        {...props}
        onPress={onPress}
      >
        <View style={styles.btnLayout}>
          <View style={styles.btnLabelContainer}>
            <H2
              color={
                disabled ? theme.palette.black : theme.palette.primaryContrast
              }
              style={styles.btnLabel}
            >
              {label}
            </H2>
          </View>
          <View style={styles.btnPlusContainer}>
            <Plus
              color={disabled ? theme.palette.white : theme.palette.secondary}
              isRound={true}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;
