// import original module declarations
import 'styled-components';

// and extend them!

export interface Sizes {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
}

export interface Font {
  family: string;
  sizes: Sizes;
  weight: {
    regular: number;
    bold: number;
  };
  lineHeights: LineHeights;
}

export interface LineHeights {
  normal: string;
  none: number;
  small: string;
  medium: string;
  large: string;
  huge: string;
}

export interface Radius {
  xsmall: string;
  small: string;
  medium: string;
}

export interface Border {
  radius: Radius;
}

export interface Grid {
  container: string;
  gutter: string;
}

export interface Spacings {
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
}

export interface Layers {
  base: number;
  menu: number;
  overlay: number;
  modal: number;
  alwaysOnTop: number;
}

export interface Transition {
  default: string;
  fast: string;
}

interface Colors {
  background: string;
  headingColor: string;
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
}

declare module 'styled-components' {
  export interface DefaultTheme {
    font: Font;
    lineHeights: LineHeights;
    border: Border;
    grid: Grid;
    spacings: Spacings;
    layers: Layers;
    transition: Transition;
    colors: Colors;
  }
}
