import { useState, createContext } from 'react';
import jobsData from '../data/jobsData';

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [allJobs, setAllJobs] = useState(jobsData);

  return (
    <Context.Provider
      value={{
        allJobs,
        setAllJobs,
      }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
