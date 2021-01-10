import * as React from 'react';
import {
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
  TouchableOpacityProperties,
  TouchableOpacity,
} from 'react-native';
import { H2 } from '../texts/Texts';
import useMyTheme from '../../hooks/useMyTheme';

interface SmashButtonProps {
  label: string;
  onPress?(): void;
  props?: TouchableOpacityProperties;
  style?: StyleProp<ViewStyle>;
  ref?: any;
  disabled?: boolean;
  type?: string;
  testID?: string;
}

const SmashButton: React.FunctionComponent<SmashButtonProps> = ({
  onPress,
  label,
  style,
  props,
  disabled = false,
  type = 'primary',
  testID,
}) => {
  const theme = useMyTheme();
  const styles = StyleSheet.create({
    btnContainer: {
      backgroundColor: type?.match('secondary')
        ? theme.palette.primary
        : theme.palette.secondary,
      borderRadius: 12,
      paddingTop: 10,
      paddingBottom: 10,
      width: '100%',
      borderWidth: 1,
      borderColor: type?.match('secondary')
        ? theme.palette.secondary
        : 'transparent',
    },
    btnDisabled: {
      backgroundColor: theme.palette.gray,
      borderRadius: 12,
      paddingTop: 10,
      paddingBottom: 10,
      width: '100%',
      borderWidth: 1,
      borderColor: theme.palette.white,
    },
    btnLabel: {
      color: disabled ? theme.palette.black : theme.palette.white,
      textAlign: 'center',
    },
  });
  return (
    <View style={disabled ? styles.btnDisabled : styles.btnContainer}>
      {type.match('no-action') ? (
        <H2 style={styles.btnLabel}>{label}</H2>
      ) : (
        <TouchableOpacity
          testID={testID}
          disabled={disabled}
          style={style}
          {...props}
          onPress={onPress}
        >
          <H2 style={styles.btnLabel}>{label}</H2>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SmashButton;
