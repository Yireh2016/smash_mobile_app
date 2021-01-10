import analytics from '@segment/analytics-react-native';
import { EVENTS } from '../constants/events';

export type triggerSignUpStarted = (
  visitedScreens: string[],
  lastScreen: string
) => Promise<void>;
export default (visitedScreens: string[], lastScreen: string) =>
  analytics.track(EVENTS.SIGN_UP_STARTED, {
    screens: visitedScreens,
    screen: lastScreen,
  });
