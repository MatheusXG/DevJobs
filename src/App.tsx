import { ThemeProvider } from './contexts/useTheme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider>
        <h1>Hello World</h1>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
