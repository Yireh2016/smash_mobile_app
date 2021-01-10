import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SettingsMenuView from '../settingsMenuView/SettingsMenuView';
import VerticalFlex from '../../components/verticalFlex/VerticalFlex';
import CustomErrorModal from '../../components/customErrorModal/CustomErrorModal';
import { getGlobalAppConfig, getUser } from '../../store/selectors/selectors';
import { setIsLoading } from '../../store/actions/actions';
import deleteSmashAccount from '../../interfaces/deleteSmashAccount/deleteSmashAccount';
import stringFirstLetterUppercase from '../../helpers/stringFirstLetterUppercase';
import errorAlert from '../../helpers/errorAlert';
import signOutRequest from '../../helpers/signOut';
import { NavigationSmashProps } from '../../types/common/commonTypes';
import { GlobalAppConfig } from '../../store/types/globalAppConfig';
import routes from '../../constants/routes';
import { Linking } from 'react-native';

const SettingsMenuWrapper: React.FunctionComponent<NavigationSmashProps> = ({
  navigation,
}) => {
  const [fullname, setFullname] = useState('');
  const [createAt, setCreatedAt] = useState('');
  const [isModal, setIsModal] = useState(false);

  const user = useSelector(getUser);
  const globalAppConfig: GlobalAppConfig = useSelector(getGlobalAppConfig);
  const emailURL = globalAppConfig.data.contact_email;

  useEffect(() => {
    if (user) {
      setFullname(
        `${stringFirstLetterUppercase(
          user.attributes.given_name
        )} ${stringFirstLetterUppercase(user.attributes.family_name)}`
      );
      setCreatedAt(user.createdAt || '');
    }
  }, [user]);

  const deleteAccount = async () => {
    setIsLoading(true);

    try {
      await deleteSmashAccount(user.attributes.email);
      await signOutRequest(navigation);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      errorAlert(error);
    }
  };
  const signOut = async () => {
    await signOutRequest(navigation);
  };
  const showVerificationModal = () => {
    setIsModal(true);
  };
  const canOpenUrl = async (url: string) => {
    const carUrlBeOpened = await Linking.canOpenURL(url);
    return carUrlBeOpened;
  };
  const goToURL = async () => {
    const url = `mailto:${emailURL}`;
    const carUrlBeOpened = await canOpenUrl(url);
    if (carUrlBeOpened) {
      await Linking.openURL(url);
    }
  };
  const goToLinkedAccounts = () => {
    navigation?.navigate(routes.LINKED_ACCOUNTS);
  };
  return (
    <>
      <CustomErrorModal
        isModal={isModal}
        setIsModal={setIsModal}
        bodyMessage="This process can't be undone."
        okPressed={deleteAccount}
        errorTitle="Are you sure?"
      />
      <VerticalFlex>
        <SettingsMenuView
          goToURL={goToURL}
          goToLinkedAccounts={goToLinkedAccounts}
          signOut={signOut}
          fullname={fullname}
          date={createAt}
          deleteSmashAccount={showVerificationModal}
        />
      </VerticalFlex>
    </>
  );
};

export default SettingsMenuWrapper;
