/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View } from 'react-native';
import useMyTheme from '../../hooks/useMyTheme';
import { P1 } from '../texts/Texts';

interface DashboardContentPairProps {
  title: string;
  content: string | Element;
  titleColor?: string;
  contentColor?: string;
}

const DashboardContentPair: React.FunctionComponent<DashboardContentPairProps> = ({
  title,
  content,
  titleColor,
  contentColor,
}) => {
  const theme = useMyTheme();
  return (
    <View>
      <P1 style={{ color: titleColor || theme.palette.primary }}>{title}</P1>
      <P1
        style={{
          color: contentColor || theme.palette.primary,
          fontSize: 17,
        }}
      >
        {content}
      </P1>
    </View>
  );
};

export default DashboardContentPair;
