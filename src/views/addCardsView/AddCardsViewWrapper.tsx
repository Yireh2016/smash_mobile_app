import { useNavigationState } from '@react-navigation/native';
import * as React from 'react';
import { useSelector } from 'react-redux';
import triggerEntityLinkStarted from '../../analytics/triggerEntityLinkStarted/triggerEntityLinkStarted';
import { getCreditCards, getUser } from '../../store/selectors/selectors';
import routes from '../../constants/routes';
import useGetPlaidLinkConfig from '../../hooks/useGetPlaidLinkConfig';
import { NavigationSmashProps } from '../../types/common/commonTypes';
import AddCardView from './AddCardsView';
import { setIsLoading } from '../../store/actions/actions';
import { User } from '../../store/types/user';
import triggerEntityLinkFailed from '../../analytics/triggerEntityLinkFailed/triggerEntityLinkFailed';
import savePlaidInstitution from '../../requests/savePlaidInstitution/savePlaidInstitution';
import plaidLinkExitHandler from '../../helpers/plaidLinkExitHandler/plaidLinkExitHandler';

const AddCardsViewWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const [tokenConfig, setTokenConfig] = React.useState({ token: '' });
  const navigationStateRoutes = useNavigationState((state) => state.routes);
  const user: User = useSelector(getUser);
  const cards = useSelector(getCreditCards);
  useGetPlaidLinkConfig(setTokenConfig);

  const onAddCardSuccess = async (onSuccessDataResponse: any) => {
    setIsLoading(true);
    triggerEntityLinkStarted(navigationStateRoutes, user);
    await savePlaidInstitution(
      onSuccessDataResponse,
      triggerEntityLinkFailed,
      user
    );

    navigation?.navigate(routes.DASHBOARD);
  };

  const onAddCardExit = async (linkExit: any) => {
    await plaidLinkExitHandler(linkExit);
    navigation?.navigate(routes.DASHBOARD);
  };

  const onCancel = () => navigation?.goBack();

  const goToSafeConnect = () => navigation?.navigate(routes.SAFE_CONNECT);
  const props = {
    tokenConfig,
    onAddCardSuccess: (data: any) =>
      (async () => await onAddCardSuccess(data))(),
    onAddCardExit,
    onCancel,
    goToSafeConnect,
    cards,
  };

  return <AddCardView {...props} />;
};

export default AddCardsViewWrapper;
