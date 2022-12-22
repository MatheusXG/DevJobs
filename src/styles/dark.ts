import { DefaultTheme } from 'styled-components';
import { defaultTheme } from './default';

export const dark = {
  ...defaultTheme,
  colors: {
    background: '#121721',
    headingColor: '#FFFFFF',
    primary: {
      color: '#FFFFFF',
      buttonBackground: '#5964E0',
      buttonHoverBackground: '#939BF4',
    },
    secondary: {
      color: '#5964E0',
      buttonBackground: '#EFF0FC',
      buttonHoverBackground: '#C5C9F4',
    },
  },
};
