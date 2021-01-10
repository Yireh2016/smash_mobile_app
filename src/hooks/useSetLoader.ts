import { useEffect } from 'react';
import { setIsLoading } from '../store/actions/actions';
import routes from '../constants/routes';

export default (
  routesHistory: string[],
  setIsLoadingClone: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    if (
      routesHistory.length > 0 &&
      routesHistory.slice(-1)[0]?.match(routes.ADD_CARDS_MODAL)
    ) {
      setIsLoadingClone(true);
      setIsLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routesHistory.length]);
};
