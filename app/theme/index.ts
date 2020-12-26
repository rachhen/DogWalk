import {createTheme} from '@shopify/restyle';

export const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#ffffff',
  border: '#E2E2E2',
  background: '#F7F8FA',
  field: '#F2F2F2',
  notification: '#ff453a',

  errorLight: '#e57373',
  errorPrimary: '#f44336',
  errorDark: '#d32f2f',

  warningLight: '#ffb74d',
  warningPrimary: '#ff9800',
  warningDark: '#f57c00',

  infoLight: '#64b5f6',
  infoPrimary: '#2196f3',
  infoDark: '#1976d2',

  successLight: '#81c784  ',
  successPrimary: '#4caf50',
  successDark: '#388e3c',
};

const theme = createTheme({
  colors: {
    primary: palette.greenPrimary,
    accent: palette.purplePrimary,
    background: palette.background,
    card: palette.white,
    field: palette.field,
    text: palette.black,
    black: palette.black,
    border: palette.border,
    gray: 'gray',
    notification: palette.notification,
    warning: palette.warningPrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  buttonVariants: {
    outline: {
      borderRaduis: 3,
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
};
export const DefaultFont = 'Quicksand';
export const themeNavigation = {dark: false, colors: theme.colors};
export const darkThemeNavigation = {dark: true, colors: darkTheme.colors};
export default theme;
