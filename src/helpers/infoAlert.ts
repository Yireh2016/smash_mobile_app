import { Alert } from 'react-native';

interface InfoAlertInterface {
  message?: string;
}

const infoAlert = (
  info: InfoAlertInterface,
  okText?: string,
  onPress?: any
): void => {
  Alert.alert(
    'Success',
    info.message ? info.message : `${JSON.stringify(info)}`,
    [{ text: okText || 'OK', onPress: onPress }],
    { cancelable: false }
  );
};

export default infoAlert;
