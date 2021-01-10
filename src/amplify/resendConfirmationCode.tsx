import { Auth } from 'aws-amplify';

interface SuccesFnInterface {
  (res: any): void;
}
interface ErrorFnInterface {
  (err: any): void;
}

async function resendConfirmationCode(
  username: string,
  successFn?: SuccesFnInterface,
  errFn?: ErrorFnInterface
): Promise<T> {
  try {
    const res = await Auth.resendSignUp(username);
    successFn && successFn(res);
  } catch (err) {
    errFn && errFn(err);
  }
}

export default resendConfirmationCode;
