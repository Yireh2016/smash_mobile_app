import { ViewInterface } from '../../helpers/screenOptionsCreator';
import { EdgeInsets } from 'react-native-safe-area-context';
import theme from '../../theme/theme';
import headerDefaultOptions from './headerDefaultOptions';
export default (viewObj: ViewInterface, insets: EdgeInsets) => {
  return {
    ...headerDefaultOptions(insets, theme, viewObj),
    headerLeft: () => null,
    headerTitleAlign: 'center',
    headerMode: 'float',
  };
};
