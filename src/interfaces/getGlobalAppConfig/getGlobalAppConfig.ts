import axios from 'axios';

/**
 * get dynamic global app settings
 *
 */

/**
 * example:
 * {
  "data": {
    "auth_api_gateway_region": "us-east-x",
    "auth_api_gateway_url": "https:/XXXXXXXXXXXXXXXX/auth",
    "bank_accounts_api_gateway_region": "us-east-X",
    "bank_accounts_api_gateway_url": "https://xxxx.smash.money/bank-accounts",
    "cognito_client_id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "cognito_identity_pool_id": "us-east-x:XXXXXXX-XXXXXXXXX-XXXXXXXXXXX",
    "cognito_user_pool_id": "us-east-x_xxxxxxx",
    "contact_email": "hello@smash.money",
    "help_page_url": "support.smash.money",
    "security_page_url": "https://xxxxxxx.s3.us-east-x.amazonaws.com/security.html",
    "cognito_region": "us-east-x",
    "segment_write_key": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  }
}
 */
export default (url: string) => axios.get(url);
