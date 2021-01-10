import { PlanStore } from '../../../types/Plan';
import {
  SET_APP_CONFIG,
  SET_PLAN,
  SET_USER,
  SET_USER_CREATED_AT,
} from '../../../store/constants';
import { Loader } from '../../../store/types/isLoading';
import { User } from 'src/store/types/user';

const makeActionCreator = jest.fn();

export const setIsLoading = jest.fn((isLoading: Loader | boolean) =>
  makeActionCreator({
    type: SET_APP_CONFIG,
    payload: isLoading,
  })
);

export const setPlanOnStore = jest.fn((plan: PlanStore) =>
  makeActionCreator({
    type: SET_PLAN,
    payload: plan,
  })
);

export const setUser = jest.fn((user: User) =>
  makeActionCreator({
    type: SET_USER,
    payload: user,
  })
);

export const setUserCreatedAt = jest.fn((date: string) =>
  makeActionCreator({
    type: SET_USER_CREATED_AT,
    payload: date,
  })
);
