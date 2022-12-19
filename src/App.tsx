import { ThemeProvider } from './contexts/useTheme';
import { AppRoutes } from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
