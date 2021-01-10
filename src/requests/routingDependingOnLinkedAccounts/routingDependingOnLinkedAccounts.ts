import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { setIsUserAuthenticated } from '../../store/actions/actions';
import hasLinkedAccounts from '../../interfaces/hasLinkedAccounts/hasLinkedAccounts';
import routes from '../../constants/routes';

const routingDependingOnLinkedAccounts = async (
  navigation: NavigationProp<ParamListBase>
) => {
  try {
    await hasLinkedAccounts();
    setIsUserAuthenticated(true);
    navigation.navigate(routes.DASHBOARD);
  } catch (error) {
    setIsUserAuthenticated(true);
    if (error?.response?.status === 404) {
      navigation.navigate(routes.ONBOARD_CONGRATS);
    }
  }
};

export default routingDependingOnLinkedAccounts;
