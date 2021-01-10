export default jest.mock('aws-amplify', () =>
  jest.genMockFromModule('aws-amplify')
);
