import { GlobalAppConfig } from '../../store/types/globalAppConfig';
import { API_GATEWAY, AUTH_API_GATEWAY } from '../../constants/apiGateway';
import Amplify from 'aws-amplify';
import SmashAuthStorage from '../../classes/SmashAuthStorage/SmashAuthStorage';

export default (globalAppConfig: GlobalAppConfig) => {
  Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: globalAppConfig.data.auth_api_gateway_region,
      userPoolId: globalAppConfig.data.cognito_user_pool_id,
      identityPoolId: globalAppConfig.data.cognito_identity_pool_id,
      userPoolWebClientId: globalAppConfig.data.cognito_client_id,
    },
    API: {
      endpoints: [
        {
          name: API_GATEWAY.name,
          endpoint: globalAppConfig.data.bank_accounts_api_gateway_url,
          region: globalAppConfig.data.bank_accounts_api_gateway_region,
        },
        {
          name: AUTH_API_GATEWAY.name,
          endpoint: globalAppConfig.data.auth_api_gateway_url,
          region: globalAppConfig.data.auth_api_gateway_region,
        },
      ],
    },
    storage: SmashAuthStorage,
  });
};
