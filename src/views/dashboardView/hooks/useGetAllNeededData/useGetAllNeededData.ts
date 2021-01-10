import { useEffect } from 'react';
import { PlanStore } from '../../../../types/Plan';

import { getAllData } from '../../../../requests/getAllData';

export interface useGetAllDataInterface {
  plan: PlanStore;
  setPlan: React.Dispatch<React.SetStateAction<S>>;
  setTotalDebt: React.Dispatch<React.SetStateAction<S>>;
  setUtilizacion?: React.Dispatch<React.SetStateAction<S>>;
  setCreditCards: React.Dispatch<React.SetStateAction<S>>;
  setFutureData: React.Dispatch<React.SetStateAction<S>>;
  setIsLoadingClone?: React.Dispatch<React.SetStateAction<S>>;
  updateData?: number;
  successCallback?: () => void;
  errorCallback?: () => void;
}

const useGetAllData: (arg: useGetAllDataInterface) => void = ({
  plan,
  setPlan,
  setTotalDebt,
  setUtilizacion,
  setCreditCards,
  setFutureData,
  setIsLoadingClone,
  updateData,
  successCallback,
  errorCallback,
}) => {
  useEffect(() => {
    getAllData({
      plan,
      setPlan,
      setTotalDebt,
      setUtilizacion,
      setCreditCards,
      setFutureData,
      setIsLoadingClone,
      successCallback,
      errorCallback,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateData]);
};

export default useGetAllData;
