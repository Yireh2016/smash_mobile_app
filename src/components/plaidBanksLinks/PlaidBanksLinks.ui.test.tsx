import * as React from 'react';
import { Text } from 'react-native-svg';
import renderer from 'react-test-renderer';
import PlaidBanksLinks from './PlaidBanksLinks';

describe('PlaidBanksLinks', () => {
  it('PlaidBanksLinks default', () => {
    const ComponentProps = {
      onSuccess: () => jest.fn(),
      tokenConfig: { token: 'test' },
      onExit: () => jest.fn(),
    };
    const Element = () => {
      return (
        <>
          {ComponentProps.tokenConfig.token === '' ? null : (
            <PlaidBanksLinks {...ComponentProps}>
              <Text>test</Text>
            </PlaidBanksLinks>
          )}
        </>
      );
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('PlaidBanksLinks without token', () => {
    const ComponentProps = {
      onSuccess: () => jest.fn(),
      tokenConfig: { token: '' },
      onExit: () => jest.fn(),
    };
    const Element = () => {
      return (
        <>
          {ComponentProps.tokenConfig.token === '' ? null : (
            <PlaidBanksLinks {...ComponentProps}>
              <Text>test</Text>
            </PlaidBanksLinks>
          )}
        </>
      );
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
