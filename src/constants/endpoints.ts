export const ACCOUNTS = {
  url: '/api/accounts', //200 o 404  o error
};

export const CREDIT_CARDS = {
  url: '/api/credit-cards', //200 o 404 o error
};

export const REFRESH_PLAID_DATA = {
  url: '/api/plaid/refresh-data', //204 o error
};

export const BALANCES = {
  url: '/api/balances', //200 o 404 o error
};

export const PLAID = {
  url: '/api/plaid/config', //200 o error
};

export const ACCESS = {
  url: '/api/access-token', //201 ok o 409 si existe  o error
};

export const CALCULATOR = {
  url: '/api/calculator', //200 o 404  o error
};

export const AUTH = {
  createdAt: (username: string) => `/auth/users/${username}`, //200 o 404 (no implementado) o error
};

export const PLANS = {
  url: '/api/plans',
};

export const PAYMENT_PLAN = {
  url: '/api/payment-plan',
};

export const DEBT_PAYMENT_PLAN = {
  url: '/api/debt-payment-plan',
};

export const ITEMS = {
  url: '/api/items', //200 (true,false) por ahora
  delete: (id: string) => `/api/items/${id}`,
};

export const USER = {
  url: '/users', //200 (true,false) por ahora
  delete: (email: string) => `/users/${email}`,
};

export const DEEP_LINK = {
  uri: 'smashapp://',
};
