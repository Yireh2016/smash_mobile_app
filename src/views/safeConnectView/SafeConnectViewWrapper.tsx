import * as React from 'react';
import { useSelector } from 'react-redux';
import { triggerEntityLinkFailedType } from '../../analytics/triggerEntityLinkFailed/triggerEntityLinkFailed';
import {
  getPlan,
  getRoutesHistory,
  getUser,
} from '../../store/selectors/selectors';
import SafeConnect from './SafeConnectView';
import { NavigationSmashProps } from '../../types/common/commonTypes';
import { PlaidLinkOnSuccessCallbackType } from '../plaidBanksLinksView/PlaidBanksLinksViewWrapper';
import routes from '../../constants/routes';
import updateAllAppData from '../../requests/updateAllAppData/updateAllAppData';
import savePlaidInstitution from '../../requests/savePlaidInstitution/savePlaidInstitution';

const SafeConnectWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const user = useSelector(getUser);
  const routesHistory = useSelector(getRoutesHistory);
  const plan = useSelector(getPlan);

  const onAddPlaidAccount: PlaidLinkOnSuccessCallbackType = async (
    onSuccessDataResponse,
    triggerEntityLinkFailed
  ) => {
    const lastRoute = routesHistory.slice(-2)[0];

    switch (lastRoute) {
      case routes.DASHBOARD:
      case routes.MENU_SETTINGS:
      case routes.ADD_CARDS_MODAL:
        await savePlaidInstitution(
          onSuccessDataResponse,
          triggerEntityLinkFailed,
          user
        );

        navigation?.navigate(routes.DASHBOARD);
        break;

      case routes.ONBOARD_ADD_CARDS:
      case routes.ONBOARD_ADD_ACCOUNTS:
        await updateAllAppData(
          onSuccessDataResponse,
          plan,
          triggerEntityLinkFailed,
          user
        );
        navigation?.navigate(lastRoute);
        break;

      default:
        await updateAllAppData(
          onSuccessDataResponse,
          plan,
          triggerEntityLinkFailed,
          user
        );
        navigation?.navigate(routes.DASHBOARD);
        break;
    }
  };
  const onPlaidLinkExit = () => {
    const lastRoute = routesHistory.slice(-2)[0];
    switch (lastRoute) {
      case routes.DASHBOARD:
      case routes.ONBOARD_ADD_CARDS:
      case routes.ONBOARD_ADD_ACCOUNTS:
        navigation?.navigate(lastRoute);
        break;

      default:
        navigation?.navigate(routes.DASHBOARD);
        break;
    }
  };
  return (
    <SafeConnect
      onPlaidLinkExit={onPlaidLinkExit}
      onAddPlaidItemSuccess={(
        data: any,
        triggerEntityLinkFailed: triggerEntityLinkFailedType,
        routeAfterPlaid?: string
      ) => {
        (async () =>
          await onAddPlaidAccount(
            data,
            triggerEntityLinkFailed,
            routeAfterPlaid
          ))();
      }}
    />
  );
};

export default SafeConnectWrapper;
