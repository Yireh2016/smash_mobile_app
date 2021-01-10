import { ViewStyle } from 'react-native';
export const SMASHGREEN: string = '#29b782';
export const SMASHBLUE: string = '#10202b';
export const SMASHLIGHTBLUE: string = '#142836';
export const SMASHLIGHTESTBLUE: string = '#2C3D49';
export const SMASHWHITE: string = '#fff';
export const SMASHBLACK: string = '#000';
export const SMASHGRAY: string = '#E5E5EA';
export const SMASHRED: string = '#FF4A43';
export const SMASHLIGHTBLUESECONDARY: string = '#263642';

export interface themeInterface {
  palette: {
    primary: string;
    primaryLight: string;
    primaryContrast: string;
    secondary: string;
    tertiary: string;
    error: string;
    navigation: string;
    white: string;
    black: string;
    gray: string;
    red: string;
  };
  background: {
    color: string;
    secondary: string;
  };
  nav: ViewStyle;
  button: {
    container: string;
  };
  layout: {
    flex: number;
    paddingHorizontal: number;
  };
  paddingLayout: {
    paddingHorizontal: number;
  };
  viewMarginTop: {
    marginTop: number;
  };
  fullFlex: {
    flex: number;
  };
  font: {
    regular: string;
    bold: string;
  };
  horizontalContentContainer: ViewStyle;
}
const navigationColor = SMASHBLUE;
const theme: themeInterface = {
  palette: {
    primary: SMASHBLUE, //SMASHGREEN
    primaryLight: SMASHLIGHTBLUE,
    primaryContrast: SMASHWHITE,
    tertiary: SMASHLIGHTESTBLUE,
    error: SMASHRED,
    secondary: SMASHGREEN,
    navigation: navigationColor,
    white: SMASHWHITE,
    black: SMASHBLACK,
    gray: SMASHGRAY,
    red: SMASHRED,
  },
  font: {
    bold: 'OpenSans-Bold',
    regular: 'OpenSans-Regular',
  },
  nav: {
    flex: 0.05,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: navigationColor,
  },
  background: {
    color: SMASHBLUE,
    secondary: SMASHLIGHTBLUESECONDARY,
  },
  layout: {
    flex: 1,
    paddingHorizontal: 16.5,
  },
  paddingLayout: {
    paddingHorizontal: 16.5,
  },
  viewMarginTop: {
    marginTop: 30,
  },
  fullFlex: { flex: 1 },
  horizontalContentContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
};

export default theme;
