import React, { createContext, useState } from 'react';

export const DowloadPdfContext = createContext();

const DownloadPDFContextProvider = ({ children }) => {
  const [pdfText, setPdfText] = useState('');
  const [pdfTitle, setPdfTitle] = useState('');

  const pdfData = {
    pdfText,
    setPdfText,
    pdfTitle,
    setPdfTitle,
  };

  return (
    <DowloadPdfContext.Provider value={pdfData}>
      {children}
    </DowloadPdfContext.Provider>
  );
};

export default DownloadPDFContextProvider;
