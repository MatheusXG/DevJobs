// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        color: string;
        buttonBackground: string;
        buttonHoverBackground: string;
      };
      secondary: {
        color: string;
        buttonBackground: string;
        buttonHoverBackground: string;
      };
      background: string;
      white: string;
    };
  }
}
