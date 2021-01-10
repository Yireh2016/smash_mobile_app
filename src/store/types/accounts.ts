import { SET_ACCOUNTS, RESET_ACCOUNTS } from '../constants';

export enum AccountTypes {
  DEPOSITORY = 'depository',
}

export enum AccountSubTypes {
  CHECKINGS = 'checking',
  SAVINGS = 'savings',
}
export interface Account {
  institution_name: string;
  name: string;
  current_balance: number;
  subtype: string;
  type: string;
  updated_at: string;
  number: string;
  purchase_apr_percentage: number | null;
  id: string;
}

export interface SetAccountAction {
  type: typeof SET_ACCOUNTS | typeof RESET_ACCOUNTS;
  payload: Account[];
}
