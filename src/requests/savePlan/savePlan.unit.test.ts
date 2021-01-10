import savePlanPromise from './savePlan';
import apiRequest from '../../helpers/apiRequest/apiRequest';
import plan from '../../mocks/plan';
import { setIsLoading } from '../../store/actions/actions';

jest.mock('../../store/actions/actions');
jest.mock('../../interfaces/setDebtPaymentPlan/setDebtPaymentPlan');
jest.mock('../../helpers/apiRequest/apiRequest');

describe('savePlanPromise ', () => {
  it('should call the function apiRequest one time and start the loader', async () => {
    await savePlanPromise(plan, 'test');
    expect(apiRequest).toBeCalledTimes(1);
    expect(setIsLoading).toBeCalledTimes(1);
    expect(typeof apiRequest).toBe('function');
  });
});
