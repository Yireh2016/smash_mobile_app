import { Loader } from '../../store/types/isLoading';

interface ApiRequest {
  data: any;
  request: (data: any) => Promise<any>;
  successCallback?: (arg0: any) => void;
  errorCallback?: (arg: any) => void;
  loader?: Loader;
}

const apiRequest: (arg: ApiRequest) => Promise<any> = async ({
  data,
  request,
  successCallback,
  errorCallback,
}) => {
  try {
    const res = await request(data);
    successCallback && successCallback(res);
  } catch (error) {
    errorCallback && errorCallback(error);
  }
};

export default apiRequest;
