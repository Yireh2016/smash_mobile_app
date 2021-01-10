import { useEffect } from 'react';

export default (isUserAuthenticated: boolean, setisHomeController: any) => {
  useEffect(() => {
    if (isUserAuthenticated === null) {
      return;
    }
    setisHomeController(!isUserAuthenticated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAuthenticated]);
};
