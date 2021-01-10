import { Alert } from 'react-native';

interface SuccessInterface {
  message?: string;
}

const successAlert = (success: SuccessInterface, onPress?: any): void => {
  Alert.alert(
    'Success',
    success.message ? success.message : `${JSON.stringify(success)}`,
    [{ text: 'OK', onPress: onPress }],
    { cancelable: false }
  );
};

export default successAlert;
