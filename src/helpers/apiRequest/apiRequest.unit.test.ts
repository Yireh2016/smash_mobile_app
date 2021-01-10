import apiRequest from './apiRequest';
jest.mock('../../store/actions/actions');

describe('apiRequest', () => {
  it('should the success callback be called one time with true', async () => {
    const arg = {
      data: 'test data',
      request: () => new Promise<boolean>((resolve) => resolve(true)),
      successCallback: jest.fn(),
      errorCallback: jest.fn(),
    };
    expect.assertions(3);
    return apiRequest(arg).then(() => {
      expect(arg.successCallback).toBeCalledWith(true);
      expect(arg.successCallback).toBeCalledTimes(1);
      expect(arg.errorCallback).toBeCalledTimes(0);
    });
  });

  it('should the error callback be called one time with false', async () => {
    const arg = {
      data: 'test data',
      request: () => new Promise<boolean>((_, reject) => reject(false)),
      successCallback: jest.fn(),
      errorCallback: jest.fn(),
    };
    expect.assertions(3);
    return apiRequest(arg).then(() => {
      expect(arg.errorCallback).toBeCalledWith(false);
      expect(arg.errorCallback).toBeCalledTimes(1);
      expect(arg.successCallback).toBeCalledTimes(0);
    });
  });
});
