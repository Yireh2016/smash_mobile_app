import * as React from 'react';

import theme from '../../theme/theme';

import { P1 } from '../texts/Texts';

interface SumarryInterface {
  text: string;
}

const Summary: React.FunctionComponent<SumarryInterface> = ({ text }) => {
  return <P1 color={theme.palette.white}>{text}</P1>;
};

export default Summary;
