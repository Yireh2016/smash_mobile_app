import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import useMyTheme from '../../hooks/useMyTheme';
import { H2 } from '../texts/Texts';

interface DashboardHeaderProps {
  title: string;
  size?: string;
  color?: string;
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const theme = useMyTheme();

const DashboardHeader: React.FunctionComponent<DashboardHeaderProps> = ({
  title,
  size = 'md',
  color = theme.palette.white,
}) => {
  return (
    <View>
      {size?.match('md') ? (
        <StyledText fontColor={color}>{title}</StyledText>
      ) : (
        <H2 color={color}>{title}</H2>
      )}
    </View>
  );
};

const StyledText = styled(Text)`
  color: ${(props) => props.fontColor};
  font-size: 22px;
  font-weight: bold;
`;

export default DashboardHeader;
