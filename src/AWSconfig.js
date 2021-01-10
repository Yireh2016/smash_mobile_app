export const devConfig = {
  // FIX fue cambiado a dev config pero es prodConfig
  apiGatewaySmashMainService: {
    REGION: 'us-east-2',
    URL: 'https://32xnh8pmok.execute-api.us-east-2.amazonaws.com/dev/',
  },
  authApiGatewaySmashMainService: {
    REGION: 'us-east-2',
    URL: 'https://f3vk6cnzb2.execute-api.us-east-2.amazonaws.com/dev/',
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_vndAtJzuY',
    APP_CLIENT_ID: '3u8vc0et2ba2ldt64gl3lmjhho',
    IDENTITY_POOL_ID: 'us-east-2:30deecf5-cc9f-40b6-b19f-b80e2c662127',
  },
};

export const qaConfig = {
  // FIX fue cambiado a dev config pero es prodConfig
  apiGatewaySmashMainService: {
    REGION: 'us-east-2',
    URL: 'https://xidutz9ocg.execute-api.us-east-2.amazonaws.com/qa/',
  },
  authApiGatewaySmashMainService: {
    REGION: 'us-east-2',
    URL: 'https://rkbcurri8d.execute-api.us-east-2.amazonaws.com/qa/',
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_1kjlQpNHr',
    APP_CLIENT_ID: '437oicfff89scdds9uu2590atl',
    IDENTITY_POOL_ID: 'us-east-2:47e21337-c91c-4767-acce-8395efeb655c',
  },
};

/**
 * user_pool_id: us-east-2_vndAtJzuY
region: us-east-2
client_id: 3u8vc0et2ba2ldt64gl3lmjhho
identity_pool: us-east-2:30deecf5-cc9f-40b6-b19f-b80e2c662127
 */
