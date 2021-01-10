import { Auth } from 'aws-amplify';
import errorAlert from './errorAlert';
import resetStore from '../helpers/resetStore';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import routes from '../constants/routes';
import analytics from '@segment/analytics-react-native';

export default async (navigation: NavigationProp<ParamListBase>) => {
  try {
    await Auth.signOut();
    navigation?.navigate(routes.HOME);
    await analytics.reset();
    resetStore();
  } catch (error) {
    errorAlert(error);
  }
};
