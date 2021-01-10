import { useEffect } from 'react';
import getUserCreatedAt from '../interfaces/getUserCreatedAt/getUserCreatedAt';
import errorAlert from '../helpers/errorAlert';
import { setUserCreatedAt, setIsLoading } from '../store/actions/actions';
import { User } from '../store/types/user';
import { routesType } from '../constants/routes';

const useGetUserCreatedAt = (
  user: User,
  lastRoute: string,
  routes: routesType
) => {
  useEffect(() => {
    const getUserCreatedAtAsyncFunction = async () => {
      setIsLoading(true);

      try {
        const res = await getUserCreatedAt(user.attributes.email);
        setUserCreatedAt(res.data.created_at);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        errorAlert(error);
      }
    };
    if (
      user &&
      !user.hasOwnProperty('createdAt') &&
      lastRoute === routes.SIGN_UP
    ) {
      getUserCreatedAtAsyncFunction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
};

export default useGetUserCreatedAt;
