import React, { createContext, useState } from 'react';
import data from '../data';

export const SummeryDataContext = createContext();

const SummeryDataContextProvider = ({ children }) => {
  const [dataSet, setDataset] = useState(data);
  return (
    <SummeryDataContext.Provider
      value={{ data: dataSet, setDataset: setDataset }}
    >
      {children}
    </SummeryDataContext.Provider>
  );
};

export default SummeryDataContextProvider;
