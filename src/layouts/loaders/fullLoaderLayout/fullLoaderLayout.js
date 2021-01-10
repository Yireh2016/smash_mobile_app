import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import routes from '../../../constants/routes';
import {
  getIsLoading,
  getRoutesHistory,
} from '../../../store/selectors/selectors';
import SmashAnimLoader from '../smashAnimLoader/SmashAnimLoader';

const FullLoaderLayout = ({ children }) => {
  const storeLoader = useSelector(getIsLoading);
  const routesHistory = useSelector(getRoutesHistory);
  const [loader, setLoader] = useState(false);

  const filteredRouterLoading = () => {
    if (routesHistory.slice(-1)[0].match(routes.DASHBOARD)) {
      setLoader(false);
      return;
    }
    setLoader(storeLoader);
  };
  useEffect(() => {
    routesHistory && routesHistory.length > 0 && filteredRouterLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routesHistory, storeLoader]);

  return (
    <>
      <SmashAnimLoader loader={loader} />
      {children}
    </>
  );
};

export default FullLoaderLayout;
