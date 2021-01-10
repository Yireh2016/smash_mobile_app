import { Dispatch, SetStateAction } from 'react';
import { User } from '../../store/types/user';
import { triggerEntityLinkFailedType } from '../../analytics/triggerEntityLinkFailed/triggerEntityLinkFailed';
import {
  setPlanOnStore,
  setTotalDebt,
  setCreditCards,
  setFutureData,
} from '../../store/actions/actions';
import { PlanStore } from '../../types/Plan';
import { getAllData } from '../getAllData';
import savePlaidInstitution from '../savePlaidInstitution/savePlaidInstitution';

const updateAllAppData = async (
  data: any,
  plan: PlanStore,
  triggerEntityLinkFailed: triggerEntityLinkFailedType,
  user: User,
  setIsLoadingClone?: Dispatch<SetStateAction<boolean>>
) => {
  await savePlaidInstitution(data, triggerEntityLinkFailed, user);

  await getAllData({
    plan,
    setPlan: setPlanOnStore,
    setTotalDebt,
    setCreditCards,
    setFutureData,
    setIsLoadingClone,
  });
};

export default updateAllAppData;
