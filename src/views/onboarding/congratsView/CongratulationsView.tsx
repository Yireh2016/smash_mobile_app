/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import SimpleLine from '../../../assets/SimpleLine';
import InfoLayout from '../../../layouts/infoLayout/InfoLayout';
import { P1, H1, MainParagraph, H3 } from '../../../components/texts/Texts';
import VerticalListTop from '../../../assets/VerticalListTop';
import VerticalListMid from '../../../assets/VerticalListMid';
import VerticalListBottom from '../../../assets/VerticalListBottom';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface CongratulationsViewProps {
  onStartPress: () => void;
}

const CongratulationsView: React.FunctionComponent<CongratulationsViewProps> = ({
  onStartPress,
}) => {
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    titleContainer: {
      marginTop: insets.top,
    },
    stepsContainer: {
      flexDirection: 'row',
    },
  });
  const stepsArr = [
    {
      title: 'Connect your credit cards',
      text: 'To create your personalized plan',
    },
    {
      title: 'Connect your bank accounts',
      text: 'To recommend a recurring payment toward your cards',
    },
    {
      title: 'Set up your goal',
      text: 'Choose a monthly payment towards your cards to commit with',
    },
  ];

  const stepsMaps = stepsArr.map((step: any, i: number) => {
    const { title, text } = step;
    return (
      <View
        key={i}
        style={{ marginLeft: 10, marginTop: i === 0 ? 0 : i === 1 ? 70 : 55 }}
      >
        <View
          style={{
            marginTop: 5,
            position: 'absolute',
            top: i === 0 ? 0 : -105,
          }}
        >
          {i === 0 ? (
            <VerticalListTop />
          ) : i === 1 ? (
            <VerticalListMid />
          ) : (
            <VerticalListBottom />
          )}
        </View>
        <View style={{ marginLeft: 40 }}>
          <H1>{title}</H1>
          <P1>{text}</P1>
        </View>
      </View>
    );
  });

  return (
    <InfoLayout
      titleComponent={
        <View style={styles.titleContainer}>
          <SimpleLine />
          <View style={{ marginTop: 10 }}>
            <H1>Congratulations!</H1>
            <MainParagraph style={{ marginBottom: 30 }}>
              Pay down credit card debt faster with a personalized plan from
              Smash
            </MainParagraph>
          </View>
        </View>
      }
      actionLabel="Start"
      onPress={onStartPress}
    >
      <MainParagraph style={{ marginBottom: 30 }}>
        Launch your plan In<H3> 3 steps</H3>
      </MainParagraph>
      <View style={{ paddingRight: 0 }}>{stepsMaps}</View>
    </InfoLayout>
  );
};

export default CongratulationsView;
