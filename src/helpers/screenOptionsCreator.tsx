import { EdgeInsets } from 'react-native-safe-area-context';
import skipNavigator from '../navigators/headerNav/skipNavigator';
import defaultNav from '../navigators/headerNav/defaultNav';
import addEntityNavigator from '../navigators/headerNav/addEntityNavigator';
import dashboardNavigator from '../navigators/headerNav/dashboardNavigator';
import titleOnlyNavigator from '../navigators/headerNav/titleOnlyNavigator';

export interface ViewInterface {
  view: string;
  headerShown: boolean;
  type?: string;
}

export const screensTitleMap: { [index: string]: string } = {
  TermsConditions: 'Terms and conditions',
  Security: 'Security',
  Success: 'Success',
  Home: 'Home',
  SignUp: 'Sign up',
  SignIn: 'Sign in',
  PrivacyPolicy: 'Privacy policy',
  addCardsModal: 'Banks Links',
  Dashboard: 'Dashboard',
  Forgot: 'Forgot',
  RecoverPassword: 'Recover password',
  ConfirmPassword: 'Confirm password',
  Balances: 'Credit cards',
  Accounts: 'Accounts',
  PaymentPlan: 'Payment plan',
  BetaDisclaimer: 'Beta disclaimer',
  PlanSettings: 'Plan settings',
  PlanApproach: 'Plan review',
  PlanApproachReadonly: 'Plan review',
  PlanReview: 'Plan review',
  PlanReviewReadonly: 'Plan review',
  OnBoardingCongrats: '',
  OnBoardingAddCreditCards: 'Add credit cards',
  OnBoardingBanksLinks: '',
  OnBoardingAddAccounts: 'Add bank accounts',
  OnBoardingPlanSettings: 'Plan setting',
  OnBoardingPlanApproach: 'Plan review',
  OnBoardingPlanReview: 'Plan review',
  OnboardingPlanSuccess: 'Launch Plan',
  Notifications: '',
  PlanSuccess: 'Launch Plan',
  SafeConnect: '',
  CarouselCard: '',
  CarouselSecurity: '',
  CarouselWallet: '',
  CarouselSave: '',
};

const options = (
  viewObj: ViewInterface,
  navigation: any,
  insets: EdgeInsets
): any => {
  switch (viewObj.type) {
    case 'skip':
      return skipNavigator(viewObj, navigation, insets);
    case 'dashboard':
      return dashboardNavigator(viewObj, navigation, insets);
    case 'addEntity':
      return addEntityNavigator(viewObj, navigation, insets);
    case 'titleOnly':
      return titleOnlyNavigator(viewObj, insets);
    case 'default':
    default:
      return defaultNav(viewObj, navigation, insets);
  }
};

export default options;
