/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';

import { NativeModules } from 'react-native';

NativeModules.RNAnalytics = {};
NativeModules.RNCNetInfo = {};

if (typeof window !== 'object') {
  global.window = global;
  global.window.navigator = {};
}

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-plaid-link-sdk', () =>
  jest.requireActual('react-native-plaid-link-sdk')
);

jest.mock('@react-native-community/netinfo', () => {
  return {
    getCurrentState: jest.fn(),
    addListener: jest.fn(),
    removeListeners: jest.fn(),
  };
});

jest.mock('aws-amplify', () => jest.genMockFromModule('aws-amplify'));

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
