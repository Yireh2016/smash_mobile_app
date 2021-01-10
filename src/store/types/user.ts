import {
  SET_USER,
  SET_USER_CREATED_AT,
  RESET_USER,
  SET_IS_USER_AUTH,
  RESET_IS_USER_AUTH,
} from '../constants';

interface Attributes {
  email: string;
  given_name: string;
  family_name: string;
}
export interface User {
  id: string;
  username: string;
  attributes: Attributes;
  createdAt?: string;
}

export interface SetUserAction {
  type: typeof SET_USER | typeof RESET_USER;
  payload: User;
}
export interface SetCreatedAtAction {
  type: typeof SET_USER_CREATED_AT;
  payload: string;
}

export interface SetIsUSerAuthAction {
  type: typeof SET_IS_USER_AUTH | typeof RESET_IS_USER_AUTH;
  payload: boolean;
}
