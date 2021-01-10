import { Account } from './accounts';
import { User } from './user';
import { Card } from '../../types/Card';
import { ModalInterface } from './modal';
import { GlobalAppConfig } from './globalAppConfig';
import { StatusBarInterface } from './statusBar';
import { PlanStore } from '../../types/Plan';
import { CardBalance } from '../../types/common/commonTypes';

export interface Store {
  accounts: Account[];
  user: User;
  creditCards: Card[];
  isUserAuthenticated: boolean;
  isLoading: boolean;
  modal: ModalInterface;
  globalAppConfig: GlobalAppConfig;
  statusBar: StatusBarInterface;
  routesHistory: string[];
  plan: PlanStore;
  futureDateData: CardBalance[];
  totalDebt: number;
}
