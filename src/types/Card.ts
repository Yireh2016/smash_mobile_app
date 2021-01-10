export interface AprPair {
  balance_subject_to_apr: number;
  apr_percentage: number;
  apr_type: string;
}

export interface NewCard {
  account_id: string; // required
  bank_name: string; // required
  mask: string; // required
  next_payment_due_date: string; // required, YYYY-MM-DD
  current_balance: number;
  purchase_apr_percentage: number;
  credit_utilization_percentage: number; // 20% seria 20.00
  minimum_payment_amount: number; // required
  last_statement_balance: number;
  suggested_payment_amount?: number;
  aprs: AprPair[];
}

export interface Card {
  account_id: string;
  bank: string;
  number: string;
  current_balance: number;
  credit_utilization_percentage: number;
  statement_balance: number;
  purchase_apr_percentage: number;
  other_aprs: AprPair[];
  min_payment: number;
  payment_due: string;
}
