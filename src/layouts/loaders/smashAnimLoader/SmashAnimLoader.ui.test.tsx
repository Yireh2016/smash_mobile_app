import * as React from 'react';
import renderer from 'react-test-renderer';
import SmashAnimLoader from './SmashAnimLoader';

describe('SmashAnimLoader ui test', () => {
  it('SmashAnimLoader renders correctly boolean loader true', () => {
    const ComponentProps = {
      loader: true,
    };
    const Element = () => {
      return <SmashAnimLoader {...ComponentProps} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('SmashAnimLoader renders correctly boolean loader false', () => {
    const ComponentProps = {
      loader: false,
    };
    const Element = () => {
      return <SmashAnimLoader {...ComponentProps} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('SmashAnimLoader renders correctly loader object enable', () => {
    const ComponentProps = {
      loader: { enable: true, title: 'title', message: 'message' },
    };
    const Element = () => {
      return <SmashAnimLoader {...ComponentProps} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('SmashAnimLoader renders correctly loader object disable', () => {
    const ComponentProps = {
      loader: { enable: false, title: 'title', message: 'message' },
    };
    const Element = () => {
      return <SmashAnimLoader {...ComponentProps} />;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
