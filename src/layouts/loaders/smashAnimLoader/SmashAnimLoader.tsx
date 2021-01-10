import * as React from 'react';
import { StyleSheet } from 'react-native';

import AnimatedLoader from '../../../components/animatedLoader/AnimatedLoader';
import { SMASHBLUE } from '../../../theme/theme';
import { H3, MainTitle } from '../../../components/texts/Texts';
import { Loader } from '../../../store/types/isLoading';

const styles = StyleSheet.create({
  lottie: {
    height: 200,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

interface SmashAnimLoaderProps {
  loader: Loader | boolean;
}

const SmashAnimLoader = ({ loader }: SmashAnimLoaderProps) => {
  let isLoading;
  let _loader: Loader = { enable: false, title: '', message: '' };

  const isLoaderTypeBool = typeof loader === 'boolean';

  if (isLoaderTypeBool) {
    isLoading = loader;
  } else {
    _loader = typeof loader === 'object' ? { ...loader } : _loader;
    isLoading = _loader.enable;
  }

  const title =
    typeof _loader === 'object' && _loader && _loader.enable ? (
      <MainTitle style={styles.textAlignCenter}>{_loader?.title}</MainTitle>
    ) : null;

  const message =
    typeof _loader === 'object' && _loader && _loader.enable ? (
      <H3 style={styles.textAlignCenter}>{_loader?.message}</H3>
    ) : null;

  return (
    <AnimatedLoader
      visible={isLoading}
      overlayColor={SMASHBLUE}
      source={require('../../../assets/json/fullLoader.json')}
      animationStyle={styles.lottie}
      speed={1}
      title={title}
      message={message}
    />
  );
};
export default SmashAnimLoader;
