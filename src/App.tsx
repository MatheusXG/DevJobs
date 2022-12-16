import { Button } from './components/Button';
import { ThemeProvider } from './contexts/useTheme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider>
        <Button color="primary">{'Load More'}</Button>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
