import * as React from 'react';
import renderer from 'react-test-renderer';
import {
  MainTitle,
  H1,
  H2,
  H3,
  SmashLink,
  MainParagraph,
  P1,
  P2,
  P3,
} from './Texts';

describe('Texts renders correctly', () => {
  it('Text H1 renders correctly', () => {
    const Element = () => {
      return <H1>Test</H1>;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  it('Text H2 renders correctly', () => {
    const Element = () => {
      return <H2>Test</H2>;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  it('Text H3 renders correctly', () => {
    const Element = () => {
      return <H3>Test</H3>;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  it('Text P1 renders correctly', () => {
    const Element = () => {
      return <P1>Test</P1>;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('Text MainTitle renders correctly', () => {
    const Element = () => {
      return <MainTitle>Test</MainTitle>;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('Text SmashLink renders correctly', () => {
    const Element = () => {
      return <SmashLink>Test</SmashLink>;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('Text P2 renders correctly', () => {
    const Element = () => {
      return <P2>Test</P2>;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  it('Text P3 renders correctly', () => {
    const Element = () => {
      return <P3>Test</P3>;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('Text MainParagraph renders correctly', () => {
    const Element = () => {
      return <MainParagraph>Test</MainParagraph>;
    };

    const rendered = renderer.create(<Element />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
