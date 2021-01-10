import { RESET_PLAN, SET_PLAN } from '../store/constants';
import { AprPair, Card, NewCard } from './Card';

interface PlanInput {
  current_balance: number;
  weekly_payment: number;
  cards: Card[];
}

export interface Plan {
  monthly_payment_amount: number; // required, monthly_payment_amount >= sum(minimum_payment_amount de todas las tarjetas)
  estimated_payoff_time: number;
  estimated_savings: number;
  estimated_payoff_date: string;
  credit_cards: NewCard[] | never[];
}

export interface PlanStore {
  savedPlan: Plan | null;
  unsavedPlan: Plan | null;
}

export interface DebtPaymentPlanCard {
  bank_name: string; // required
  mask: string; // required
  next_payment_due_date: string; // required, YYYY-MM-DD
  current_balance: number;
  credit_utilization_percentage: number; // 20% seria 20.00
  minimum_payment_amount: number; // required
  last_statement_balance: number; // dos decimales
  suggested_payment_amount: number;
  aprs: AprPair[];
}
export interface DebtPaymentPlan {
  cards: DebtPaymentPlanCard[];
  monthly_payment_amount: number; // required, monthly_payment_amount >= sum(minimum_payment_amount de todas las tarjetas)
  estimated_payoff_time: number;
  estimated_savings: number;
  estimated_payoff_date: string;
}

export interface SetPlanAction {
  type: typeof SET_PLAN | typeof RESET_PLAN;
  payload: PlanStore;
}
