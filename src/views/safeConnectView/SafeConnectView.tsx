/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';
import SmashButton from '../../components/smashButton/SmashButton';
import CheckMark from '../../assets/CheckMark';
import { H2, P1 } from '../../components/texts/Texts';
import InfoGeneralLayout from '../../layouts/infoGeneralLayout/InfoGeneralLayout';
import PlaidBanksLinksViewWrapper, {
  PlaidLinkOnSuccessCallbackType,
} from '../plaidBanksLinksView/PlaidBanksLinksViewWrapper';
import SafeAndShield from '../../assets/SafeAndShield';
interface SafeConnectProps {
  onAddPlaidItemSuccess: PlaidLinkOnSuccessCallbackType;
  onPlaidLinkExit: () => void;
}

const SafeConnect: React.FunctionComponent<SafeConnectProps> = ({
  onAddPlaidItemSuccess,
  onPlaidLinkExit,
}) => {
  const securityStatements = [
    'Connect your accounts through the industry leader platform.',
    'We never, ever store your bank credentials.',
    'We only use your data to create your plan and give you insights and recommendations.',
    'You can disconnect your accounts whenever you want.',
  ];
  const securityStatementsComponents = securityStatements.map(
    (statement: string, index: number) => {
      return (
        <View
          key={index}
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}
        >
          <View style={{ marginRight: 28 }}>
            <CheckMark factor={1.5} />
          </View>
          <View style={{ maxWidth: 289 }}>
            <P1>{statement}</P1>
          </View>
        </View>
      );
    }
  );

  const safeConnectFooter = (
    <PlaidBanksLinksViewWrapper
      onExitCallback={onPlaidLinkExit}
      onSuccessCallback={onAddPlaidItemSuccess}
    >
      <View style={{ paddingHorizontal: 24 }}>
        <SmashButton type="no-action" label="Connect" />
      </View>
    </PlaidBanksLinksViewWrapper>
  );
  return (
    <InfoGeneralLayout footer={safeConnectFooter}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 69,
        }}
      >
        <SafeAndShield factor={0.2} />
        <H2 style={{ textAlign: 'center', maxWidth: 243, marginTop: 17 }}>
          Connecting your cards is safe and secure
        </H2>
      </View>
      {securityStatementsComponents}
    </InfoGeneralLayout>
  );
};

export default SafeConnect;
