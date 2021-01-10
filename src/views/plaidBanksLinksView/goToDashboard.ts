import routes from '../../constants/routes';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const goToDashboard = (navigation: NavigationProp<ParamListBase>) => {
  navigation?.navigate(routes.DASHBOARD);
};

export default goToDashboard;
