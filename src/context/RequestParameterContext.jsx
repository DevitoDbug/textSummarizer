import React, { createContext, useState } from 'react';

export const RequestParameterContext = createContext();

const RequestParameterContextProvider = ({ children }) => {
  const [length, setLength] = useState('medium'); // ['short', 'medium', 'long']
  const [format, setFormat] = useState('paragraph'); // ['paragraph', 'sentence']
  const [extractiveness, setExtractiveness] = useState('low'); // ['low', 'medium', 'high']
  const [temperature, setTemperature] = useState(0.3); // [0.0, 1.0]

  const contextValue_RequestParameters = {
    length,
    setLength,
    format,
    setFormat,
    extractiveness,
    setExtractiveness,
    temperature,
    setTemperature,
  };

  return (
    <RequestParameterContext.Provider value={contextValue_RequestParameters}>
      {children}
    </RequestParameterContext.Provider>
  );
};

export default RequestParameterContextProvider;
