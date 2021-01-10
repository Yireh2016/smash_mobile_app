import * as React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import styled from 'styled-components';

interface SmashButtonProps {
  label: string;
  onPress: any;
}

const SmashButton: React.FunctionComponent<SmashButtonProps> = ({
  onPress,
  label,
}) => {
  return (
    <StyledView>
      <StyledBtn onPress={onPress}>
        <StyledText>{label}</StyledText>
      </StyledBtn>
    </StyledView>
  );
};
const StyledText = styled(Text)`
  color: white;
  text-align: center;
  font-size: 20px;
`;
const StyledView = styled(View)`
  background: #42c998;
  border-radius: 12px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  border: 3px solid white;
`;

const StyledBtn = styled(TouchableWithoutFeedback)`
  color: white;
`;

export default SmashButton;
