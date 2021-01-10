/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { ViewInterface } from '../../helpers/screenOptionsCreator';
import { TouchableOpacity, View } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import theme from '../../theme/theme';
import GoBackNavArrow from '../../assets/GoBackNavArrow';
import PlusButton from '../../components/plusButton/PlusButton';
import PlaidBanksLinksViewWrapper, {
  PlaidLinkOnSuccessCallbackType,
} from '../../views/plaidBanksLinksView/PlaidBanksLinksViewWrapper';
import { NavigationSmashProps } from '../../types/common/commonTypes';
import savePlaidInstitution from '../../requests/savePlaidInstitution/savePlaidInstitution';
import { useSelector } from 'react-redux';
import { getCreditCards, getUser } from '../../store/selectors/selectors';
import { triggerEntityLinkFailedType } from '../../analytics/triggerEntityLinkFailed/triggerEntityLinkFailed';
import headerDefaultOptions from './headerDefaultOptions';
import routes from '../../constants/routes';

const GoToPlaidLinkButton = ({ navigation }: NavigationSmashProps) => {
  const user = useSelector(getUser);
  const cards = useSelector(getCreditCards);

  const onAddPlaidAccount: PlaidLinkOnSuccessCallbackType = async (
    onSuccessDataResponse,
    triggerEntityLinkFailed,
    routeAfterPlaid
  ) => {
    await savePlaidInstitution(
      onSuccessDataResponse,
      triggerEntityLinkFailed,
      user
    );
    routeAfterPlaid && navigation?.navigate(routeAfterPlaid);
  };

  const goToSafeConnect = () => navigation?.navigate(routes.SAFE_CONNECT);
  return (
    <View>
      {cards && cards.length > 0 ? (
        <PlaidBanksLinksViewWrapper
          onSuccessCallback={(
            onSuccessDataResponse: any,
            triggerEntityLinkFailed: triggerEntityLinkFailedType,
            routeAfterPlaid?: string
          ) => {
            (async () =>
              await onAddPlaidAccount(
                onSuccessDataResponse,
                triggerEntityLinkFailed,
                routeAfterPlaid
              ))();
          }}
        >
          <PlusButton />
        </PlaidBanksLinksViewWrapper>
      ) : (
        <PlusButton onPress={goToSafeConnect} />
      )}
    </View>
  );
};
export default (
  viewObj: ViewInterface,
  navigation: any,
  insets: EdgeInsets
) => {
  return {
    ...headerDefaultOptions(insets, theme, viewObj),
    headerLeft: () => {
      return (
        <View>
          <TouchableOpacity
            style={{
              paddingLeft: 15,
              paddingRight: 50,
              paddingVertical: 15,
            }}
            onPress={() => navigation?.goBack()}
          >
            <GoBackNavArrow />
          </TouchableOpacity>
        </View>
      );
    },
    headerRight: () => {
      return <GoToPlaidLinkButton navigation={navigation} />;
    },
    headerShown: true,
  };
};
