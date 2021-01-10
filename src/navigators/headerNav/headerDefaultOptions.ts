import { CardStyleInterpolators } from '@react-navigation/stack';
import {
  screensTitleMap,
  ViewInterface,
} from '../../helpers/screenOptionsCreator';

export default (insets: any, theme: any, viewObj: ViewInterface) => {
  return {
    title: screensTitleMap[viewObj.view],
    headerShown: viewObj.headerShown === undefined ? true : viewObj.headerShown,
    headerTitleStyle: {
      fontFamily: theme.font.bold,
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerStyle: {
      height: insets.top + 55,
      backgroundColor: theme.palette.primary,
      elevation: 0,
      borderBottomWidth: 0,
      shadowOffset: { height: 0, width: 0 },
    },
    headerTitleAlign: 'right',
    headerMode: 'screen',
    gestureDirection: 'horizontal',
    gestureEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
};
