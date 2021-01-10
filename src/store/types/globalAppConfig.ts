import { SET_APP_CONFIG } from '../constants';

interface GlobalAppConfigData {
  auth_api_gateway_region: string;
  auth_api_gateway_url: string;
  bank_accounts_api_gateway_region: string;
  bank_accounts_api_gateway_url: string;
  contact_email: string;
  help_page_url: string;
  cognito_client_id: string;
  cognito_identity_pool_id: string;
  cognito_region: string;
  cognito_user_pool_id: string;
  segment_write_key: string;
  security_page_url: string;
}
export interface GlobalAppConfig {
  data: GlobalAppConfigData;
}

export interface SetGlobalAppConfigAction {
  type: typeof SET_APP_CONFIG;
  payload: GlobalAppConfig;
}
