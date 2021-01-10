import triggerSignUpStartedEvent from '../../analytics/triggerSignUpStartedEvent';
import routes from '../../constants/routes';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import getVisitedCarouselVisitedScreens from '../getVisitedCarouselVisitedScreens/getVisitedCarouselVisitedScreens';

export default (
  navigation: NavigationProp<ParamListBase>,
  navigationState: any
) => {
  const visitedScreens = getVisitedCarouselVisitedScreens(navigationState);
  triggerSignUpStartedEvent(
    visitedScreens,
    navigationState.routeNames[navigationState.index]
  );
  navigation?.navigate(routes.SIGN_UP);
};
