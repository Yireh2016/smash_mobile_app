import logger from '../../helpers/logger/logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Keychain from 'react-native-keychain';
import { fromPairs } from 'lodash';

const keysLocalMemory = new Set<string>();
let dataLocalMemory: any = {};

const updateKeysStorage = async (key: string) => {
  return AsyncStorage.setItem(key, key);
};

/**
 *
 * Secure storage for Amplify/cognito's tokens. This storage uses keychain.setInternetCredentials
 * method for persisting secure storage authentication key/tokens pairs, and AsyncStorage.setItem for persisting unsecure storing the keys only.
 *
 * when storage syncing this class retrieve keys from asyncstorage and then retreive secure auth tokes from keychain
 * using keyChain.getInternetCredentials and save auth keys and auth keys/tokens pair on local memory
 *
 * this in local memory helps improve the reading process of tokens and keys
 *
 * @setItem
 * encrypt and save auth key tokens pairs on keychain for persisting/future session usage
 * copy auth key tokens pairs in memory for improving reading on session
 * saves unencrypt auth keys on asyncstorage for persisting/future session usage
 *
 * @getItem
 * read ath key tokens pairs from local memory
 *
 * @sync
 *get keys from asyncstogare and then gather auth key token pais from keychain
 *and copy them into local memory
 *
 * @clear
 * remove all auth data from asyncstorage, keychain and local memory
 *
 * @removeItem
 * removes specific key from async storage, specific auth key tokens pairs from keychain and
 * specific key and key/token pairs from in local memory
 */

class MyStorage {
  static syncPromise = null;

  static async setItem(key: string, value: string): Promise<string | null> {
    //saving key:value on keychain

    const res = await Keychain.setInternetCredentials(key, key, value);
    keysLocalMemory.add(key);

    await updateKeysStorage(key);

    //saving key on local memory set

    //saving key:value on local memory
    dataLocalMemory[key] = value;
    logger({
      str: 'setItem',
      obj: {
        key,
        value,
        res,

        dataLocalMemory,
      },
    });
    return dataLocalMemory[key];
  }

  static getItem(key: string): string | undefined {
    return Object.prototype.hasOwnProperty.call(dataLocalMemory, key)
      ? dataLocalMemory[key]
      : undefined;
  }

  static async sync() {
    if (!MyStorage.syncPromise) {
      const keysArr = await AsyncStorage.getAllKeys();

      const keyValueArr = [];
      for (let index = 0; index < keysArr.length; index++) {
        const key = keysArr[index];
        const value = await Keychain.getInternetCredentials(key);
        keysLocalMemory.add(key);

        if (value) {
          keyValueArr.push([key, value.password]);
        } else {
          keyValueArr.push([]);
        }
      }

      dataLocalMemory = fromPairs(
        keyValueArr.filter((keyValue) => keyValue.length > 0)
      );
      MyStorage.syncPromise = await Promise.resolve(dataLocalMemory);
    }
  }

  static async removeItem(key: string) {
    await Keychain.resetInternetCredentials(key);
    await AsyncStorage.removeItem(key);
    keysLocalMemory.delete(key);
    return delete dataLocalMemory[key];
  }

  static async clear() {
    const keysArr = [...keysLocalMemory.entries()];

    for (let index = 0; index < keysArr.length; index++) {
      await Keychain.resetInternetCredentials(keysArr[index][0]);
    }
    await AsyncStorage.clear();
    dataLocalMemory = {};
    return dataLocalMemory;
  }
}

export default MyStorage;
