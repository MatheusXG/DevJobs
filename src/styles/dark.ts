import { defaultTheme } from './default';

export const dark = {
  ...defaultTheme,
  colors: {
    background: '#121721',

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

    headingColor: '##FFFFFF',
    fontColor: '#FFFFFF',
    placeholderColor: '#8C9096',

    iconButtonColor: '#F4F6F8',

    labelInputColor: '#FFFFFF',
    backgroundInputCheckbox: '#303742',

    backgroundContainer: '#19202D',

    violet: '#5964E0',
    lightViolet: '#939BF4',
    veryDarkBlue: '#19202D',
    midnight: '#121721',
    white: '#FFFFFF',
    lightGray: '#F4F6F8',
    gray: '#9DAEC2',
    darkGray: '#6E8098',
  },
};
