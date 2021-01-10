import {
  resetPlan,
  setAccounts,
  setIsLoading,
  resetAccount,
  resetCreditCards,
  resetFutureData,
  resetTotalDebt,
} from '../store/actions/actions';
import apiRequest from '../helpers/apiRequest/apiRequest';
import getGlobalBalanceRequest from '../interfaces/getGlobalBalance/getGlobalBalance';
import getCreditCardsRequest from '../interfaces/getCreditCards/getCreditCards';
import getAccountsRequest from '../interfaces/getAccounts/getAccounts';
import getPlanCalculatorInputRequest from '../interfaces/getPlanCalculatorInput/getPlanCalculatorInput';
import getDebtPaymentPlan from '../interfaces/getDebtPaymentPlan/getDebtPaymentPlan';
import { Plan, PlanStore } from '../types/Plan';
import { useGetAllDataInterface } from '../views/dashboardView/hooks/useGetAllNeededData/useGetAllNeededData';
import { Card } from '../types/Card';
import { Account } from '../store/types/accounts';
import httpCodes from '../constants/httpCodes';

interface FutureData {
  apr_percentage: number;
  balance_subject_to_apr: number;
}

interface GlobalBalances {
  total_balances: string;
  utilization_percentage: string;
}

export const getGlobalBalance = () =>
  new Promise<GlobalBalances>(async (resolve, reject) => {
    try {
      const resGetGlobalBalance = await getGlobalBalanceRequest();
      const total_balances =
        resGetGlobalBalance.data.credit_card.current_balance || '-';
      const utilization_percentage =
        resGetGlobalBalance.data.credit_card.utilization_percentage || '-';

      resolve({
        total_balances,
        utilization_percentage,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getCreditCards = () =>
  new Promise<Card[]>(async (resolve, reject) => {
    try {
      const { data } = await getCreditCardsRequest();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const getAccounts = () =>
  new Promise<Account[]>(async (resolve, reject) => {
    try {
      const { accounts } = await getAccountsRequest();
      resolve(accounts);
    } catch (error) {
      reject(error);
    }
  });

export const getPlanCalculatorInput = () =>
  new Promise<FutureData[]>(async (resolve, reject) => {
    try {
      const { data } = await getPlanCalculatorInputRequest();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const getAllData: (
  arg: useGetAllDataInterface
) => Promise<any> = async ({
  plan,
  setPlan,
  setTotalDebt,
  setUtilizacion,
  setCreditCards,
  setFutureData,
  setIsLoadingClone,
  successCallback,
  errorCallback,
}) => {
  setIsLoading(true);
  setIsLoadingClone && setIsLoadingClone(true);

  try {
    const [globalBalance, cards, futureDateData, accounts] = await Promise.all([
      getGlobalBalance(),
      getCreditCards(),
      getPlanCalculatorInput(),
      getAccounts(),
    ]);

    setTotalDebt(globalBalance.total_balances || 0);
    setUtilizacion && setUtilizacion(globalBalance.utilization_percentage);
    setCreditCards(cards);
    setFutureData(futureDateData);
    setAccounts(accounts);
    setIsLoading(false);
    successCallback && successCallback();
  } catch (error) {
    if (error?.response?.status === httpCodes.NOT_FOUND) {
      resetAccount();
      resetCreditCards();
      resetFutureData();
      resetTotalDebt();
    }
    errorCallback && errorCallback();
  }
  await getPlanData(plan, setPlan, setIsLoadingClone);
};

export const getPlanData = (
  planStore: PlanStore,
  setPlan: React.Dispatch<React.SetStateAction<S>>,
  setIsLoadingClone?: React.Dispatch<React.SetStateAction<S>>
) => {
  apiRequest({
    data: {
      limit: 1,
      sort_by: 'created_at.desc',
    },
    request: getDebtPaymentPlan,
    successCallback: (res: any) => {
      const { data } = res;
      let savedPlan: Plan | null = data[0] || null;
      let planCopy = planStore;

      if (savedPlan?.credit_cards.length) {
        if (planCopy) {
          planCopy.savedPlan = savedPlan;
        } else {
          planCopy = {
            savedPlan,
            unsavedPlan: null,
          };
        }
      } else {
        planCopy = {
          savedPlan: null,
          unsavedPlan: null,
        };
      }
      setPlan(planCopy);
      setIsLoading(false);
      setIsLoadingClone && setIsLoadingClone(false);
    },
    errorCallback: (error) => {
      if (error?.response?.status === httpCodes.NOT_FOUND) {
        resetPlan();
      }
      setIsLoading(false);
      setIsLoadingClone && setIsLoadingClone(false);
    },
  });
};
