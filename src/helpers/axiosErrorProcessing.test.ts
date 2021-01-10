import axiosErrorProcessing from './axiosErrorProcessing';

describe('Axios Error processing', () => {
  const message = 'error message';

  it('When Error comes with message', () => {
    const error = {
      response: {
        data: {
          message,
        },
      },
    };

    expect(axiosErrorProcessing(error)).toBe(message);
  });

  it('When Error comes with request and response', () => {
    const request = 'request';

    const error = {
      request,
      response: {
        data: {
          message,
        },
      },
    };

    expect(axiosErrorProcessing(error)).toBe(message);
  });

  it('When Error comes with request and message', () => {
    const request = 'request';

    const error = {
      request,
      message,
    };

    expect(axiosErrorProcessing(error)).toBe(JSON.stringify(error.request));
  });
  it('When Error comes with  message', () => {
    const error = {
      message,
    };

    expect(axiosErrorProcessing(error)).toBe(JSON.stringify(error.message));
  });

  it('When Error comes without message, request, message nor response', () => {
    const error = {
      test: 'test',
    };

    expect(axiosErrorProcessing(error)).toBe(
      'Unknown error, please try again later'
    );
  });
});
