import * as React from 'react';
import PlaidLink from 'react-native-plaid-link-sdk';
import PropTypes from 'prop-types';

//TODO: estos comentarios son para cuando plaid link este en la version 7 que
//tiene soporte para typescript
// export interface PlaidBanksLinksInterface {
//   onExit: LinkExitListener;
//   onSuccess: (data: any) => void;
//   tokenConfig: LinkTokenConfiguration;
//   children?: Element;
// }

const PlaidBanksLinks = ({ onSuccess, tokenConfig, onExit, children }) => {
  return (
    <>
      <PlaidLink
        clientName="Smash"
        token={tokenConfig.token}
        onSuccess={(data) => {
          onSuccess(data);
        }}
        onExit={onExit}
      >
        {children}
      </PlaidLink>
    </>
  );
};

PlaidBanksLinks.propTypes = {
  onExit: PropTypes.func,
  onSuccess: PropTypes.func,
  tokenConfig: PropTypes.object,
  children: PropTypes.element,
};

export default PlaidBanksLinks;
