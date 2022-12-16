// import original module declarations
import 'styled-components';

//inferência de tipos

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
    };
  }
}
