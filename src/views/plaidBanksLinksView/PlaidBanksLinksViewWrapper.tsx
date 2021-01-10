import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigationState } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';
import useGetPlaidLinkConfig from '../../hooks/useGetPlaidLinkConfig';
import errorAlert from '../../helpers/errorAlert';
import { getUser } from '../../store/selectors/selectors';
import PlaidBanksLinks from '../../components/plaidBanksLinks/PlaidBanksLinks';
import { User } from '../../store/types/user';
import { setIsLoading } from '../../store/actions/actions';
import { getRoutesHistory } from '../../store/selectors/selectors';
import triggerEntityLinkFailed, {
  triggerEntityLinkFailedType,
} from '../../analytics/triggerEntityLinkFailed/triggerEntityLinkFailed';
import triggerEntityLinkStarted from '../../analytics/triggerEntityLinkStarted/triggerEntityLinkStarted';
import plaidLinkExitHandler from '../../helpers/plaidLinkExitHandler/plaidLinkExitHandler';

export type PlaidLinkOnSuccessCallbackType = (
  onSuccessDataResponse: any,
  triggerEntityLinkFailed: triggerEntityLinkFailedType,
  routeAfterPlaid?: string
) => void;

interface MyPlaidComponentInterface {
  children: any;
  onSuccessCallback?: PlaidLinkOnSuccessCallbackType;
  onExitCallback?: () => void;
}

const PlaidBanksLinksViewWrapper: React.FunctionComponent<MyPlaidComponentInterface> = ({
  children,
  onSuccessCallback,
  onExitCallback,
}) => {
  const user: User = useSelector(getUser);
  const [routeAfterPlaid, setrouteAfterPlaid] = useState(routes.DASHBOARD);
  const navigationStateRoutes = useNavigationState((state) => state.routes);
  const [tokenConfig, setTokenConfig] = useState({
    token: '',
  });

  const navigation = useNavigation();

  useGetPlaidLinkConfig(setTokenConfig);

  const routesHistory = useSelector(getRoutesHistory);

  useEffect(() => {
    if (routesHistory.length) {
      const lastRoute = routesHistory.slice(-1)[0];
      switch (lastRoute) {
        case routes.LINKED_ACCOUNTS:
          setrouteAfterPlaid(routes.DASHBOARD);
          break;
        case routes.CARD_BALANCES:
          setrouteAfterPlaid(routes.DASHBOARD);
          break;

        default:
          setrouteAfterPlaid(lastRoute);
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routesHistory.length]);

  const onSuccess = async (onSuccessDataResponse: any) => {
    setIsLoading(true);
    triggerEntityLinkStarted(navigationStateRoutes, user);
    onSuccessCallback &&
      onSuccessCallback(
        onSuccessDataResponse,
        triggerEntityLinkFailed,
        routeAfterPlaid
      );
  };

  const onExit = async (linkExit: any) => {
    triggerEntityLinkStarted(navigationStateRoutes, user);
    await plaidLinkExitHandler(linkExit);

    if (linkExit && linkExit.error && linkExit.error.error_message) {
      const errorMessage = linkExit.error.error_message;

      triggerEntityLinkFailed(errorMessage, user);

      errorAlert({
        message: errorMessage,
      });
    }

    navigation?.navigate(routeAfterPlaid);
    onExitCallback && onExitCallback();
  };

  return (
    <PlaidBanksLinks
      tokenConfig={tokenConfig}
      onSuccess={onSuccess}
      onExit={onExit}
    >
      {children}
    </PlaidBanksLinks>
  );
};

export default PlaidBanksLinksViewWrapper;
