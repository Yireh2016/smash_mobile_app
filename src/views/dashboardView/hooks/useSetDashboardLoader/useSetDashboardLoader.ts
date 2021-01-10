import React from 'react';

export default (
  routesHistory: string[],
  isLoadingClone: boolean,
  dashboardLocalLoaderRef: any
) => {
  React.useEffect(() => {
    if (dashboardLocalLoaderRef.current && routesHistory.length > 0) {
      dashboardLocalLoaderRef?.current?.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingClone]);
};
