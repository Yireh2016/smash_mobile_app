/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { P2 } from '../texts/Texts';
interface SmashLinkProps {
  onPress(): void;
  children: string | Element;
}
const SmashLink: React.FunctionComponent<SmashLinkProps> = ({
  onPress,
  children,
}) => (
  <P2 color="blue" style={{ fontWeigth: 'bold' }} onPress={onPress}>
    {children}
  </P2>
);

export default SmashLink;
