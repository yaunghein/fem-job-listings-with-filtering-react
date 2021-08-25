import GlobalStyles from './GlobalStyles';
import { DecoImage, JobCardList } from './components';
import { ContextProvider } from './components/Context';

const App = () => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <DecoImage />
      <JobCardList />
    </ContextProvider>
  );
};

export default App;
