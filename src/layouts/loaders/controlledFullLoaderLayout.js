import React from 'react';
import SmashAnimLoader from './smashAnimLoader/SmashAnimLoader';

const ControlledFullLoaderLayout = ({ children, isLoading }) => {
  return (
    <>
      {!isLoading ? null : <SmashAnimLoader isLoading={isLoading} />}
      {children}
    </>
  );
};

export default ControlledFullLoaderLayout;
