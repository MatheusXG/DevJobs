import { ThemeProvider } from './contexts/useTheme';

function App() {
  return (
    <>
      <ThemeProvider>
        <h1>Hello World</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
