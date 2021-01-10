import * as React from 'react';
import { StyleSheet } from 'react-native';
import renderer from 'react-test-renderer';
import { MainTitle, H3 } from '../texts/Texts';
import AnimatedLoader from './AnimatedLoader';
const styles = StyleSheet.create({
  lottie: {
    height: 200,
  },
});

it('AnimatedLoader renders correctly', () => {
  const ComponentProps = {
    overlayColor: '#000',
    source: require('../../assets/json/fullLoader.json'),
    animationStyle: styles.lottie,
    visible: true,
    speed: 1,
    title: (
      <MainTitle
        style={{
          textAlign: 'center',
        }}
      >
        Test Title
      </MainTitle>
    ),
    message: (
      <H3
        style={{
          textAlign: 'center',
        }}
      >
        Test message
      </H3>
    ),
  };
  const Element = () => {
    return <AnimatedLoader {...ComponentProps} />;
  };

  const rendered = renderer.create(<Element />).toJSON();
  expect(rendered).toMatchSnapshot();
});
