import GlobalStyles from './GlobalStyles';
import { DecoImage, JobCardList } from './components';
import { ContextProvider } from './components/Context';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Theme/Themes';
import useTheme from './components/Theme/useTheme';

const App = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ContextProvider>
        <GlobalStyles />
        <DecoImage theme={theme} toggleTheme={toggleTheme} />
        <JobCardList />
      </ContextProvider>
    </ThemeProvider>
  );
};

export default App;
