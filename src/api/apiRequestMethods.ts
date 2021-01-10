import { API } from 'aws-amplify';
import logger from '../helpers/logger/logger';
import { API_GATEWAY, AUTH_API_GATEWAY } from '../constants/apiGateway';

export const get = (url: string, query?: object) => {
  logger({ str: 'get', obj: { url, query } });
  return API.get(API_GATEWAY.name, url, {
    queryStringParameters: query,
  });
};
export const post = (url: string, body?: object) => {
  logger({ str: 'post', obj: { url, body } });
  return API.post(API_GATEWAY.name, url, { body });
};

export const head = (url: string) => {
  logger({ str: 'head', obj: { url } });
  return API.head(API_GATEWAY.name, url, '');
};

export const del = (url: string, query?: object) => {
  logger({ str: 'delete', obj: { url, query } });
  return API.del(API_GATEWAY.name, url, { query });
};

export const authGet = (url: string, query?: object) => {
  logger({ str: 'get auth api', obj: { url, query } });
  return API.get(AUTH_API_GATEWAY.name, url, {
    queryStringParameters: query,
  });
};

export const authDel = (url: string, query?: object) => {
  logger({ str: 'delete auth api', obj: { url, query } });
  return API.del(AUTH_API_GATEWAY.name, url, { query });
};
