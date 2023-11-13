import React, { createContext, useState } from 'react';

export const RequestParameterContext = createContext();

const RequestParameterContextProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedOptionsId_ValueId, setSelectedOptionsId_ValueId] = useState(0);

  const [data, setData] = useState({
    text: '',
    length: 'medium',
    format: 'bullets',
    extractiveness: 'high',
    temperature: 0.3,
  });

  const contextValue_RequestParameters = {
    selectedOption,
    setSelectedOption,
    selectedOptionsId_ValueId,
    setSelectedOptionsId_ValueId,
    data,
    setData,
  };

  return (
    <RequestParameterContext.Provider value={contextValue_RequestParameters}>
      {children}
    </RequestParameterContext.Provider>
  );
};

export default RequestParameterContextProvider;
