import { createContext, useContext, useState } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { light } from '../styles/light';
import { dark } from '../styles/dark';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  dark: dark,
  light: light,
};

export const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const savedTheme = localStorage.getItem('@theme') as ThemeType;

  const [theme, setTheme] = useState<'dark' | 'light'>(
    savedTheme || ThemeType.light
  );

  const toggleTheme = () => {
    const activeTheme =
      theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
    setTheme(activeTheme);
    localStorage.setItem('@theme', activeTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
