import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { User } from '../../store/types/user';
import getUserCreatedAt from '../../interfaces/getUserCreatedAt/getUserCreatedAt';
import { setUser, setUserCreatedAt } from '../../store/actions/actions';
import triggerIdentifyEvents from '../../analytics/triggetIdentifyEvents/triggerIdentifyEvents';
import updatePlaidAppData from '../../interfaces/updateAppData/updateAppData';
import logger from '../logger/logger';
import routingDependingOnLinkedAccounts from '../../requests/routingDependingOnLinkedAccounts/routingDependingOnLinkedAccounts';
import getAndSavePlaidLinkToken from '../getAndSavePlaidLinkToken/getAndSavePlaidLinkToken';

const onLoginInit = async (
  user: User,
  navigation: NavigationProp<ParamListBase>
) => {
  setUser(user);

  try {
    const [userComplementary] = await Promise.all([
      getUserCreatedAt(user.attributes.email),
      updatePlaidAppData(),
      getAndSavePlaidLinkToken(),
    ]);

    triggerIdentifyEvents(userComplementary, user);
    setUserCreatedAt(userComplementary.data.created_at);
  } catch (error) {
    logger({ obj: error, type: 'error' });
  }

  routingDependingOnLinkedAccounts(navigation);
};

export default onLoginInit;
